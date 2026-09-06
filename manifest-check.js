(功能() {
  ConstisStandalone=窗户.matchMedia('(显示模式：独立)').匹配 
||窗户.领航员.独立的 
||窗户.matchMedia('(显示模式：全屏)').匹配
||窗户.matchMedia('(显示模式：minimal-ui)').匹配;
  
  Const已安装=isStandalone||localStorage.getitem('__pwa_installed')==='1';
  
  如果 (!已安装) {
    setTimeout(()=>{
      ConstlastDemiss=localStorage.getitem('__pwa_banner_discelled');
      Const现在=日期.现在();
      如果 (lastDemiss && 现在 - parseInt(lastDemiss)<86400000) 返回;
      
      Constb=文件.createElement('div');
      b.身份标识='__pwaguide';
      b.innerHTML=`
<div style="位置：固定；左：12px；右：12px；底：80px；z索引：99999；背景：#FFF；边界半径：16px；填充：16px；框阴影：08px32px RGBA(0，0，0，.2)；字体系列：继承；字体大小：14px；颜色：#333；边框：2px solid#a855f7">
<div style="font-weight:bold；color：#a855f7；font-size:16px；margin-bottom:8px">📲 把玉珩秋装到桌面</div>
<div style="line-height:1.6；color：#555">
<b>vivo用户必看</b>：铬装好后，图标可能不直接出现在桌面，可能在：
<ol style="margin:8px0；padding-left:24px">
<li>桌面<b>第二屏</b>(左右滑找找)</li>
<li><b>桌面搜索框</b>里输入"玉"</li>
<li><b>应用抽屉</b>(从桌面底部上滑)</li>
</ol>
</div>
<div style="display:flex；gap:8px；margin-top:12px">
<button id="__pwaopen"style="flex:1；背景：#a855f7；颜色：#FFF；边框：无；边框半径：10px；填充：10px；font-weight:bold">打开铬应用列表</button>
<buttonid="__pwaclose2"style="background：#eee；color：#666；border:none；border-radius:10px；padding:10px14px">关闭</button>
</div>
</div>
`;
      文件.身体.appendChild(b);
      文件.getElementById('__pwaopen').onClick=()=>{
        窗户.位置.href='chrome://apps/';
      };
      文件.getElementById('__pwaclose2').onClick=()=>{
        b.移除();
        localStorage.setitem('__pwa_banner_discelled', 线(日期.现在()));
      };
    }, 2000);
  }
})();
