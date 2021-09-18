# Introduction
## How to Run this project
hugo server --config config/config.toml



## How to Build Your Project 
create build Of your project
`hugo --gc --minify --config config/config.toml,config/config_prod.toml` 

Run The Below Command for converting images into webp
1. jpg to webp
- $ find ./ -type f -name '*.jpg' | xargs -P 8 -I {} sh -c 'cwebp -q 75 $1 -o "${1%.jpg}.webp"' _ {} \;

2. png to webp
- $ find ./ -type f -name '*.png' | xargs -P 8 -I {} sh -c 'cwebp -q 75 $1 -o "${1%.png}.webp"' _ {} \;


### devlop Build Command
hugo --config config/config.toml,config/config_devlop.toml

#### language wise command
1. for English Languge
hugo --config config/config.toml,config/en/config_devlop.toml
2. for Japanese Language
hugo --config config/config.toml,config/jp/config_devlop.toml
   


### prod Build Command
hugo --config config/config.toml,config/config_prod.toml

#### language wise command
1. for English Languge
hugo --config config/config.toml,config/en/config_prod.toml
2. for Japanese Language
hugo --config config/config.toml,config/jp/config_prod.toml

