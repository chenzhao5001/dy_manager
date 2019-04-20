<template>
    <section class="page page-login">
        <!--<背景图片>-->
        <div class="backgroundImage">
            <image class="imgbg" src="http://img2.imgtn.bdimg.com/it/u=3427996400,581773998&fm=26&gp=0.jpg"></image>
        </div>
        <div class="item-content">
            <div class="item-input">
                <input type="text" value="体彩数据小屏" disabled>
            </div>
        </div>
        <div class="list-block">
            <ul>
                <li>
                    <div class="item-content">
                        <div class="item-title label">手机号</div>
                        <div class="item-input">
                            <input
                                    type="tel"
                                    placeholder="请输入手机号"
                                    maxlength="11"
                                    @keyup="keyupChange('phoneErrer')"
                                    v-model="userInfo.phone"
                                    @blur="checkphone(userInfo.phone)"
                            >
                        </div>
                        <div class="item-after" v-show="errers.phoneErrer">
                            <FormErrer/>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="item-content">
                        <div class="item-title label">验证码</div>
                        <div class="item-input">
                            <input
                                    placeholder="请输入验证码"
                                    maxlength="4"
                                    @keyup="keyupChange('codeErrer')"
                                    v-model="userInfo.code"
                                    @blur="checkCode(userInfo.code)"
                            >
                        </div>
                        <div class="item-after" v-show="errers.codeErrer">
                            <FormErrer/>&nbsp;&nbsp;
                        </div>
                        <div class="item-after item-after-code">
                            <button
                                    class="link-code"
                                    @click="sendCode"
                            >
                                获取验证码
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="list-block-label" style="display: block">验证码已发送，请在120s内输入完毕</div>
        </div>
        <footer>
            <button
                    class="btn btn-submit"
                    :disabled="!onOff"
                    @click="clickSubmit"
            >确定
            </button>
        </footer>
    </section>
</template>
<script>
    // import {getMobileCode, doLogin} from './../server'
    // import {isLogin} from './../lib/utils'

    export default {
        name: 'login',
        data() {
            return {
                userInfo: {
                    phone: '',
                    code: ''
                },
                errers: {
                    phoneErrer: false,
                    codeErrer: false,
                },
                onOff: false,
            }
        },
        watch: {
            userInfo: {
                handler(newName, oldName) {
                    this.checkSubmit();
                },
                deep: true
            }
        },
        async beforeCreate() {
            this.$store.commit('alertModal', {modalBtnCancel: false, fn: null});
            if (isLogin()) {
                this.$router.push({path: '/contractdetail'});
            } else {
                let {code} = this.$route.query;
                let {token, status, openId} = await getOpenId({grantCode: code});
                if (status !== 'success') return;
                localStorage.setItem("openId", openId);
                setCookie("openId", openId, 365);
                if (!token) return;
                localStorage.setItem("token", token);
                setCookie("token", token, 365);
                this.$router.push({path: '/contractdetail'});
            }
        },
        methods: {
            checkphone(phone) {
                let reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
                if (!reg.test(phone)) {
                    this.errers.phoneErrer = true;
                    this.checkSubmit();
                    return false;
                } else {
                    this.errers.phoneErrer = false;
                    return true;
                }
            },
            keyupChange(obj) {
                this.errers[obj] = false;
            },
            checkCode(code) {
                let reg = /^\d{4}$/;
                if (reg.test(code) === false) {
                    this.errers.codeErrer = true;
                    this.checkSubmit();
                    return false;
                } else {
                    this.errers.codeErrer = false;
                    return true;
                }
            },
            checkSubmit() {
                let userInfoResult = Object.values(this.userInfo).every(item => {
                    return item !== '';
                });
                let errerResult = Object.values(this.errers).every(item => {
                    return item !== true;
                });
                // console.log('errerResult:',errerResult,'userInfoResult',userInfoResult);
                this.onOff = errerResult && userInfoResult;
                // this.onOff = userInfoResult;
            },
            async sendCode({target}) {
                let {phone} = this.userInfo;
                // console.log(phone);
                let hasPhone = this.checkphone(phone);
                if (!hasPhone) return;
                let data = await getMobileCode({phone})
                if (data.status !== 'success') return;
                var num = 60;
                var timer = setInterval(function () {
                    num--;
                    target.innerHTML = num + '秒后重新获取';
                    target.style.color = '#808080';
                    target.disabled = ' disabled';
                    if (num === 0) {
                        target.style.color = '#1AAD1A';
                        target.disabled = '';
                        target.innerHTML = '获取验证码';
                        clearInterval(timer)
                    }
                }, 1000)
            },
        }
    }
</script>
<style scoped lang="less">
    .backgroundImage {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .imgbg {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
    }
    .page-login {
        min-height: 500px;
    }

    .list-block .item-title.label {
        color: #000;
        width: 30%;
        font-size: .3rem;
    }

    .item-after-code {
        border-left: 1px solid #E5E5E5;
        padding-left: .3rem;
        padding-right: .2rem;
        position: relative;
    }
    .item-after-code .link-code {
        color: #1AAD1A;
        font-size: .3rem;
    }

    .list-block {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    footer {
        padding: .2rem .4rem;
    }

    .btn-submit:disabled {
        background: #BAE6BA;
    }
</style>
