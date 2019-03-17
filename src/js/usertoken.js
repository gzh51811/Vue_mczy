
(()=>{
    /**
     * 细节：当localStore中无user时
    */
    let welcome = document.querySelector('.yonghuming');

    let user = localStorage.getItem('user');

    if(!user){
        user = {}
    }else{
        user = JSON.parse(user);
        // console.log(user[0].username)
    //     welcome.innerHTML = ` <a href="" class="welcome">${user[0].username}</a>
    //   <a href="" class="btnLogout">退出</a>,`
        // user.username
    }

// 不靠谱验证方式
//    if(user._id){
//         welcome.innerHTML = `
//         ${user.username}，欢迎你，<button class="btn btn-outline-danger btn-sm btnLogout">退出</button>

//        `
//    }

// token验证方式
console.log(user.token)
if(user.token){
    //判断本地是否有token

    $.post('/api/tokenverify',{
        data:user.token,
    },function(res){
        console.log(res)
        if(res== 200){
            welcome.innerHTML = `<a href="###" class="welcome">${user.name[0].username}</a>
      <a href="###" class="btnLogout">退出</a>`
       }
    }
    // })
    )
    
}
//     let xhr = new XMLHttpRequest();
//     xhr.onload = ()=>{
//         let res = JSON.parse(xhr.responseText);
//         console.log(res)
//        if(res== 200){
//             welcome.innerHTML = `${user.username},<button class="btn btn-outline-danger btn-sm btnLogout">退出</button>`
//        }
//     }
//     xhr.open('post','http://localhost1888/api/tokenverify',true);
//     xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
//     xhr.send('token='+user.token)
// }

    //    退出
    welcome.onclick = (e)=>{
        if(e.target.classList.contains('btnLogout')){
            localStorage.removeItem('user');
            location.reload();
            location.href="../index.html";
        }
    }
})()
})