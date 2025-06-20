// 最简单的页面保护脚本
(function() {
    'use strict';
    
    // 检查认证状态
    function checkAuth() {
        const isVerified = localStorage.getItem('donorlib-auth') === 'verified';
        
        if (!isVerified) {
            // 未认证，跳转到登录页面
            window.location.href = '/login';
            return false;
        }
        
        return true;
    }
    
    // 立即检查认证
    if (!checkAuth()) {
        return;
    }
    
    // 添加退出登录按钮
    function addLogoutButton() {
        const logoutBtn = document.createElement('button');
        logoutBtn.innerHTML = '🚪 退出';
        logoutBtn.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9999;
            padding: 8px 16px;
            background: #e74c3c;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 12px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        `;
        
        logoutBtn.onclick = function() {
            if (confirm('确定要退出登录吗？')) {
                localStorage.removeItem('donorlib-auth');
                window.location.href = '/login';
            }
        };
        
        document.body.appendChild(logoutBtn);
    }
    
    // 页面加载完成后添加退出按钮
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', addLogoutButton);
    } else {
        addLogoutButton();
    }
    
})();
