export default {
    port: parseInt(process.env.port as string) || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
    dbUsername: process.env.DB_USER_NAME || 'avnadmin',
    dbPassword: process.env.DB_PASSWORD || 'AVNS_lZHUqqz-nHwuck2O4X0',
    dbHost: process.env.DB_HOST || 'pg-274eaa2e-shaelm29-c1b9.aivencloud.com',
    // saltRounds: parseInt(process?.env?.SALT_ROUNDS) || 10,
    jwtAccessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET || "",
    jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET || "",
    ssl: {
        rejectUnauthorized: true,
        ca: `-----BEGIN CERTIFICATE-----
MIIEQTCCAqmgAwIBAgIUc6JG5HWvQSnJKCXQqsN4Z1jcuzQwDQYJKoZIhvcNAQEM
BQAwOjE4MDYGA1UEAwwvYmE2MzY5MWYtNjUwOS00ZTc5LTg0MDUtZDYyMzQxMmNk
MGE2IFByb2plY3QgQ0EwHhcNMjMwOTI4MTE1NzQ0WhcNMzMwOTI1MTE1NzQ0WjA6
MTgwNgYDVQQDDC9iYTYzNjkxZi02NTA5LTRlNzktODQwNS1kNjIzNDEyY2QwYTYg
UHJvamVjdCBDQTCCAaIwDQYJKoZIhvcNAQEBBQADggGPADCCAYoCggGBAM/mAxfp
d20LE1q05VTVEhWBisCX3wY3fZPRyyaKdDnolwuGinpJvP3NZLyphkpw8z208SUI
GPPWaRxBpfHOasEInOjarDf7fr60/2tFbgAS0zyZIpg5MUuXf0kT44UU16mYZsA+
DAanFI94kXfNEHTxuiFCATnfWe151RGMnmKGKyDTkkAriavZ+k5bTfLuY6dNinXw
OlFI58OMiyPRyvGl+cyBcKAX9rp021Uu2aOkJLKfolueyV8/gJIFnzm3MrH6bPjB
yjQdYXeLks2J0znR1mJCPRPZ6ej90pU5us0siEJAMWpHqjnEcNSw4hd5Di7LkbXh
kcvzqNtHF+jDbTalU7u4139WCRFIMO4TRHkeWSCMoDfWoboxY6yjPpnZ0uFKTSwp
CBd0CcTMrxUugd5Sgdf2VPwDCk4Yqk6dFxNSVZ8dzjaXPA1XIS7lBo2u1ce83Dve
wNdRUOO59eWqkjFXOSpawupq4oN80oiUVackOtUEKh/DxuxywE8C6RbPQQIDAQAB
oz8wPTAdBgNVHQ4EFgQUf1kHX7nadVXmXbB7hTib41UkbS8wDwYDVR0TBAgwBgEB
/wIBADALBgNVHQ8EBAMCAQYwDQYJKoZIhvcNAQEMBQADggGBALOu0ZhVT3EBhPDC
0TRz15l9NNif/EayHuEJLfl7RMTaZg+U4MEzC9Z6LfTAv2trmDdz6V2IzR7TXE8X
/X/O8bLZ1GIKclC4lF4EfHjzVEWAMs8dszi0AznkE6dH38DbbwntkgkN58lzQdUC
7amibHtQfndENTR3aw1U8e20rr2Dv3IZ5/87e9yDqOcCzScLg0to5p2rrdmq/Sml
ZMoON8us3fdwmFhRXe1889H06OEh4/iLLpjtJmRsq7ynXkxHhQvv9YIQFV1yKU0x
Tmc4B1xS8shu8BdV2KojlaSvYozFYETXzTqvBo0tnS1/TLAobQAR3NTGPxiId38E
Nk9SJksxqnYbPVzvTt0SkopEtqMwFw2SDjo5l/OG3rI9krThVrYDy224c0uR5kUs
FlckhINfhb0m1E2rAl7Qljt5eZMgcmA3kSERl4nI3PzVMXLP/AHz/7QxGyJVKFbr
Hlt1PJVjiE1vpo29pTiTgbAGaGHJn8vclEHybocjHRp9Vxx4ug==
-----END CERTIFICATE-----`,
    },

  vultrApiKeys: {
    apiKey: '3RCPVH4XHDXWXMJXEAQIA6AQLKX2KJHZFG3Q'
  },
  firebaseStorage: {
    name: "redeemify-400715",
    url: "gs://redeemify-400715.appspot.com",
    json: {
      "type": "service_account",
      "project_id": "redeemify-400715",
      "private_key_id": "2014a088dbaaa7de3a9cd5efa39b4853f35fd930",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvwIBADANBgkqhkiG9w0BAQEFAASCBKkwggSlAgEAAoIBAQCynw5JfsKt89m3\nxBPlEdzvBJ694dOXcfRbXLCIQoxa9p7oJ0rWt3a8bBJq3aO/qFZ8rYNQeNmCV+9Y\nb1lRzCkJdfhV1zTNhZhLR3mXCUGh49SAcTL7j6YVDK6Eq1181vHXe5A5WYr+mY4Z\n/1Y/siPf5Xn3piT5YPPUmJD9nbkBYtu+x4YamYP3Ud+yxIhe+tv4PPU8fjq3kQ9E\niTGxLo7Es5YAKZU6+FMy45Pa4chON75jvNkq5wDpion9A4v6xzoIxl6i+O2BUe3z\n2ADMSl5POhSDBXxh2RQdzHJ8RiLsfA1ZrignaOo4ZkcPvEc7d/+vWx+9RfrjioW2\nDTm8ND1LAgMBAAECggEABzxmfBEcoNn7WWe7jv2OXJTS1Qot1xMNagATJ+OOQ219\nmkj+AQnCNercEIrPBEe1AGyYOiCf9+XipjH7xWw59o5Ak6jZ4XOGhZItLLJ5/3o2\n+xPa4JIwRIA7HgvB7nmkpwaN6dmk34bn8nyqCUvvPekFa/dfXkZ249Qt/eAvhPNJ\nzqd4iIfPRd4M77K3eE8Aq5bu1Lx92V4ltiCNs93U4KM5qDDb/gNKid6jhhD4u+L6\nBNwkslr1GepqP9bwXQF8FKsTLN9TdJXMgZWCIULyjJtTcm4sTKuTwKkyBX4G1Pzy\nv+80FxfljaIcwO+GEtiCrAO8+bKcLZtB/KAnQAi6IQKBgQDmVaQ8uObyCsDeD4X8\nXZyHeQoQQ1NlplJzzdopzvT8pgioLFImhEAlfjR6ce1VshuhMQOgRd3I/f0trw3o\nf6iOjUNvHrHSZ/S5DmqyaU19v6NCaDXRIw0QZJ+S0lvpa/eWZAgD0KdJ26ugYJIA\nPgRQEyAwTiXYbEkoQxF+uhd/oQKBgQDGhkecgBFCbuIZkNda/WX9AEr9Oi9RRuVj\nBMKo/8QwE8zfDbbrYBK3lCb3ZnU5UVwZ+Vgnp2e/n06XSGCrrDv8B/0GfYchM6T6\nGPv52nYN1kpq6hXiEZNcxMLRJyNYQCy0RzhFuzkrlBSlcgOoc0GmKvVOsvFmR8Cv\nlgLFm0vFawKBgQCTfhezQnuwVi52g946Yf9PyLQnAdWva7e0rAadawb5maBFgEwC\nmgExgQU9uyJNE8YZi/dUdCi3Ad1TmZsAXG6lCdQ6nZ8kqqjMr2ynXkLe2Q5EAdMk\nXpuI+cYtEEMGz7o1NUzklIHrC511DyGuwgek9vpPtFsLoRufioLzcVqGwQKBgQCa\nOb0uPmuqIXwzAkvbWxo9N1oKaYZS7PHNP+h949ykwO0ap4vgRU2lIko3Tnho4+Ta\nJNQwUiQOQJOMgWTgWThsbkRKI4Cz8WwMAxbVnrqxuzUq49nGO4MwwYbbdz1FFO3l\ny6JSwcUDLtHvSai/13I7xgm2btuMatetUKusmh1+KwKBgQCA7r/OhcYXFTq7jtMD\nl3MLoCvq3YuwkfAjfYEj9Ji9MLHvdjq8bifyIDXs6MnOWX+9hwKc6UYUNVtZIoBQ\n6nacIuyfdKNGiSe7SU/K1e1FHwYAiD7rtdjb4T1/KSouMBtNF1III1+tqQeGIc2M\nrDo4E1y85w2zQkvKs0uDY1QMEw==\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-bobl9@redeemify-400715.iam.gserviceaccount.com",
      "client_id": "105476337366536800318",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-bobl9%40redeemify-400715.iam.gserviceaccount.com",
      "universe_domain": "googleapis.com"
    }
  },
  awsStorage: {
    securityCredentials: {
      accessKeyId: 'AKIAV5CMLKKCFPGQ3ZBB',
      secretAccessKey: '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'
    },
    bucketName: "test-shashi-bucket"
  },
  api: {
    vultr: {
      'getAllObjectStorage': "https://api.vultr.com/v2/object-storage"
    },
    firebase: {

    }

  },
  resizeImageParameters: {
    width: 800, 
    height: 600
  }


}