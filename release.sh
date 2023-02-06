# bin/bash

# 打包
node ./index.js

# 压缩
#cd ./dist
zip -r ./dist.zip ./article ./article.json

## 创建目录
ssh root@119.3.156.101 'cd /web/dev/ && mkdir -p whb'

# 上传
scp -r ./dist.zip root@119.3.156.101:/web/dev/whb

# 解压
ssh root@119.3.156.101 'cd /web/dev/whb && unzip -o dist.zip'


