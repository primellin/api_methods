export function getCookie(name) {
    	var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
    	return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function stringToMask(string) {
	let code_arr = string.split('');
    let masked_code = "";
    for (let i = 0; i < code_arr.length; i++){
        if (i < 4 || i >= (code_arr.length - 4) ) {
            masked_code += code_arr[i];
        } else {
            masked_code += "*"
        }
    }
    return masked_code;
}

export function encodeBase64(email, code) {
    return btoa(email + ":" + code)
}