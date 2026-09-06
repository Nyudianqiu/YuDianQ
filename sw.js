//玉簟秋service Worker v2-增强PWA触发
Const缓存=‘玉甸秋-V2';
Const资产=['./', './index.html', './manifest.json', './icon-192.svg', './icon-512.svg'];

自己.addEventListener('安装', e=>{
  e.waituntil(缓存.打开(缓存).然后(c=>c.addAll(资产)).赶上(()=>{}));
  自己.skipwaiting();
});

自己.addEventListener('激活', e=>{
  e.waituntil(缓存.键().然后(键=>承诺.所有(键.过滤器(k=>k!==缓存).地图(k=>缓存.删除(k)))));
  自己.客户.声称();
});

自己.addEventListener('获取', e=>{
  如果 (e.请求.方法!=='GET') 返回;
  e.responseWith(
    取来(e.请求).然后(res=>{
      如果 (res && res.状态===200 && res.类型==='基本') {
        Const克隆=res.克隆();
        缓存.打开(缓存).然后(c=>c.放(e.请求, 克隆));
      }
      返回 res;
    }).赶上(()=>缓存.匹配(e.请求))
  );
});

自己.addEventListener('消息', e=>{
  如果 (e.数据 && e.数据.类型==='SKIP_waiting') 自己.skipwaiting();
});
