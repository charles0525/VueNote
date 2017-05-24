var Global={
	vueUrl:'https://unpkg.com/vue',
	initFile:function(){
		var head=document.getElementsByTagName('head');
		var domScript=document.createElement('script');
		domScript.src=this.vueUrl;
		head[0].appendChild(domScript);
	}
}
window.onload=Global.initFile();