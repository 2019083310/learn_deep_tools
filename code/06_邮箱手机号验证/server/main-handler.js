/**************************************************
* 功能：1.发送短信 2.登录（校验短信验证码）
* 函数运行的前提条件： 
1.创建模板函数后，请先添加函数运行角色，并给该角色关联短信QcloudSMSFullAccess权限。
2.本服务用到redis存储验证码，请先申请redis资源，并将redis的host和密码设置成环境变量。
3.去云短信控制台申请短信模板和签名
* 详细请参考：https://github.com/tencentyun/scf-demo-repo/tree/master/Nodejs8.9-SmsVerificationCode
***************************************************/

const redis = require("ioredis");
const tencentcloud = require("tencentcloud-sdk-nodejs");
const expireTime = 5 * 60; //验证码有效期5分钟

// ?主入口
exports.main_handler = async (event, context, callback) => {
  let queryString = event.queryString; // get形式
  if (event.httpMethod === "POST") {
    // post形式
    queryString = event.body;
  }

  if (!queryString || !queryString.method || !queryString.phone) {
    return {
      codeStr: "InValidParam",
      msg: "缺少参数",
    };
  }

  // 本地使用redis
  const redisStore=new redis()
  // 腾讯云redis
  // const redisStore = new redis({
  //   port: 6379, // Redis instance port, redis实例端口
  //   host: process.env.REDIS_HOST, // Redis instance host, redis实例host
  //   family: 4,
  //   password: process.env.REDIS_PASSWORD, // Redis instance password, redis实例密码
  //   db: 0,
  // });

  if (queryString.method === "getSms") {
    return await getSms(queryString, redisStore);
  } else if (queryString.method === "login") {
    return await loginSms(queryString, redisStore);
  }
};

/*
 * 功能：登录，校验验证码
 */
async function loginSms(queryString, redisStore) {
  if (!queryString.code) {
    return {
      codeStr: "MissingCode",
      errorMessage: "缺少验证码参数",
    };
  }

  const redisResult = await redisPromise(redisStore, queryString);

  if (!redisResult) {
    //没有找到记录
    return {
      codeStr: "CodeHasExpired",
      msg: "验证码已过期",
    };
  }
  let result = JSON.parse(redisResult);

  if (!result || result.used || result.num >= 3) {
    return {
      codeStr: "CodeHasValid",
      msg: "验证码已失效",
    };
  }

  if (result.code == queryString.code) {
    //验证码校验正确
    updateRedis(redisStore, queryString.phone, result, true); //将验证码更新为已使用
    // 验证码校验通过，执行登录逻辑
    console.log("校验验证码成功");
    return {
      codeStr: "Success",
      msg: "校验验证码成功",
    };
  } else {
    // 验证码校验失败
    updateRedis(redisStore, queryString.phone, result, false);
    return {
      codeStr: "CodeIsError",
      msg: "请检查手机号和验证码是否正确",
    };
  }
}
// 更新redis状态
function updateRedis(redisStore, phone, result, used) {
  const sessionCode = {
    code: result.code,
    sessionId: result.sessionId,
    num: ++result.num, //验证次数，最多可验证3次
    used: used, //true-已使用，false-未使用
  };

  redisStore.set("sms_" + phone, JSON.stringify(sessionCode));
  if (used) {
    redisStore.expire("sms_" + phone, 0);
  } else {
    redisStore.expire("sms_" + phone, expireTime);
  }
}
/*
 * 功能：根据手机号获取短信验证码
 */
async function getSms(queryString, redisStore) {
  const code = Math.random().toString().slice(-6); //生成6位数随机验证码
  const sessionCode = {
    code: code,
    num: 0, //验证次数，最多可验证3次
    used: false, //false-未使用，true-已使用
  };

  redisStore.set("sms_" + queryString.phone, JSON.stringify(sessionCode));
  redisStore.expire("sms_" + queryString.phone, expireTime);

  let queryResult = await sendSms(queryString.phone, code);
  return queryResult;
}
/*
 * 功能：通过sdk调用短信api发送短信
 * 参数 手机号、短信验证码
 */
async function sendSms(phone, code) {
  // ?这种方式暂时有bug
  // const SmsClient = tencentcloud.sms.v20190711.Client;
  // const Credential = tencentcloud.common.Credential;
  // const ClientProfile = tencentcloud.common.ClientProfile;
  // const HttpProfile = tencentcloud.common.HttpProfile;
  // const secretId = process.env.TENCENTCLOUD_SECRETID;
  // const secretKey = process.env.TENCENTCLOUD_SECRETKEY;
  // const token = process.env.TENCENTCLOUD_SESSIONTOKEN;

  // let cred = new Credential(secretId, secretKey, token);
  // let httpProfile = new HttpProfile();
  // httpProfile.endpoint = "sms.tencentcloudapi.com";
  // let clientProfile = new ClientProfile();
  // clientProfile.httpProfile = httpProfile;
  // let client = new SmsClient(cred, "ap-guangzhou", clientProfile);

  // let req = {
  //   PhoneNumberSet: ["+86" + phone], //大陆手机号861856624****
  //   TemplateID: process.env.SMS_TEMPLATE_ID, //腾讯云短信模板id
  //   Sign: process.env.SMS_SIGN, //腾讯云短信签名
  //   TemplateParamSet: [code],
  //   SmsSdkAppid: process.env.SMS_SDKAPPID, //短信应用id
  // };
  const smsClient = tencentcloud.sms.v20210111.Client;

  const client = new smsClient({
    // 必填腾讯云账户信息
    credential: {
      secretId: process.env.SECRET_ID,
      secretKey: process.env.SECRET_KEY,
    },
    // 必填 地域
    region: "ap-guangzhou",
    // 非必填 客户端配置对象，可以指定超时时间等
    profile: {
      /* SDK默认用TC3-HMAC-SHA256进行签名，非必要请不要修改这个字段 */
      signMethod: "HmacSHA256",
      httpProfile: {
        /* SDK默认使用POST方法。
        /* 如果你一定要使用GET方法，可以在这里设置。GET方法无法处理一些较大的请求 */
        reqMethod: "POST",
        /* SDK有默认的超时时间，非必要请不要进行调整
        /* 如有需要请在代码中查阅以获取最新的默认值 */
        reqTimeout: 30,
        /**
         * 指定接入地域域名，默认就近地域接入域名为 sms.tencentcloudapi.com ，也支持指定地域域名访问，例如广州地域的域名为 sms.ap-guangzhou.tencentcloudapi.com
         */
        endpoint: "sms.tencentcloudapi.com",
      },
    },
  });

  /* 请求参数，根据调用的接口和实际情况，可以进一步设置请求参数
  /* 属性可能是基本类型，也可能引用了另一个数据结构
  /* 推荐使用IDE进行开发，可以方便的跳转查阅各个接口和数据结构的文档说明 */
  const params = {
    /* 短信应用ID: 短信SmsSdkAppId在 [短信控制台] 添加应用后生成的实际SmsSdkAppId，示例如1400006666 */
    SmsSdkAppId: process.env.SDKAPPID,
    /* 短信签名内容: 使用 UTF-8 编码，必须填写已审核通过的签名，签名信息可登录 [短信控制台] 查看 */
    SignName: "洋的荣耀个人网",
    /* 短信码号扩展号: 默认未开通，如需开通请联系 [sms helper] */
    ExtendCode: "",
    /* 国际/港澳台短信 senderid: 国内短信填空，默认未开通，如需开通请联系 [sms helper] */
    SenderId: "",
    /* 用户的 session 内容: 可以携带用户侧 ID 等上下文信息，server 会原样返回 */
    SessionContext: "",
    /* 下发手机号码，采用 e.164 标准，+[国家或地区码][手机号]
      / * 示例如：+8613711112222， 其中前面有一个+号 ，86为国家码，13711112222为手机号，最多不要超过200个手机号*/
    PhoneNumberSet: [`+86${phone}`],
    /* 模板 ID: 必须填写已审核通过的模板 ID。模板ID可登录 [短信控制台] 查看 */
    TemplateId: process.env.TemplateId,
    /* 模板参数: 若无模板参数，则设置为空*/
    TemplateParamSet: [code, "1"],
  };

  let queryResult = await smsPromise(client, params);
  return queryResult;
}

async function smsPromise(client, req) {
  return new Promise((resolve, reject) => {
    client.SendSms(req, function (errMsg, response) {
      if (errMsg) {
        reject(errMsg);
      } else {
        if (
          response.SendStatusSet &&
          response.SendStatusSet[0] &&
          response.SendStatusSet[0].Code === "Ok"
        ) {
          resolve({
            codeStr: response.SendStatusSet[0].Code,
            msg: response.SendStatusSet[0].Message,
          });
        } else {
          resolve({
            codeStr: response.SendStatusSet[0].Code,
            msg: response.SendStatusSet[0].Message,
          });
        }
      }
    });
  });
}

async function redisPromise(redisStore, queryString) {
  return new Promise((res, rej) => {
    redisStore.get("sms_" + queryString.phone, function (err, result) {
      if (err) {
        rej(err);
      }
      res(result);
    });
  });
}
