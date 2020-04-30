<template>
    <div class="mine">
        <nav_header class="header"></nav_header>
        <nav_intro class="intro"></nav_intro>
        <section class="main-container">
            <div class="about">
                <div class="module-container">
                        前端的事，请交给我！<br>
                        <a href="https://github.com/luchas" target="_blank">
                            <img src="../assets/github.png" alt="">
                            Github
                        </a>
                </div>
            </div>
            <div id="tech_site" class="module">
                <div class="module-container flex">
                    <div class="left-container">
                        <h2>技能栈</h2>
                        <ul>
                            <li>精通html/css/js网页开发技术及规范</li>
                            <li>精通响应式开发，自适应开发等页面开发技术</li>
                            <li>精通Vue全家桶开发，组件应用</li>
                            <li>熟悉常用数据库操作(如mysql , Mongdb等)</li>
                            <li>熟悉前后分离开发，及前端部署</li>
                            <li>熟悉SpringBoot后台开发</li>
                            <li>熟悉NodeJs, Koa2后台开发</li>
                            <li>热衷前端开发，具备较强的学习动力和团队合作意识</li>
                            <li>....</li>
                        </ul>
                    </div>
                    <div class="right-container">

                    </div>
                </div>
            </div>
            <div id="pro_site" class="module">
                <div class="module-container flex">
                    <div class="pro">
                        <img src="../assets/shop.png" alt="">
                        <div class="desc">
                            <strong>零售业</strong><br>
                            主要涉及到母婴行业的相关软件开发，如ERP， 供应链等
                        </div>
                    </div>
                    <div class="pro">
                        <img src="../assets/guard.png" alt="">
                        <div class="desc">
                            <strong>安防业</strong><br>
                            主要涉及到视频监控相关软件开发
                        </div>
                    </div>
                    <div class="pro">
                        <img src="../assets/others.png" alt="">
                        <div class="desc">
                            <strong>其他..</strong>
                        </div>
                    </div>
                </div>
            </div>
            <div id="now_site" class="module">
                <div class="module-container flex">
                    <div class="left-container">
                        <h2>最近关注</h2>
                        <ul>
                            <li>前端安全</li>
                            <li>性能优化</li>
                            <li>全自动化构建</li>
                            <li>....</li>
                        </ul>
                    </div>
                    <div class="right-container">
                        <div class="pic">
                            <span>安全</span>
                            <span>性能</span>
                            <span>构建</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <footer>
            最终解释权归本人所有 @2020
        </footer>
    </div>
</template>

<script>
import nav_header from "../components/nav_header"
import nav_intro from "../components/nav_intro"
export default {
    name:"mine",
    components: {
        nav_header,
        nav_intro
    },
    mounted () {
        this.showTyping();
    },
    data() {
        return {
            str: '<small>if(living)<br>{<br>keepStuding();<br>}</small>',
            i:0
        }
    },
    methods: {
        showTyping() {
            var divTyping = document.getElementsByClassName('right-container')[0];
            if(this.i <= this.str.length){
                divTyping.innerHTML = this.str.slice(0, this.i++) + "_";
                setTimeout(this.showTyping, 300);//每2s调用一次showTyping()
            }
            else {
                this.i = 0
                divTyping.innerHTML = this.str;//结束打字，移除_光标
            }
        }
    },
}
</script>

<style lang="scss" scoped>
    .mine{
        height:100vh;
       .header{
            position: fixed;
            top:0;
            height:3.7rem;
            width:100%;
            background-color: #fff;
            z-index: 999;
        } 
        .main{
            height:1500px;
        }
        .main-container{
            margin-top: 3.7rem;
        }
        .module{

        }
        .about{
            height:25rem;
            background:url(../assets/main_bg.jpeg) no-repeat center center /cover;
            text-align: center;
            font-size: 2.0rem;
            letter-spacing: 3px;
            color:white;
            position: relative;
            box-shadow: 0 2px 2px rgba(0,0,0,.1);
            user-select:none;
            &::after{
                content:"";
                position: absolute;
                top:0;
                left:0;
                width:100%;
                height:100%;
                z-index: 1;
                background-color: rgba(0,148,245,.5);
            }
            .module-container{
                position: relative;
                top: 50%;
            }
            a{
                color: #444;
                background: white;
                font-size: 0.2rem;
                overflow: hidden;
                border-radius: 21px;
                padding: 5px 10px;
                letter-spacing: 0;
                text-decoration: none;
                img{
                    width: 16px;
                    top: 2px;
                    position: relative;
                }
            }
        }
        .module-container{
            max-width:1000px;
            margin:0 auto;
            z-index: 3;
            position: relative;
        }
        .flex{
            display:flex;
        }
        #tech_site{
            padding:10rem 0;
            .module-container{

                .left-container{
                    flex: 1;
                    min-height: 15rem;
                    display: flex;
                    align-items: center;
                    flex-direction: column;
                    justify-content: center;
                    h2{
                        margin-top: 5rem;
                        width:80%;
                        font-size: 1.2rem;
                        line-height: 40px;
                        border-bottom: 1px solid #eee;
                    }
                    ul{
                        list-style: none;
                        li{
                            font-size: .8rem;
                            line-height: 2.0rem;
                            border-bottom:1px dashed #eee;
                        }

                    }
                }
                .right-container{
                    flex: 2;
                    font-size: 1.3rem;
                    margin: 2.5rem 3rem 0;
                    color:green;
                    background: #1e1e1e;
                    padding:2rem 0 0 2rem;
                    letter-spacing: 2px;
                    min-height: 15rem;
                    span{
                        margin-left: 10px;
                    }
                }
            }
        }

        #pro_site{
            background:url(../assets/bg.png) no-repeat #091c2d;
            background-size: cover; 
	        background-attachment: fixed;
            .module-container{
                padding:10rem 0;
                .pro{
                    margin-top: 2.5rem;
                    flex:1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    img{
                        margin:1rem 0;
                        width:10rem;
                    }
                    .desc{
                        color:white;
                        strong{
                            line-height: 2rem;
                        }
                    }
                }
            }
        }

        #now_site{
            padding:10rem 0;
            .module-container{

                .left-container{
                       flex: 1;
                        min-height: 15rem;
                        display: flex;
                        flex-direction: column;
                    h2{
                        margin-top: 5rem;
                        width:80%;
                        font-size: 1.2rem;
                        line-height: 40px;
                        border-bottom: 1px solid #eee;
                    }
                    ul{
                        list-style: none;
                        li{
                            font-size: .8rem;
                            line-height: 2.0rem;
                            border-bottom:1px dashed #eee;
                        }

                    }
                }
                .right-container{
                    flex: 1;
                    font-size: 1.3rem;
                    margin-top: 2.5rem;
                    margin-left: 2.3rem;
                    .pic{
                        height: 186px;
                        width:200px;
                        overflow: hidden;
                        position: relative;
                        background-color: #fff;
                        color:white;
                        animation:moveAround 5s linear 2s infinite;
                        -webkit-animation:moveAround 5s linear 2s infinite; /*Safari and Chrome*/
                        span{
                            width:100px;
                            height:100px;
                            line-height:100px;
                            text-align: center;
                            border-radius: 50%;
                            display: inline-block;
                            &:first-child{
                                position: absolute;
                                bottom:0;
                                left:0;
                                background-color: #00BCD4;
                            }
                            &:nth-child(2){
                                background-color: #CDDC39;
                                position:absolute;
                                top:0;
                                left:50%;
                                transform: translateX(-50%);
                            }
                            &:last-child{
                                background-color: #FFC107;
                                position: absolute;
                                right:0;
                                bottom:0;
                            }
                        }
                    }
                }
            }
        }
    
        footer{
            border-top: 1px solid #eee;
            text-align: center;
            line-height: 5rem;
            color:#333;
            text-shadow: rgba(255,255,255,1);
            font-size: .8rem;
        }
    
    }

    @media (max-width: 768px) {
        .module-container{
            flex-direction: column;
        }
        #now_site{
            .left-container{
                margin-left: 2.3rem;
            }
            .right-container{
                display: flex;
                justify-content: center;
                margin-left: 0;
            }
        }


    }

    @keyframes moveAround {
       from{
           transform: rotate(0);
       } 
       to{
           transform: rotate(360deg);
       } 
       
    }
    
</style>