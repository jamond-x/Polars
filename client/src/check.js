/**
 * @description 密码只能包含数字和字母，长度为6-16。
 * @param {string} id 
 */
export const checkPassword = function(password){
        if(password == ''){
            alert('请输入密码');
            return false;
        }
        else{
            let need = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/;
            if(need.test(password)){
                alert('密码格式正确');  // 需要取消弹窗
                return true;
            }
            else{
                alert('密码只能包含数字和字母，长度为6-16。');
                return false;
            }
        }
}

export const checkEmail = function(email){
    if(email == ''){
        alert('请输入邮箱');
        return false;
    }
    let need = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if(need.test(email)){
        alert('邮箱格式正确');
        return true;
    }
    else{
        alert('邮箱格式错误');
        return false
    }
}

export const checkCaptch = function(captch){
    if(captch.length === 6){  // 根据后端给的验证码而定
        return true
    }
    else{
        alert('输入正确格式验证码');
        return false
    }
}