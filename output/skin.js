// Garden Gnome Software - Skin
// Pano2VR 4.5.3/10717
// Filename: Rundgang.ggsk
// Generated Mi 9. Feb 18:14:44 2022

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._hotspots_3=document.createElement('div');
		this._hotspots_3.ggId="Hotspots_3";
		this._hotspots_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hotspots_3.ggVisible=true;
		this._hotspots_3.className='ggskin ggskin_container';
		this._hotspots_3.ggType='container';
		hs ='position:absolute;';
		hs+='left: 795px;';
		hs+='top:  751px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._hotspots_3.setAttribute('style',hs);
		this.divSkin.appendChild(this._hotspots_3);
		this._hotspots_2=document.createElement('div');
		this._hotspots_2.ggId="Hotspots_2";
		this._hotspots_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hotspots_2.ggVisible=true;
		this._hotspots_2.className='ggskin ggskin_container';
		this._hotspots_2.ggType='container';
		hs ='position:absolute;';
		hs+='left: 795px;';
		hs+='top:  751px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._hotspots_2.setAttribute('style',hs);
		this.divSkin.appendChild(this._hotspots_2);
		this._hotspots_1=document.createElement('div');
		this._hotspots_1.ggId="Hotspots_1";
		this._hotspots_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hotspots_1.ggVisible=true;
		this._hotspots_1.className='ggskin ggskin_container';
		this._hotspots_1.ggType='container';
		hs ='position:absolute;';
		hs+='left: 811px;';
		hs+='top:  771px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._hotspots_1.setAttribute('style',hs);
		this.divSkin.appendChild(this._hotspots_1);
		this._hotspots_e=document.createElement('div');
		this._hotspots_e.ggId="Hotspots_E";
		this._hotspots_e.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hotspots_e.ggVisible=true;
		this._hotspots_e.className='ggskin ggskin_container';
		this._hotspots_e.ggType='container';
		this._hotspots_e.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-960 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-540 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -960px;';
		hs+='top:  -540px;';
		hs+='width: 124px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._hotspots_e.setAttribute('style',hs);
		this.divSkin.appendChild(this._hotspots_e);
		this._hotspots_u=document.createElement('div');
		this._hotspots_u.ggId="Hotspots_U";
		this._hotspots_u.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hotspots_u.ggVisible=true;
		this._hotspots_u.className='ggskin ggskin_container';
		this._hotspots_u.ggType='container';
		hs ='position:absolute;';
		hs+='left: 795px;';
		hs+='top:  751px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._hotspots_u.setAttribute('style',hs);
		this.divSkin.appendChild(this._hotspots_u);
		this._hotspots_d=document.createElement('div');
		this._hotspots_d.ggId="Hotspots_D";
		this._hotspots_d.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._hotspots_d.ggVisible=true;
		this._hotspots_d.className='ggskin ggskin_container';
		this._hotspots_d.ggType='container';
		hs ='position:absolute;';
		hs+='left: 795px;';
		hs+='top:  751px;';
		hs+='width: 100px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._hotspots_d.setAttribute('style',hs);
		this.divSkin.appendChild(this._hotspots_d);
		this._mapholder=document.createElement('div');
		this._mapholder.ggId="Mapholder";
		this._mapholder.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		this._mapholder.ggVisible=true;
		this._mapholder.className='ggskin ggskin_rectangle';
		this._mapholder.ggType='rectangle';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -1px;';
		hs+='width: 1337px;';
		hs+='height: 420px;';
		hs+=cssPrefix + 'transform-origin: 0% 0%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._mapholder.ggParameter) + ';';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='background: #000000;';
		hs+='background: rgba(0,0,0,0.392157);';
		hs+='border: 0px solid #000000;';
		this._mapholder.setAttribute('style',hs);
		this._text_1=document.createElement('div');
		this._text_1__text=document.createElement('div');
		this._text_1.className='ggskin ggskin_textdiv';
		this._text_1.ggTextDiv=this._text_1__text;
		this._text_1.ggId="Text 1";
		this._text_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_1.ggVisible=false;
		this._text_1.className='ggskin ggskin_text';
		this._text_1.ggType='text';
		hs ='position:absolute;';
		hs+='left: 442px;';
		hs+='top:  74px;';
		hs+='width: 234px;';
		hs+='height: 87px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._text_1.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 234px;';
		hs+='height: 87px;';
		hs+='background: #000000;';
		hs+='border: 1px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_1__text.setAttribute('style',hs);
		this._text_1.ggTextDiv.innerHTML="<p style=\"font-size:30px\">2. Stock<\/p>";
		this._text_1.appendChild(this._text_1__text);
		this._mapholder.appendChild(this._text_1);
		this._stockwerk_buttons=document.createElement('div');
		this._stockwerk_buttons.ggId="Stockwerk Buttons";
		this._stockwerk_buttons.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stockwerk_buttons.ggVisible=false;
		this._stockwerk_buttons.className='ggskin ggskin_container';
		this._stockwerk_buttons.ggType='container';
		hs ='position:absolute;';
		hs+='left: 1146px;';
		hs+='top:  179px;';
		hs+='width: 182px;';
		hs+='height: 204px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._stockwerk_buttons.setAttribute('style',hs);
		this._button_3st=document.createElement('div');
		this._button_3st__text=document.createElement('div');
		this._button_3st.className='ggskin ggskin_textdiv';
		this._button_3st.ggTextDiv=this._button_3st__text;
		this._button_3st.ggId="Button_3St";
		this._button_3st.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_3st.ggVisible=true;
		this._button_3st.className='ggskin ggskin_text';
		this._button_3st.ggType='text';
		hs ='position:absolute;';
		hs+='left: -132px;';
		hs+='top:  -110px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._button_3st.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+='background: #000000;';
		hs+='border: 1px solid #ffffff;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._button_3st__text.setAttribute('style',hs);
		this._button_3st.ggTextDiv.innerHTML="<p style=\"font-size:18px\">3. Stock<\/p>";
		this._button_3st.appendChild(this._button_3st__text);
		this._button_3st.onclick=function () {
			me.player.openNext("","");
		}
		this._button_3st.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._button_3st.style[domTransition]='none';
			} else {
				me._button_3st.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_3st.ggParameter.sx=1.2;me._button_3st.ggParameter.sy=1.2;
			me._button_3st.style[domTransform]=parameterToTransform(me._button_3st.ggParameter);
		}
		this._button_3st.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._button_3st.style[domTransition]='none';
			} else {
				me._button_3st.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_3st.ggParameter.sx=1;me._button_3st.ggParameter.sy=1;
			me._button_3st.style[domTransform]=parameterToTransform(me._button_3st.ggParameter);
		}
		this._stockwerk_buttons.appendChild(this._button_3st);
		this._button_2st=document.createElement('div');
		this._button_2st__text=document.createElement('div');
		this._button_2st.className='ggskin ggskin_textdiv';
		this._button_2st.ggTextDiv=this._button_2st__text;
		this._button_2st.ggId="Button_2St";
		this._button_2st.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_2st.ggVisible=true;
		this._button_2st.className='ggskin ggskin_text';
		this._button_2st.ggType='text';
		hs ='position:absolute;';
		hs+='left: -132px;';
		hs+='top:  -40px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._button_2st.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+='background: #000000;';
		hs+='border: 1px solid #ffffff;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._button_2st__text.setAttribute('style',hs);
		this._button_2st.ggTextDiv.innerHTML="<p style=\"font-size:18px\">2. Stock<\/p>";
		this._button_2st.appendChild(this._button_2st__text);
		this._button_2st.onclick=function () {
			me.player.openNext("Gang A2_06_out.xml","");
			me._map_1.style[domTransition]='none';
			me._map_1.style.opacity='0';
			me._map_1.style.visibility='hidden';
			me._map_2.style[domTransition]='none';
			me._map_2.style.opacity='1';
			me._map_2.style.visibility=me._map_2.ggVisible?'inherit':'hidden';
			me._text_1.ggText="<p style=\"font-size:30px\">2. Stock<\/p>";
			me._text_1.ggTextDiv.innerHTML=me._text_1.ggText;
			if (me._text_1.ggUpdateText) {
				me._text_1.ggUpdateText=function() {
					var hs="<p style=\"font-size:30px\">2. Stock<\/p>";
					if (hs!=me._text_1.ggText) {
						me._text_1.ggText=hs;
						me._text_1.ggTextDiv.innerHTML=hs;
					}
				}
			}
		}
		this._button_2st.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._button_2st.style[domTransition]='none';
			} else {
				me._button_2st.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_2st.ggParameter.sx=1.2;me._button_2st.ggParameter.sy=1.2;
			me._button_2st.style[domTransform]=parameterToTransform(me._button_2st.ggParameter);
		}
		this._button_2st.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._button_2st.style[domTransition]='none';
			} else {
				me._button_2st.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_2st.ggParameter.sx=1;me._button_2st.ggParameter.sy=1;
			me._button_2st.style[domTransform]=parameterToTransform(me._button_2st.ggParameter);
		}
		this._stockwerk_buttons.appendChild(this._button_2st);
		this._button_1st=document.createElement('div');
		this._button_1st__text=document.createElement('div');
		this._button_1st.className='ggskin ggskin_textdiv';
		this._button_1st.ggTextDiv=this._button_1st__text;
		this._button_1st.ggId="Button_1St";
		this._button_1st.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_1st.ggVisible=true;
		this._button_1st.className='ggskin ggskin_text';
		this._button_1st.ggType='text';
		hs ='position:absolute;';
		hs+='left: -132px;';
		hs+='top:  30px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._button_1st.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+='background: #000000;';
		hs+='border: 1px solid #ffffff;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._button_1st__text.setAttribute('style',hs);
		this._button_1st.ggTextDiv.innerHTML="<p style=\"font-size:18px\">1. Stock<\/p>";
		this._button_1st.appendChild(this._button_1st__text);
		this._button_1st.onclick=function () {
			me.player.openNext("Gang B1_24_out.xml","");
			me._map_1.style[domTransition]='none';
			me._map_1.style.opacity='1';
			me._map_1.style.visibility=me._map_1.ggVisible?'inherit':'hidden';
			me._map_2.style[domTransition]='none';
			me._map_2.style.opacity='0';
			me._map_2.style.visibility='hidden';
			me._text_1.ggText="<p style=\"font-size:30px\">1. Stock<\/p>";
			me._text_1.ggTextDiv.innerHTML=me._text_1.ggText;
			if (me._text_1.ggUpdateText) {
				me._text_1.ggUpdateText=function() {
					var hs="<p style=\"font-size:30px\">1. Stock<\/p>";
					if (hs!=me._text_1.ggText) {
						me._text_1.ggText=hs;
						me._text_1.ggTextDiv.innerHTML=hs;
					}
				}
			}
		}
		this._button_1st.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._button_1st.style[domTransition]='none';
			} else {
				me._button_1st.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_1st.ggParameter.sx=1.2;me._button_1st.ggParameter.sy=1.2;
			me._button_1st.style[domTransform]=parameterToTransform(me._button_1st.ggParameter);
		}
		this._button_1st.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._button_1st.style[domTransition]='none';
			} else {
				me._button_1st.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_1st.ggParameter.sx=1;me._button_1st.ggParameter.sy=1;
			me._button_1st.style[domTransform]=parameterToTransform(me._button_1st.ggParameter);
		}
		this._stockwerk_buttons.appendChild(this._button_1st);
		this._button_erd=document.createElement('div');
		this._button_erd__text=document.createElement('div');
		this._button_erd.className='ggskin ggskin_textdiv';
		this._button_erd.ggTextDiv=this._button_erd__text;
		this._button_erd.ggId="Button_Erd";
		this._button_erd.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_erd.ggVisible=true;
		this._button_erd.className='ggskin ggskin_text';
		this._button_erd.ggType='text';
		hs ='position:absolute;';
		hs+='left: -132px;';
		hs+='top:  100px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._button_erd.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+='background: #000000;';
		hs+='border: 1px solid #ffffff;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._button_erd__text.setAttribute('style',hs);
		this._button_erd.ggTextDiv.innerHTML="<p style=\"font-size:18px\">Erdgeschoss<\/p>";
		this._button_erd.appendChild(this._button_erd__text);
		this._button_erd.onclick=function () {
			me.player.openNext("","");
		}
		this._button_erd.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._button_erd.style[domTransition]='none';
			} else {
				me._button_erd.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_erd.ggParameter.sx=1.2;me._button_erd.ggParameter.sy=1.2;
			me._button_erd.style[domTransform]=parameterToTransform(me._button_erd.ggParameter);
		}
		this._button_erd.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._button_erd.style[domTransition]='none';
			} else {
				me._button_erd.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_erd.ggParameter.sx=1;me._button_erd.ggParameter.sy=1;
			me._button_erd.style[domTransform]=parameterToTransform(me._button_erd.ggParameter);
		}
		this._stockwerk_buttons.appendChild(this._button_erd);
		this._button_unter=document.createElement('div');
		this._button_unter__text=document.createElement('div');
		this._button_unter.className='ggskin ggskin_textdiv';
		this._button_unter.ggTextDiv=this._button_unter__text;
		this._button_unter.ggId="Button_Unter";
		this._button_unter.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_unter.ggVisible=true;
		this._button_unter.className='ggskin ggskin_text';
		this._button_unter.ggType='text';
		hs ='position:absolute;';
		hs+='left: -132px;';
		hs+='top:  170px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._button_unter.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 297px;';
		hs+='height: 69px;';
		hs+='background: #000000;';
		hs+='border: 1px solid #ffffff;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._button_unter__text.setAttribute('style',hs);
		this._button_unter.ggTextDiv.innerHTML="<p style=\"font-size:18px\">Untergeschoss<br\/><\/p>";
		this._button_unter.appendChild(this._button_unter__text);
		this._button_unter.onclick=function () {
			me.player.openNext("","");
		}
		this._button_unter.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._button_unter.style[domTransition]='none';
			} else {
				me._button_unter.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_unter.ggParameter.sx=1.2;me._button_unter.ggParameter.sy=1.2;
			me._button_unter.style[domTransform]=parameterToTransform(me._button_unter.ggParameter);
		}
		this._button_unter.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._button_unter.style[domTransition]='none';
			} else {
				me._button_unter.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_unter.ggParameter.sx=1;me._button_unter.ggParameter.sy=1;
			me._button_unter.style[domTransform]=parameterToTransform(me._button_unter.ggParameter);
		}
		this._stockwerk_buttons.appendChild(this._button_unter);
		this._mapholder.appendChild(this._stockwerk_buttons);
		this._stockwerk_wechsel_text=document.createElement('div');
		this._stockwerk_wechsel_text__text=document.createElement('div');
		this._stockwerk_wechsel_text.className='ggskin ggskin_textdiv';
		this._stockwerk_wechsel_text.ggTextDiv=this._stockwerk_wechsel_text__text;
		this._stockwerk_wechsel_text.ggId="Stockwerk_Wechsel_Text";
		this._stockwerk_wechsel_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stockwerk_wechsel_text.ggVisible=true;
		this._stockwerk_wechsel_text.className='ggskin ggskin_text';
		this._stockwerk_wechsel_text.ggType='text';
		this._stockwerk_wechsel_text.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=Math.floor(0 + (296-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 1018px;';
		hs+='top:  142px;';
		hs+='width: 296px;';
		hs+='height: 22px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._stockwerk_wechsel_text.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: #00ff40;';
		hs+='text-align: right;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._stockwerk_wechsel_text__text.setAttribute('style',hs);
		this._stockwerk_wechsel_text.ggTextDiv.innerHTML="<p style=\"font-size:40px;color:white\"><b>Erdgeschoss<\/b><\/p>";
		this._stockwerk_wechsel_text.appendChild(this._stockwerk_wechsel_text__text);
		this._mapholder.appendChild(this._stockwerk_wechsel_text);
		this._stockwerk_wechsel=document.createElement('div');
		this._stockwerk_wechsel.ggId="Stockwerk_Wechsel";
		this._stockwerk_wechsel.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stockwerk_wechsel.ggVisible=true;
		this._stockwerk_wechsel.className='ggskin ggskin_container';
		this._stockwerk_wechsel.ggType='container';
		hs ='position:absolute;';
		hs+='left: 851px;';
		hs+='top:  98px;';
		hs+='width: 55px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._stockwerk_wechsel.setAttribute('style',hs);
		this._down=document.createElement('div');
		this._down.ggId="DOWN";
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		this._down.className='ggskin ggskin_container';
		this._down.ggType='container';
		hs ='position:absolute;';
		hs+='left: -851px;';
		hs+='top:  -97px;';
		hs+='width: 1px;';
		hs+='height: 1px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._down.setAttribute('style',hs);
		this._do_ug=document.createElement('div');
		this._do_ug.ggId="DO_UG";
		this._do_ug.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._do_ug.ggVisible=true;
		this._do_ug.className='ggskin ggskin_image';
		this._do_ug.ggType='image';
		hs ='position:absolute;';
		hs+='left: 1103px;';
		hs+='top:  251px;';
		hs+='width: 128px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._do_ug.setAttribute('style',hs);
		this._do_ug__img=document.createElement('img');
		this._do_ug__img.className='ggskin ggskin_image';
		this._do_ug__img.setAttribute('src',basePath + 'images/do_ug.png');
		this._do_ug__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._do_ug__img.className='ggskin ggskin_image';
		this._do_ug__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._do_ug__img);
		this._do_ug.appendChild(this._do_ug__img);
		this._do_ug.onclick=function () {
			flag=(me._do_ug.style.visibility=='hidden');
			me._do_ug.style[domTransition]='none';
			me._do_ug.style.visibility=flag?'inherit':'hidden';
			me._do_ug.ggVisible=flag;
			flag=(me._up_1.style.visibility=='hidden');
			me._up_1.style[domTransition]='none';
			me._up_1.style.visibility=flag?'inherit':'hidden';
			me._up_1.ggVisible=flag;
			flag=(me._up_eg.style.visibility=='hidden');
			me._up_eg.style[domTransition]='none';
			me._up_eg.style.visibility=flag?'inherit':'hidden';
			me._up_eg.ggVisible=flag;
			me._stockwerk_wechsel_text.ggText="<p style=\"font-size:40px;color:white\"><b>Untergeschoss<\/b><\/p>";
			me._stockwerk_wechsel_text.ggTextDiv.innerHTML=me._stockwerk_wechsel_text.ggText;
			if (me._stockwerk_wechsel_text.ggUpdateText) {
				me._stockwerk_wechsel_text.ggUpdateText=function() {
					var hs="<p style=\"font-size:40px;color:white\"><b>Untergeschoss<\/b><\/p>";
					if (hs!=me._stockwerk_wechsel_text.ggText) {
						me._stockwerk_wechsel_text.ggText=hs;
						me._stockwerk_wechsel_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			if (me.player.transitionsDisabled) {
				me._map_keller.style[domTransition]='none';
			} else {
				me._map_keller.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_keller.style.opacity='1';
			me._map_keller.style.visibility=me._map_keller.ggVisible?'inherit':'hidden';
			me._map_erdgeschoss.style[domTransition]='none';
			me._map_erdgeschoss.style.opacity='0';
			me._map_erdgeschoss.style.visibility='hidden';
			me._gang_u_21.onclick();
		}
		this._do_ug.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._do_ug.style[domTransition]='none';
			} else {
				me._do_ug.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._do_ug.ggParameter.sx=1.2;me._do_ug.ggParameter.sy=1.2;
			me._do_ug.style[domTransform]=parameterToTransform(me._do_ug.ggParameter);
		}
		this._do_ug.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._do_ug.style[domTransition]='none';
			} else {
				me._do_ug.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._do_ug.ggParameter.sx=1;me._do_ug.ggParameter.sy=1;
			me._do_ug.style[domTransform]=parameterToTransform(me._do_ug.ggParameter);
		}
		this._down.appendChild(this._do_ug);
		this._do_eg=document.createElement('div');
		this._do_eg.ggId="DO_EG";
		this._do_eg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._do_eg.ggVisible=true;
		this._do_eg.className='ggskin ggskin_image';
		this._do_eg.ggType='image';
		hs ='position:absolute;';
		hs+='left: 1102px;';
		hs+='top:  251px;';
		hs+='width: 128px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._do_eg.setAttribute('style',hs);
		this._do_eg__img=document.createElement('img');
		this._do_eg__img.className='ggskin ggskin_image';
		this._do_eg__img.setAttribute('src',basePath + 'images/do_eg.png');
		this._do_eg__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._do_eg__img.className='ggskin ggskin_image';
		this._do_eg__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._do_eg__img);
		this._do_eg.appendChild(this._do_eg__img);
		this._do_eg.onclick=function () {
			flag=(me._do_eg.style.visibility=='hidden');
			me._do_eg.style[domTransition]='none';
			me._do_eg.style.visibility=flag?'inherit':'hidden';
			me._do_eg.ggVisible=flag;
			flag=(me._up_1.style.visibility=='hidden');
			me._up_1.style[domTransition]='none';
			me._up_1.style.visibility=flag?'inherit':'hidden';
			me._up_1.ggVisible=flag;
			flag=(me._do_ug.style.visibility=='hidden');
			me._do_ug.style[domTransition]='none';
			me._do_ug.style.visibility=flag?'inherit':'hidden';
			me._do_ug.ggVisible=flag;
			me._stockwerk_wechsel_text.ggText="<p style=\"font-size:40px;color:white\"><b>Erdgeschoss<\/b><\/p>";
			me._stockwerk_wechsel_text.ggTextDiv.innerHTML=me._stockwerk_wechsel_text.ggText;
			if (me._stockwerk_wechsel_text.ggUpdateText) {
				me._stockwerk_wechsel_text.ggUpdateText=function() {
					var hs="<p style=\"font-size:40px;color:white\"><b>Erdgeschoss<\/b><\/p>";
					if (hs!=me._stockwerk_wechsel_text.ggText) {
						me._stockwerk_wechsel_text.ggText=hs;
						me._stockwerk_wechsel_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			flag=(me._up_2.style.visibility=='hidden');
			me._up_2.style[domTransition]='none';
			me._up_2.style.visibility=flag?'inherit':'hidden';
			me._up_2.ggVisible=flag;
			me._map_1.style[domTransition]='none';
			me._map_1.style.opacity='0';
			me._map_1.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._map_erdgeschoss.style[domTransition]='none';
			} else {
				me._map_erdgeschoss.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_erdgeschoss.style.opacity='1';
			me._map_erdgeschoss.style.visibility=me._map_erdgeschoss.ggVisible?'inherit':'hidden';
			me._aula.onclick();
		}
		this._do_eg.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._do_eg.style[domTransition]='none';
			} else {
				me._do_eg.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._do_eg.ggParameter.sx=1.2;me._do_eg.ggParameter.sy=1.2;
			me._do_eg.style[domTransform]=parameterToTransform(me._do_eg.ggParameter);
		}
		this._do_eg.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._do_eg.style[domTransition]='none';
			} else {
				me._do_eg.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._do_eg.ggParameter.sx=1;me._do_eg.ggParameter.sy=1;
			me._do_eg.style[domTransform]=parameterToTransform(me._do_eg.ggParameter);
		}
		this._down.appendChild(this._do_eg);
		this._do_1=document.createElement('div');
		this._do_1.ggId="DO_1";
		this._do_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._do_1.ggVisible=true;
		this._do_1.className='ggskin ggskin_image';
		this._do_1.ggType='image';
		hs ='position:absolute;';
		hs+='left: 1102px;';
		hs+='top:  251px;';
		hs+='width: 128px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._do_1.setAttribute('style',hs);
		this._do_1__img=document.createElement('img');
		this._do_1__img.className='ggskin ggskin_image';
		this._do_1__img.setAttribute('src',basePath + 'images/do_1.png');
		this._do_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._do_1__img.className='ggskin ggskin_image';
		this._do_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._do_1__img);
		this._do_1.appendChild(this._do_1__img);
		this._do_1.onclick=function () {
			flag=(me._do_1.style.visibility=='hidden');
			me._do_1.style[domTransition]='none';
			me._do_1.style.visibility=flag?'inherit':'hidden';
			me._do_1.ggVisible=flag;
			flag=(me._do_eg.style.visibility=='hidden');
			me._do_eg.style[domTransition]='none';
			me._do_eg.style.visibility=flag?'inherit':'hidden';
			me._do_eg.ggVisible=flag;
			me._stockwerk_wechsel_text.ggText="<p style=\"font-size:40px;color:white\"><b>1. Stock<\/b><\/p>";
			me._stockwerk_wechsel_text.ggTextDiv.innerHTML=me._stockwerk_wechsel_text.ggText;
			if (me._stockwerk_wechsel_text.ggUpdateText) {
				me._stockwerk_wechsel_text.ggUpdateText=function() {
					var hs="<p style=\"font-size:40px;color:white\"><b>1. Stock<\/b><\/p>";
					if (hs!=me._stockwerk_wechsel_text.ggText) {
						me._stockwerk_wechsel_text.ggText=hs;
						me._stockwerk_wechsel_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			flag=(me._up_3.style.visibility=='hidden');
			me._up_3.style[domTransition]='none';
			me._up_3.style.visibility=flag?'inherit':'hidden';
			me._up_3.ggVisible=flag;
			flag=(me._up_2.style.visibility=='hidden');
			me._up_2.style[domTransition]='none';
			me._up_2.style.visibility=flag?'inherit':'hidden';
			me._up_2.ggVisible=flag;
			me._map_2.style[domTransition]='none';
			me._map_2.style.opacity='0';
			me._map_2.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._map_1.style[domTransition]='none';
			} else {
				me._map_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_1.style.opacity='1';
			me._map_1.style.visibility=me._map_1.ggVisible?'inherit':'hidden';
			me._bibliothek.onclick();
		}
		this._do_1.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._do_1.style[domTransition]='none';
			} else {
				me._do_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._do_1.ggParameter.sx=1.2;me._do_1.ggParameter.sy=1.2;
			me._do_1.style[domTransform]=parameterToTransform(me._do_1.ggParameter);
		}
		this._do_1.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._do_1.style[domTransition]='none';
			} else {
				me._do_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._do_1.ggParameter.sx=1;me._do_1.ggParameter.sy=1;
			me._do_1.style[domTransform]=parameterToTransform(me._do_1.ggParameter);
		}
		this._down.appendChild(this._do_1);
		this._do_2=document.createElement('div');
		this._do_2.ggId="DO_2";
		this._do_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._do_2.ggVisible=true;
		this._do_2.className='ggskin ggskin_image';
		this._do_2.ggType='image';
		hs ='position:absolute;';
		hs+='left: 1102px;';
		hs+='top:  251px;';
		hs+='width: 128px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._do_2.setAttribute('style',hs);
		this._do_2__img=document.createElement('img');
		this._do_2__img.className='ggskin ggskin_image';
		this._do_2__img.setAttribute('src',basePath + 'images/do_2.png');
		this._do_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._do_2__img.className='ggskin ggskin_image';
		this._do_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._do_2__img);
		this._do_2.appendChild(this._do_2__img);
		this._do_2.onclick=function () {
			flag=(me._do_2.style.visibility=='hidden');
			me._do_2.style[domTransition]='none';
			me._do_2.style.visibility=flag?'inherit':'hidden';
			me._do_2.ggVisible=flag;
			flag=(me._do_1.style.visibility=='hidden');
			me._do_1.style[domTransition]='none';
			me._do_1.style.visibility=flag?'inherit':'hidden';
			me._do_1.ggVisible=flag;
			flag=(me._up_3.style.visibility=='hidden');
			me._up_3.style[domTransition]='none';
			me._up_3.style.visibility=flag?'inherit':'hidden';
			me._up_3.ggVisible=flag;
			me._stockwerk_wechsel_text.ggText="<p style=\"font-size:40px;color:white\"><b>2. Stock<\/b><\/p>";
			me._stockwerk_wechsel_text.ggTextDiv.innerHTML=me._stockwerk_wechsel_text.ggText;
			if (me._stockwerk_wechsel_text.ggUpdateText) {
				me._stockwerk_wechsel_text.ggUpdateText=function() {
					var hs="<p style=\"font-size:40px;color:white\"><b>2. Stock<\/b><\/p>";
					if (hs!=me._stockwerk_wechsel_text.ggText) {
						me._stockwerk_wechsel_text.ggText=hs;
						me._stockwerk_wechsel_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			if (me.player.transitionsDisabled) {
				me._map_2.style[domTransition]='none';
			} else {
				me._map_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_2.style.opacity='1';
			me._map_2.style.visibility=me._map_2.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._map_3.style[domTransition]='none';
			} else {
				me._map_3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_3.style.opacity='0';
			me._map_3.style.visibility='hidden';
			me._gang_2_06.onclick();
		}
		this._do_2.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._do_2.style[domTransition]='none';
			} else {
				me._do_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._do_2.ggParameter.sx=1.2;me._do_2.ggParameter.sy=1.2;
			me._do_2.style[domTransform]=parameterToTransform(me._do_2.ggParameter);
		}
		this._do_2.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._do_2.style[domTransition]='none';
			} else {
				me._do_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._do_2.ggParameter.sx=1;me._do_2.ggParameter.sy=1;
			me._do_2.style[domTransform]=parameterToTransform(me._do_2.ggParameter);
		}
		this._down.appendChild(this._do_2);
		this._stockwerk_wechsel.appendChild(this._down);
		this._up=document.createElement('div');
		this._up.ggId="UP";
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		this._up.className='ggskin ggskin_container';
		this._up.ggType='container';
		hs ='position:absolute;';
		hs+='left: -851px;';
		hs+='top:  -97px;';
		hs+='width: 1px;';
		hs+='height: 1px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._up.setAttribute('style',hs);
		this._up_3=document.createElement('div');
		this._up_3.ggId="UP_3";
		this._up_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up_3.ggVisible=true;
		this._up_3.className='ggskin ggskin_image';
		this._up_3.ggType='image';
		hs ='position:absolute;';
		hs+='left: 1104px;';
		hs+='top:  84px;';
		hs+='width: 128px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up_3.setAttribute('style',hs);
		this._up_3__img=document.createElement('img');
		this._up_3__img.className='ggskin ggskin_image';
		this._up_3__img.setAttribute('src',basePath + 'images/up_3.png');
		this._up_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._up_3__img.className='ggskin ggskin_image';
		this._up_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._up_3__img);
		this._up_3.appendChild(this._up_3__img);
		this._up_3.onclick=function () {
			flag=(me._up_3.style.visibility=='hidden');
			me._up_3.style[domTransition]='none';
			me._up_3.style.visibility=flag?'inherit':'hidden';
			me._up_3.ggVisible=flag;
			flag=(me._do_2.style.visibility=='hidden');
			me._do_2.style[domTransition]='none';
			me._do_2.style.visibility=flag?'inherit':'hidden';
			me._do_2.ggVisible=flag;
			me._stockwerk_wechsel_text.ggText="<p style=\"font-size:40px;color:white\"><b>3. Stock<\/b><\/p>";
			me._stockwerk_wechsel_text.ggTextDiv.innerHTML=me._stockwerk_wechsel_text.ggText;
			if (me._stockwerk_wechsel_text.ggUpdateText) {
				me._stockwerk_wechsel_text.ggUpdateText=function() {
					var hs="<p style=\"font-size:40px;color:white\"><b>3. Stock<\/b><\/p>";
					if (hs!=me._stockwerk_wechsel_text.ggText) {
						me._stockwerk_wechsel_text.ggText=hs;
						me._stockwerk_wechsel_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			flag=(me._do_1.style.visibility=='hidden');
			me._do_1.style[domTransition]='none';
			me._do_1.style.visibility=flag?'inherit':'hidden';
			me._do_1.ggVisible=flag;
			me._map_3.style[domTransition]='none';
			me._map_3.style.opacity='1';
			me._map_3.style.visibility=me._map_3.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._map_2.style[domTransition]='none';
			} else {
				me._map_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_2.style.opacity='0';
			me._map_2.style.visibility='hidden';
			me._gang_3_06.onclick();
		}
		this._up_3.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._up_3.style[domTransition]='none';
			} else {
				me._up_3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._up_3.ggParameter.sx=1.2;me._up_3.ggParameter.sy=1.2;
			me._up_3.style[domTransform]=parameterToTransform(me._up_3.ggParameter);
		}
		this._up_3.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._up_3.style[domTransition]='none';
			} else {
				me._up_3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._up_3.ggParameter.sx=1;me._up_3.ggParameter.sy=1;
			me._up_3.style[domTransform]=parameterToTransform(me._up_3.ggParameter);
		}
		this._up.appendChild(this._up_3);
		this._up_2=document.createElement('div');
		this._up_2.ggId="UP_2";
		this._up_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up_2.ggVisible=true;
		this._up_2.className='ggskin ggskin_image';
		this._up_2.ggType='image';
		hs ='position:absolute;';
		hs+='left: 1104px;';
		hs+='top:  84px;';
		hs+='width: 128px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up_2.setAttribute('style',hs);
		this._up_2__img=document.createElement('img');
		this._up_2__img.className='ggskin ggskin_image';
		this._up_2__img.setAttribute('src',basePath + 'images/up_2.png');
		this._up_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._up_2__img.className='ggskin ggskin_image';
		this._up_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._up_2__img);
		this._up_2.appendChild(this._up_2__img);
		this._up_2.onclick=function () {
			flag=(me._up_2.style.visibility=='hidden');
			me._up_2.style[domTransition]='none';
			me._up_2.style.visibility=flag?'inherit':'hidden';
			me._up_2.ggVisible=flag;
			flag=(me._do_1.style.visibility=='hidden');
			me._do_1.style[domTransition]='none';
			me._do_1.style.visibility=flag?'inherit':'hidden';
			me._do_1.ggVisible=flag;
			flag=(me._up_3.style.visibility=='hidden');
			me._up_3.style[domTransition]='none';
			me._up_3.style.visibility=flag?'inherit':'hidden';
			me._up_3.ggVisible=flag;
			me._stockwerk_wechsel_text.ggText="<p style=\"font-size:40px;color:white\"><b>2. Stock<\/b><\/p>";
			me._stockwerk_wechsel_text.ggTextDiv.innerHTML=me._stockwerk_wechsel_text.ggText;
			if (me._stockwerk_wechsel_text.ggUpdateText) {
				me._stockwerk_wechsel_text.ggUpdateText=function() {
					var hs="<p style=\"font-size:40px;color:white\"><b>2. Stock<\/b><\/p>";
					if (hs!=me._stockwerk_wechsel_text.ggText) {
						me._stockwerk_wechsel_text.ggText=hs;
						me._stockwerk_wechsel_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			flag=(me._do_eg.style.visibility=='hidden');
			me._do_eg.style[domTransition]='none';
			me._do_eg.style.visibility=flag?'inherit':'hidden';
			me._do_eg.ggVisible=flag;
			if (me.player.transitionsDisabled) {
				me._map_2.style[domTransition]='none';
			} else {
				me._map_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_2.style.opacity='1';
			me._map_2.style.visibility=me._map_2.ggVisible?'inherit':'hidden';
			me._map_1.style[domTransition]='none';
			me._map_1.style.opacity='0';
			me._map_1.style.visibility='hidden';
			me._gang_2_06.onclick();
		}
		this._up_2.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._up_2.style[domTransition]='none';
			} else {
				me._up_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._up_2.ggParameter.sx=1.2;me._up_2.ggParameter.sy=1.2;
			me._up_2.style[domTransform]=parameterToTransform(me._up_2.ggParameter);
		}
		this._up_2.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._up_2.style[domTransition]='none';
			} else {
				me._up_2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._up_2.ggParameter.sx=1;me._up_2.ggParameter.sy=1;
			me._up_2.style[domTransform]=parameterToTransform(me._up_2.ggParameter);
		}
		this._up.appendChild(this._up_2);
		this._up_1=document.createElement('div');
		this._up_1.ggId="UP_1";
		this._up_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up_1.ggVisible=true;
		this._up_1.className='ggskin ggskin_image';
		this._up_1.ggType='image';
		hs ='position:absolute;';
		hs+='left: 1104px;';
		hs+='top:  84px;';
		hs+='width: 128px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up_1.setAttribute('style',hs);
		this._up_1__img=document.createElement('img');
		this._up_1__img.className='ggskin ggskin_image';
		this._up_1__img.setAttribute('src',basePath + 'images/up_1.png');
		this._up_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._up_1__img.className='ggskin ggskin_image';
		this._up_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._up_1__img);
		this._up_1.appendChild(this._up_1__img);
		this._up_1.onclick=function () {
			flag=(me._up_1.style.visibility=='hidden');
			me._up_1.style[domTransition]='none';
			me._up_1.style.visibility=flag?'inherit':'hidden';
			me._up_1.ggVisible=flag;
			flag=(me._up_2.style.visibility=='hidden');
			me._up_2.style[domTransition]='none';
			me._up_2.style.visibility=flag?'inherit':'hidden';
			me._up_2.ggVisible=flag;
			flag=(me._do_eg.style.visibility=='hidden');
			me._do_eg.style[domTransition]='none';
			me._do_eg.style.visibility=flag?'inherit':'hidden';
			me._do_eg.ggVisible=flag;
			me._stockwerk_wechsel_text.ggText="<p style=\"font-size:40px;color:white\"><b>1. Stock<\/b><\/p>";
			me._stockwerk_wechsel_text.ggTextDiv.innerHTML=me._stockwerk_wechsel_text.ggText;
			if (me._stockwerk_wechsel_text.ggUpdateText) {
				me._stockwerk_wechsel_text.ggUpdateText=function() {
					var hs="<p style=\"font-size:40px;color:white\"><b>1. Stock<\/b><\/p>";
					if (hs!=me._stockwerk_wechsel_text.ggText) {
						me._stockwerk_wechsel_text.ggText=hs;
						me._stockwerk_wechsel_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			flag=(me._do_ug.style.visibility=='hidden');
			me._do_ug.style[domTransition]='none';
			me._do_ug.style.visibility=flag?'inherit':'hidden';
			me._do_ug.ggVisible=flag;
			if (me.player.transitionsDisabled) {
				me._map_1.style[domTransition]='none';
			} else {
				me._map_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_1.style.opacity='1';
			me._map_1.style.visibility=me._map_1.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._map_erdgeschoss.style[domTransition]='none';
			} else {
				me._map_erdgeschoss.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_erdgeschoss.style.opacity='0';
			me._map_erdgeschoss.style.visibility='hidden';
			me._bibliothek.onclick();
		}
		this._up_1.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._up_1.style[domTransition]='none';
			} else {
				me._up_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._up_1.ggParameter.sx=1.2;me._up_1.ggParameter.sy=1.2;
			me._up_1.style[domTransform]=parameterToTransform(me._up_1.ggParameter);
		}
		this._up_1.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._up_1.style[domTransition]='none';
			} else {
				me._up_1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._up_1.ggParameter.sx=1;me._up_1.ggParameter.sy=1;
			me._up_1.style[domTransform]=parameterToTransform(me._up_1.ggParameter);
		}
		this._up.appendChild(this._up_1);
		this._up_eg=document.createElement('div');
		this._up_eg.ggId="UP_EG";
		this._up_eg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up_eg.ggVisible=true;
		this._up_eg.className='ggskin ggskin_image';
		this._up_eg.ggType='image';
		hs ='position:absolute;';
		hs+='left: 1104px;';
		hs+='top:  84px;';
		hs+='width: 128px;';
		hs+='height: 80px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._up_eg.setAttribute('style',hs);
		this._up_eg__img=document.createElement('img');
		this._up_eg__img.className='ggskin ggskin_image';
		this._up_eg__img.setAttribute('src',basePath + 'images/up_eg.png');
		this._up_eg__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._up_eg__img.className='ggskin ggskin_image';
		this._up_eg__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._up_eg__img);
		this._up_eg.appendChild(this._up_eg__img);
		this._up_eg.onclick=function () {
			flag=(me._up_eg.style.visibility=='hidden');
			me._up_eg.style[domTransition]='none';
			me._up_eg.style.visibility=flag?'inherit':'hidden';
			me._up_eg.ggVisible=flag;
			flag=(me._do_ug.style.visibility=='hidden');
			me._do_ug.style[domTransition]='none';
			me._do_ug.style.visibility=flag?'inherit':'hidden';
			me._do_ug.ggVisible=flag;
			flag=(me._up_1.style.visibility=='hidden');
			me._up_1.style[domTransition]='none';
			me._up_1.style.visibility=flag?'inherit':'hidden';
			me._up_1.ggVisible=flag;
			me._stockwerk_wechsel_text.ggText="<p style=\"font-size:40px;color:white\"><b>Erdgeschoss<\/b><\/p>";
			me._stockwerk_wechsel_text.ggTextDiv.innerHTML=me._stockwerk_wechsel_text.ggText;
			if (me._stockwerk_wechsel_text.ggUpdateText) {
				me._stockwerk_wechsel_text.ggUpdateText=function() {
					var hs="<p style=\"font-size:40px;color:white\"><b>Erdgeschoss<\/b><\/p>";
					if (hs!=me._stockwerk_wechsel_text.ggText) {
						me._stockwerk_wechsel_text.ggText=hs;
						me._stockwerk_wechsel_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			if (me.player.transitionsDisabled) {
				me._map_erdgeschoss.style[domTransition]='none';
			} else {
				me._map_erdgeschoss.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_erdgeschoss.style.opacity='1';
			me._map_erdgeschoss.style.visibility=me._map_erdgeschoss.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._map_keller.style[domTransition]='none';
			} else {
				me._map_keller.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._map_keller.style.opacity='0';
			me._map_keller.style.visibility='hidden';
			me._aula.onclick();
		}
		this._up_eg.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._up_eg.style[domTransition]='none';
			} else {
				me._up_eg.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._up_eg.ggParameter.sx=1.2;me._up_eg.ggParameter.sy=1.2;
			me._up_eg.style[domTransform]=parameterToTransform(me._up_eg.ggParameter);
		}
		this._up_eg.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._up_eg.style[domTransition]='none';
			} else {
				me._up_eg.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._up_eg.ggParameter.sx=1;me._up_eg.ggParameter.sy=1;
			me._up_eg.style[domTransform]=parameterToTransform(me._up_eg.ggParameter);
		}
		this._up.appendChild(this._up_eg);
		this._stockwerk_wechsel.appendChild(this._up);
		this._indecatoren=document.createElement('div');
		this._indecatoren.ggId="Indecatoren";
		this._indecatoren.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._indecatoren.ggVisible=false;
		this._indecatoren.className='ggskin ggskin_container';
		this._indecatoren.ggType='container';
		hs ='position:absolute;';
		hs+='left: -56px;';
		hs+='top:  -158px;';
		hs+='width: 713px;';
		hs+='height: 170px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._indecatoren.ggParameter) + ';';
		hs+='visibility: hidden;';
		this._indecatoren.setAttribute('style',hs);
		this._inducator_3=document.createElement('div');
		this._inducator_3.ggId="Inducator_3";
		this._inducator_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._inducator_3.ggVisible=true;
		this._inducator_3.className='ggskin ggskin_image';
		this._inducator_3.ggType='image';
		hs ='position:absolute;';
		hs+='left: -13px;';
		hs+='top:  -2px;';
		hs+='width: 741px;';
		hs+='height: 182px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._inducator_3.setAttribute('style',hs);
		this._inducator_3__img=document.createElement('img');
		this._inducator_3__img.className='ggskin ggskin_image';
		this._inducator_3__img.setAttribute('src',basePath + 'images/inducator_3.png');
		this._inducator_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._inducator_3__img.className='ggskin ggskin_image';
		this._inducator_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._inducator_3__img);
		this._inducator_3.appendChild(this._inducator_3__img);
		this._indecatoren.appendChild(this._inducator_3);
		this._inducator_2=document.createElement('div');
		this._inducator_2.ggId="Inducator_2";
		this._inducator_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._inducator_2.ggVisible=true;
		this._inducator_2.className='ggskin ggskin_image';
		this._inducator_2.ggType='image';
		hs ='position:absolute;';
		hs+='left: -13px;';
		hs+='top:  -2px;';
		hs+='width: 741px;';
		hs+='height: 182px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._inducator_2.setAttribute('style',hs);
		this._inducator_2__img=document.createElement('img');
		this._inducator_2__img.className='ggskin ggskin_image';
		this._inducator_2__img.setAttribute('src',basePath + 'images/inducator_2.png');
		this._inducator_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._inducator_2__img.className='ggskin ggskin_image';
		this._inducator_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._inducator_2__img);
		this._inducator_2.appendChild(this._inducator_2__img);
		this._indecatoren.appendChild(this._inducator_2);
		this._inducator_1=document.createElement('div');
		this._inducator_1.ggId="Inducator_1";
		this._inducator_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._inducator_1.ggVisible=true;
		this._inducator_1.className='ggskin ggskin_image';
		this._inducator_1.ggType='image';
		hs ='position:absolute;';
		hs+='left: -13px;';
		hs+='top:  -2px;';
		hs+='width: 741px;';
		hs+='height: 182px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._inducator_1.setAttribute('style',hs);
		this._inducator_1__img=document.createElement('img');
		this._inducator_1__img.className='ggskin ggskin_image';
		this._inducator_1__img.setAttribute('src',basePath + 'images/inducator_1.png');
		this._inducator_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._inducator_1__img.className='ggskin ggskin_image';
		this._inducator_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._inducator_1__img);
		this._inducator_1.appendChild(this._inducator_1__img);
		this._indecatoren.appendChild(this._inducator_1);
		this._inducator_eg=document.createElement('div');
		this._inducator_eg.ggId="Inducator_EG";
		this._inducator_eg.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._inducator_eg.ggVisible=true;
		this._inducator_eg.className='ggskin ggskin_image';
		this._inducator_eg.ggType='image';
		hs ='position:absolute;';
		hs+='left: -13px;';
		hs+='top:  -2px;';
		hs+='width: 741px;';
		hs+='height: 182px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._inducator_eg.setAttribute('style',hs);
		this._inducator_eg__img=document.createElement('img');
		this._inducator_eg__img.className='ggskin ggskin_image';
		this._inducator_eg__img.setAttribute('src',basePath + 'images/inducator_eg.png');
		this._inducator_eg__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._inducator_eg__img.className='ggskin ggskin_image';
		this._inducator_eg__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._inducator_eg__img);
		this._inducator_eg.appendChild(this._inducator_eg__img);
		this._indecatoren.appendChild(this._inducator_eg);
		this._inducator_ug=document.createElement('div');
		this._inducator_ug.ggId="Inducator_UG";
		this._inducator_ug.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._inducator_ug.ggVisible=true;
		this._inducator_ug.className='ggskin ggskin_image';
		this._inducator_ug.ggType='image';
		hs ='position:absolute;';
		hs+='left: -13px;';
		hs+='top:  -2px;';
		hs+='width: 741px;';
		hs+='height: 182px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._inducator_ug.setAttribute('style',hs);
		this._inducator_ug__img=document.createElement('img');
		this._inducator_ug__img.className='ggskin ggskin_image';
		this._inducator_ug__img.setAttribute('src',basePath + 'images/inducator_ug.png');
		this._inducator_ug__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._inducator_ug__img.className='ggskin ggskin_image';
		this._inducator_ug__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._inducator_ug__img);
		this._inducator_ug.appendChild(this._inducator_ug__img);
		this._indecatoren.appendChild(this._inducator_ug);
		this._stockwerk_wechsel.appendChild(this._indecatoren);
		this._mapholder.appendChild(this._stockwerk_wechsel);
		this._map_3=document.createElement('div');
		this._map_3.ggId="Map_3";
		this._map_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_3.ggVisible=false;
		this._map_3.className='ggskin ggskin_container';
		this._map_3.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  1px;';
		hs+='width: 1px;';
		hs+='height: 1px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		this._map_3.setAttribute('style',hs);
		this._map_30=document.createElement('div');
		this._map_30.ggId="Map_3";
		this._map_30.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		this._map_30.ggVisible=true;
		this._map_30.className='ggskin ggskin_image';
		this._map_30.ggType='image';
		hs ='position:absolute;';
		hs+='left: -33px;';
		hs+='top:  -11px;';
		hs+='width: 1137px;';
		hs+='height: 432px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._map_30.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._map_30.setAttribute('style',hs);
		this._map_30__img=document.createElement('img');
		this._map_30__img.className='ggskin ggskin_image';
		this._map_30__img.setAttribute('src',basePath + 'images/map_30.png');
		this._map_30__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._map_30__img.className='ggskin ggskin_image';
		this._map_30__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._map_30__img);
		this._map_30.appendChild(this._map_30__img);
		this._map_3.appendChild(this._map_30);
		this._map_3_spots=document.createElement('div');
		this._map_3_spots.ggId="Map_3_Spots";
		this._map_3_spots.ggParameter={ rx:0,ry:0,a:0,sx:1.3,sy:1.3 };
		this._map_3_spots.ggVisible=true;
		this._map_3_spots.className='ggskin ggskin_container';
		this._map_3_spots.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 1px;';
		hs+='height: 1px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._map_3_spots.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._map_3_spots.setAttribute('style',hs);
		this._gang_3_13=document.createElement('div');
		this._gang_3_13.ggId="Gang_3_13";
		this._gang_3_13.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._gang_3_13.ggVisible=true;
		this._gang_3_13.className='ggskin ggskin_image';
		this._gang_3_13.ggType='image';
		hs ='position:absolute;';
		hs+='left: 443px;';
		hs+='top:  130px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_3_13.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._gang_3_13.setAttribute('style',hs);
		this._gang_3_13__img=document.createElement('img');
		this._gang_3_13__img.className='ggskin ggskin_image';
		this._gang_3_13__img.setAttribute('src',basePath + 'images/gang_3_13.png');
		this._gang_3_13__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_3_13__img.className='ggskin ggskin_image';
		this._gang_3_13__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_3_13__img);
		this._gang_3_13.appendChild(this._gang_3_13__img);
		this._gang_3_13.onclick=function () {
			me.player.openNext("Gang 3_13_out.xml","");
			me._current_selection3.style[domTransition]='none';
			me._current_selection3.ggParameter.rx=443;me._current_selection3.ggParameter.ry=130;
			me._current_selection3.style[domTransform]=parameterToTransform(me._current_selection3.ggParameter);
			me._orientierung3.style[domTransition]='none';
			me._orientierung3.ggParameter.rx=443;me._orientierung3.ggParameter.ry=130;
			me._orientierung3.style[domTransform]=parameterToTransform(me._orientierung3.ggParameter);
		}
		this._gang_3_13.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_3_13.style[domTransition]='none';
			} else {
				me._gang_3_13.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_3_13.ggParameter.sx=0.3;me._gang_3_13.ggParameter.sy=0.3;
			me._gang_3_13.style[domTransform]=parameterToTransform(me._gang_3_13.ggParameter);
		}
		this._gang_3_13.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_3_13.style[domTransition]='none';
			} else {
				me._gang_3_13.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_3_13.ggParameter.sx=0.2;me._gang_3_13.ggParameter.sy=0.2;
			me._gang_3_13.style[domTransform]=parameterToTransform(me._gang_3_13.ggParameter);
		}
		this._map_3_spots.appendChild(this._gang_3_13);
		this._room_3_06=document.createElement('div');
		this._room_3_06.ggId="Room_3_06";
		this._room_3_06.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._room_3_06.ggVisible=true;
		this._room_3_06.className='ggskin ggskin_image';
		this._room_3_06.ggType='image';
		hs ='position:absolute;';
		hs+='left: 36px;';
		hs+='top:  133px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_3_06.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._room_3_06.setAttribute('style',hs);
		this._room_3_06__img=document.createElement('img');
		this._room_3_06__img.className='ggskin ggskin_image';
		this._room_3_06__img.setAttribute('src',basePath + 'images/room_3_06.png');
		this._room_3_06__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_3_06__img.className='ggskin ggskin_image';
		this._room_3_06__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_3_06__img);
		this._room_3_06.appendChild(this._room_3_06__img);
		this._room_3_06.onclick=function () {
			me.player.openNext("3_06_out.xml","");
			me._current_selection3.style[domTransition]='none';
			me._current_selection3.ggParameter.rx=36;me._current_selection3.ggParameter.ry=133;
			me._current_selection3.style[domTransform]=parameterToTransform(me._current_selection3.ggParameter);
			me._orientierung3.style[domTransition]='none';
			me._orientierung3.ggParameter.rx=36;me._orientierung3.ggParameter.ry=133;
			me._orientierung3.style[domTransform]=parameterToTransform(me._orientierung3.ggParameter);
		}
		this._room_3_06.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_3_06.style[domTransition]='none';
			} else {
				me._room_3_06.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_3_06.ggParameter.sx=0.3;me._room_3_06.ggParameter.sy=0.3;
			me._room_3_06.style[domTransform]=parameterToTransform(me._room_3_06.ggParameter);
		}
		this._room_3_06.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_3_06.style[domTransition]='none';
			} else {
				me._room_3_06.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_3_06.ggParameter.sx=0.2;me._room_3_06.ggParameter.sy=0.2;
			me._room_3_06.style[domTransform]=parameterToTransform(me._room_3_06.ggParameter);
		}
		this._map_3_spots.appendChild(this._room_3_06);
		this._room_3_09=document.createElement('div');
		this._room_3_09.ggId="Room_3_09";
		this._room_3_09.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._room_3_09.ggVisible=true;
		this._room_3_09.className='ggskin ggskin_image';
		this._room_3_09.ggType='image';
		hs ='position:absolute;';
		hs+='left: 186px;';
		hs+='top:  183px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_3_09.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._room_3_09.setAttribute('style',hs);
		this._room_3_09__img=document.createElement('img');
		this._room_3_09__img.className='ggskin ggskin_image';
		this._room_3_09__img.setAttribute('src',basePath + 'images/room_3_09.png');
		this._room_3_09__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_3_09__img.className='ggskin ggskin_image';
		this._room_3_09__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_3_09__img);
		this._room_3_09.appendChild(this._room_3_09__img);
		this._room_3_09.onclick=function () {
			me.player.openNext("3_09_out.xml","");
			me._current_selection3.style[domTransition]='none';
			me._current_selection3.ggParameter.rx=186;me._current_selection3.ggParameter.ry=183;
			me._current_selection3.style[domTransform]=parameterToTransform(me._current_selection3.ggParameter);
			me._orientierung3.style[domTransition]='none';
			me._orientierung3.ggParameter.rx=186;me._orientierung3.ggParameter.ry=183;
			me._orientierung3.style[domTransform]=parameterToTransform(me._orientierung3.ggParameter);
		}
		this._room_3_09.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_3_09.style[domTransition]='none';
			} else {
				me._room_3_09.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_3_09.ggParameter.sx=0.3;me._room_3_09.ggParameter.sy=0.3;
			me._room_3_09.style[domTransform]=parameterToTransform(me._room_3_09.ggParameter);
		}
		this._room_3_09.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_3_09.style[domTransition]='none';
			} else {
				me._room_3_09.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_3_09.ggParameter.sx=0.2;me._room_3_09.ggParameter.sy=0.2;
			me._room_3_09.style[domTransform]=parameterToTransform(me._room_3_09.ggParameter);
		}
		this._map_3_spots.appendChild(this._room_3_09);
		this._room_3_16=document.createElement('div');
		this._room_3_16.ggId="Room_3_16";
		this._room_3_16.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._room_3_16.ggVisible=true;
		this._room_3_16.className='ggskin ggskin_image';
		this._room_3_16.ggType='image';
		hs ='position:absolute;';
		hs+='left: 657px;';
		hs+='top:  132px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_3_16.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._room_3_16.setAttribute('style',hs);
		this._room_3_16__img=document.createElement('img');
		this._room_3_16__img.className='ggskin ggskin_image';
		this._room_3_16__img.setAttribute('src',basePath + 'images/room_3_16.png');
		this._room_3_16__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_3_16__img.className='ggskin ggskin_image';
		this._room_3_16__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_3_16__img);
		this._room_3_16.appendChild(this._room_3_16__img);
		this._room_3_16.onclick=function () {
			me.player.openNext("3_16_out.xml","");
			me._current_selection3.style[domTransition]='none';
			me._current_selection3.ggParameter.rx=657;me._current_selection3.ggParameter.ry=132;
			me._current_selection3.style[domTransform]=parameterToTransform(me._current_selection3.ggParameter);
			me._orientierung3.style[domTransition]='none';
			me._orientierung3.ggParameter.rx=657;me._orientierung3.ggParameter.ry=132;
			me._orientierung3.style[domTransform]=parameterToTransform(me._orientierung3.ggParameter);
		}
		this._room_3_16.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_3_16.style[domTransition]='none';
			} else {
				me._room_3_16.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_3_16.ggParameter.sx=0.3;me._room_3_16.ggParameter.sy=0.3;
			me._room_3_16.style[domTransform]=parameterToTransform(me._room_3_16.ggParameter);
		}
		this._room_3_16.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_3_16.style[domTransition]='none';
			} else {
				me._room_3_16.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_3_16.ggParameter.sx=0.2;me._room_3_16.ggParameter.sy=0.2;
			me._room_3_16.style[domTransform]=parameterToTransform(me._room_3_16.ggParameter);
		}
		this._map_3_spots.appendChild(this._room_3_16);
		this._gang_3_06=document.createElement('div');
		this._gang_3_06.ggId="Gang_3_06";
		this._gang_3_06.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._gang_3_06.ggVisible=true;
		this._gang_3_06.className='ggskin ggskin_image';
		this._gang_3_06.ggType='image';
		hs ='position:absolute;';
		hs+='left: 97px;';
		hs+='top:  127px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_3_06.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._gang_3_06.setAttribute('style',hs);
		this._gang_3_06__img=document.createElement('img');
		this._gang_3_06__img.className='ggskin ggskin_image';
		this._gang_3_06__img.setAttribute('src',basePath + 'images/gang_3_06.png');
		this._gang_3_06__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_3_06__img.className='ggskin ggskin_image';
		this._gang_3_06__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_3_06__img);
		this._gang_3_06.appendChild(this._gang_3_06__img);
		this._gang_3_06.onclick=function () {
			me.player.openNext("Gang 3_06_out.xml","");
			me._current_selection3.style[domTransition]='none';
			me._current_selection3.ggParameter.rx=97;me._current_selection3.ggParameter.ry=127;
			me._current_selection3.style[domTransform]=parameterToTransform(me._current_selection3.ggParameter);
			me._orientierung3.style[domTransition]='none';
			me._orientierung3.ggParameter.rx=97;me._orientierung3.ggParameter.ry=127;
			me._orientierung3.style[domTransform]=parameterToTransform(me._orientierung3.ggParameter);
		}
		this._gang_3_06.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_3_06.style[domTransition]='none';
			} else {
				me._gang_3_06.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_3_06.ggParameter.sx=0.3;me._gang_3_06.ggParameter.sy=0.3;
			me._gang_3_06.style[domTransform]=parameterToTransform(me._gang_3_06.ggParameter);
		}
		this._gang_3_06.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_3_06.style[domTransition]='none';
			} else {
				me._gang_3_06.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_3_06.ggParameter.sx=0.2;me._gang_3_06.ggParameter.sy=0.2;
			me._gang_3_06.style[domTransform]=parameterToTransform(me._gang_3_06.ggParameter);
		}
		this._map_3_spots.appendChild(this._gang_3_06);
		this._gang_3_16=document.createElement('div');
		this._gang_3_16.ggId="Gang_3_16";
		this._gang_3_16.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._gang_3_16.ggVisible=true;
		this._gang_3_16.className='ggskin ggskin_image';
		this._gang_3_16.ggType='image';
		hs ='position:absolute;';
		hs+='left: 540px;';
		hs+='top:  140px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_3_16.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._gang_3_16.setAttribute('style',hs);
		this._gang_3_16__img=document.createElement('img');
		this._gang_3_16__img.className='ggskin ggskin_image';
		this._gang_3_16__img.setAttribute('src',basePath + 'images/gang_3_16.png');
		this._gang_3_16__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_3_16__img.className='ggskin ggskin_image';
		this._gang_3_16__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_3_16__img);
		this._gang_3_16.appendChild(this._gang_3_16__img);
		this._gang_3_16.onclick=function () {
			me.player.openNext("Gang 3_16_out.xml","");
			me._current_selection3.style[domTransition]='none';
			me._current_selection3.ggParameter.rx=540;me._current_selection3.ggParameter.ry=140;
			me._current_selection3.style[domTransform]=parameterToTransform(me._current_selection3.ggParameter);
			me._orientierung3.style[domTransition]='none';
			me._orientierung3.ggParameter.rx=540;me._orientierung3.ggParameter.ry=140;
			me._orientierung3.style[domTransform]=parameterToTransform(me._orientierung3.ggParameter);
		}
		this._gang_3_16.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_3_16.style[domTransition]='none';
			} else {
				me._gang_3_16.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_3_16.ggParameter.sx=0.3;me._gang_3_16.ggParameter.sy=0.3;
			me._gang_3_16.style[domTransform]=parameterToTransform(me._gang_3_16.ggParameter);
		}
		this._gang_3_16.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_3_16.style[domTransition]='none';
			} else {
				me._gang_3_16.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_3_16.ggParameter.sx=0.2;me._gang_3_16.ggParameter.sy=0.2;
			me._gang_3_16.style[domTransform]=parameterToTransform(me._gang_3_16.ggParameter);
		}
		this._map_3_spots.appendChild(this._gang_3_16);
		this.__3_stairs_up=document.createElement('div');
		this.__3_stairs_up.ggId="3_stairs_up";
		this.__3_stairs_up.ggParameter={ rx:0,ry:0,a:0,sx:0.05,sy:0.05 };
		this.__3_stairs_up.ggVisible=false;
		this.__3_stairs_up.className='ggskin ggskin_image';
		this.__3_stairs_up.ggType='image';
		this.__3_stairs_up.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(66 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-113 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 66px;';
		hs+='top:  -113px;';
		hs+='width: 570px;';
		hs+='height: 599px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__3_stairs_up.ggParameter) + ';';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this.__3_stairs_up.setAttribute('style',hs);
		this.__3_stairs_up__img=document.createElement('img');
		this.__3_stairs_up__img.className='ggskin ggskin_image';
		this.__3_stairs_up__img.setAttribute('src',basePath + 'images/_3_stairs_up.png');
		this.__3_stairs_up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__3_stairs_up__img.className='ggskin ggskin_image';
		this.__3_stairs_up__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__3_stairs_up__img);
		this.__3_stairs_up.appendChild(this.__3_stairs_up__img);
		this.__3_stairs_up.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me.__3_stairs_up.style[domTransition]='none';
			} else {
				me.__3_stairs_up.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__3_stairs_up.ggParameter.sx=0.08;me.__3_stairs_up.ggParameter.sy=0.08;
			me.__3_stairs_up.style[domTransform]=parameterToTransform(me.__3_stairs_up.ggParameter);
		}
		this.__3_stairs_up.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me.__3_stairs_up.style[domTransition]='none';
			} else {
				me.__3_stairs_up.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__3_stairs_up.ggParameter.sx=0.05;me.__3_stairs_up.ggParameter.sy=0.05;
			me.__3_stairs_up.style[domTransform]=parameterToTransform(me.__3_stairs_up.ggParameter);
		}
		this._map_3_spots.appendChild(this.__3_stairs_up);
		this.__3_stairs_down=document.createElement('div');
		this.__3_stairs_down.ggId="3_stairs_down";
		this.__3_stairs_down.ggParameter={ rx:0,ry:0,a:0,sx:0.05,sy:0.05 };
		this.__3_stairs_down.ggVisible=true;
		this.__3_stairs_down.className='ggskin ggskin_image';
		this.__3_stairs_down.ggType='image';
		this.__3_stairs_down.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(333 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-104 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 333px;';
		hs+='top:  -104px;';
		hs+='width: 600px;';
		hs+='height: 569px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__3_stairs_down.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__3_stairs_down.setAttribute('style',hs);
		this.__3_stairs_down__img=document.createElement('img');
		this.__3_stairs_down__img.className='ggskin ggskin_image';
		this.__3_stairs_down__img.setAttribute('src',basePath + 'images/_3_stairs_down.png');
		this.__3_stairs_down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__3_stairs_down__img.className='ggskin ggskin_image';
		this.__3_stairs_down__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__3_stairs_down__img);
		this.__3_stairs_down.appendChild(this.__3_stairs_down__img);
		this.__3_stairs_down.onclick=function () {
			me._do_2.onclick();
		}
		this.__3_stairs_down.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me.__3_stairs_down.style[domTransition]='none';
			} else {
				me.__3_stairs_down.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__3_stairs_down.ggParameter.sx=0.08;me.__3_stairs_down.ggParameter.sy=0.08;
			me.__3_stairs_down.style[domTransform]=parameterToTransform(me.__3_stairs_down.ggParameter);
		}
		this.__3_stairs_down.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me.__3_stairs_down.style[domTransition]='none';
			} else {
				me.__3_stairs_down.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__3_stairs_down.ggParameter.sx=0.05;me.__3_stairs_down.ggParameter.sy=0.05;
			me.__3_stairs_down.style[domTransform]=parameterToTransform(me.__3_stairs_down.ggParameter);
		}
		this._map_3_spots.appendChild(this.__3_stairs_down);
		this._orientierung3=document.createElement('div');
		this._orientierung3.ggId="Orientierung3";
		this._orientierung3.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._orientierung3.ggVisible=true;
		this._orientierung3.className='ggskin ggskin_image';
		this._orientierung3.ggType='image';
		this._orientierung3.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._orientierung3.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._orientierung3.setAttribute('style',hs);
		this._orientierung3__img=document.createElement('img');
		this._orientierung3__img.className='ggskin ggskin_image';
		this._orientierung3__img.setAttribute('src',basePath + 'images/orientierung3.png');
		this._orientierung3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._orientierung3__img.className='ggskin ggskin_image';
		this._orientierung3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._orientierung3__img);
		this._orientierung3.appendChild(this._orientierung3__img);
		this._arrow4=document.createElement('div');
		this._arrow4.ggId="Arrow";
		this._arrow4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._arrow4.ggVisible=true;
		this._arrow4.className='ggskin ggskin_image';
		this._arrow4.ggType='image';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -100px;';
		hs+='width: 120px;';
		hs+='height: 120px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._arrow4.setAttribute('style',hs);
		this._arrow4__img=document.createElement('img');
		this._arrow4__img.className='ggskin ggskin_image';
		this._arrow4__img.setAttribute('src',basePath + 'images/arrow4.png');
		this._arrow4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._arrow4__img.className='ggskin ggskin_image';
		this._arrow4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._arrow4__img);
		this._arrow4.appendChild(this._arrow4__img);
		this._orientierung3.appendChild(this._arrow4);
		this._map_3_spots.appendChild(this._orientierung3);
		this._current_selection3=document.createElement('div');
		this._current_selection3.ggId="Current_Selection3";
		this._current_selection3.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
		this._current_selection3.ggVisible=true;
		this._current_selection3.className='ggskin ggskin_image';
		this._current_selection3.ggType='image';
		this._current_selection3.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(49 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(25 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 49px;';
		hs+='top:  25px;';
		hs+='width: 300px;';
		hs+='height: 400px;';
		hs+=cssPrefix + 'transform-origin: 0% 0%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._current_selection3.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._current_selection3.setAttribute('style',hs);
		this._current_selection3__img=document.createElement('img');
		this._current_selection3__img.className='ggskin ggskin_image';
		this._current_selection3__img.setAttribute('src',basePath + 'images/current_selection3.png');
		this._current_selection3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._current_selection3__img.className='ggskin ggskin_image';
		this._current_selection3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._current_selection3__img);
		this._current_selection3.appendChild(this._current_selection3__img);
		this._map_3_spots.appendChild(this._current_selection3);
		this._map_3.appendChild(this._map_3_spots);
		this._mapholder.appendChild(this._map_3);
		this._map_2=document.createElement('div');
		this._map_2.ggId="Map_2";
		this._map_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_2.ggVisible=true;
		this._map_2.className='ggskin ggskin_container';
		this._map_2.ggType='container';
		hs ='position:absolute;';
		hs+='left: 10px;';
		hs+='top:  -19px;';
		hs+='width: 1px;';
		hs+='height: 1px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._map_2.setAttribute('style',hs);
		this._map_20=document.createElement('div');
		this._map_20.ggId="Map_2";
		this._map_20.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_20.ggVisible=true;
		this._map_20.className='ggskin ggskin_image';
		this._map_20.ggType='image';
		hs ='position:absolute;';
		hs+='left: 80px;';
		hs+='top:  35px;';
		hs+='width: 924px;';
		hs+='height: 343px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._map_20.setAttribute('style',hs);
		this._map_20__img=document.createElement('img');
		this._map_20__img.className='ggskin ggskin_image';
		this._map_20__img.setAttribute('src',basePath + 'images/map_20.png');
		this._map_20__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._map_20__img.className='ggskin ggskin_image';
		this._map_20__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._map_20__img);
		this._map_20.appendChild(this._map_20__img);
		this._map_2.appendChild(this._map_20);
		this._map_2_spots=document.createElement('div');
		this._map_2_spots.ggId="Map_2_Spots";
		this._map_2_spots.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2 };
		this._map_2_spots.ggVisible=true;
		this._map_2_spots.className='ggskin ggskin_container';
		this._map_2_spots.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 1px;';
		hs+='height: 1px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._map_2_spots.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._map_2_spots.setAttribute('style',hs);
		this._room_2_14=document.createElement('div');
		this._room_2_14.ggId="Room_2_14";
		this._room_2_14.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._room_2_14.ggVisible=true;
		this._room_2_14.className='ggskin ggskin_image';
		this._room_2_14.ggType='image';
		hs ='position:absolute;';
		hs+='left: 720px;';
		hs+='top:  215px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_2_14.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._room_2_14.setAttribute('style',hs);
		this._room_2_14__img=document.createElement('img');
		this._room_2_14__img.className='ggskin ggskin_image';
		this._room_2_14__img.setAttribute('src',basePath + 'images/room_2_14.png');
		this._room_2_14__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_2_14__img.className='ggskin ggskin_image';
		this._room_2_14__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_2_14__img);
		this._room_2_14.appendChild(this._room_2_14__img);
		this._room_2_14.onclick=function () {
			me.player.openNext("2_14_out.xml","");
			me._current_selection2.style[domTransition]='none';
			me._current_selection2.ggParameter.rx=720;me._current_selection2.ggParameter.ry=215;
			me._current_selection2.style[domTransform]=parameterToTransform(me._current_selection2.ggParameter);
			me._orientierung2.style[domTransition]='none';
			me._orientierung2.ggParameter.rx=720;me._orientierung2.ggParameter.ry=215;
			me._orientierung2.style[domTransform]=parameterToTransform(me._orientierung2.ggParameter);
		}
		this._room_2_14.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_14.style[domTransition]='none';
			} else {
				me._room_2_14.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_14.ggParameter.sx=0.3;me._room_2_14.ggParameter.sy=0.3;
			me._room_2_14.style[domTransform]=parameterToTransform(me._room_2_14.ggParameter);
		}
		this._room_2_14.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_14.style[domTransition]='none';
			} else {
				me._room_2_14.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_14.ggParameter.sx=0.2;me._room_2_14.ggParameter.sy=0.2;
			me._room_2_14.style[domTransform]=parameterToTransform(me._room_2_14.ggParameter);
		}
		this._map_2_spots.appendChild(this._room_2_14);
		this._room_2_13=document.createElement('div');
		this._room_2_13.ggId="Room_2_13";
		this._room_2_13.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._room_2_13.ggVisible=true;
		this._room_2_13.className='ggskin ggskin_image';
		this._room_2_13.ggType='image';
		hs ='position:absolute;';
		hs+='left: 600px;';
		hs+='top:  217px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_2_13.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._room_2_13.setAttribute('style',hs);
		this._room_2_13__img=document.createElement('img');
		this._room_2_13__img.className='ggskin ggskin_image';
		this._room_2_13__img.setAttribute('src',basePath + 'images/room_2_13.png');
		this._room_2_13__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_2_13__img.className='ggskin ggskin_image';
		this._room_2_13__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_2_13__img);
		this._room_2_13.appendChild(this._room_2_13__img);
		this._room_2_13.onclick=function () {
			me.player.openNext("2_13_out.xml","");
			me._current_selection2.style[domTransition]='none';
			me._current_selection2.ggParameter.rx=600;me._current_selection2.ggParameter.ry=217;
			me._current_selection2.style[domTransform]=parameterToTransform(me._current_selection2.ggParameter);
			me._orientierung2.style[domTransition]='none';
			me._orientierung2.ggParameter.rx=600;me._orientierung2.ggParameter.ry=217;
			me._orientierung2.style[domTransform]=parameterToTransform(me._orientierung2.ggParameter);
		}
		this._room_2_13.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_13.style[domTransition]='none';
			} else {
				me._room_2_13.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_13.ggParameter.sx=0.3;me._room_2_13.ggParameter.sy=0.3;
			me._room_2_13.style[domTransform]=parameterToTransform(me._room_2_13.ggParameter);
		}
		this._room_2_13.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_13.style[domTransition]='none';
			} else {
				me._room_2_13.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_13.ggParameter.sx=0.2;me._room_2_13.ggParameter.sy=0.2;
			me._room_2_13.style[domTransform]=parameterToTransform(me._room_2_13.ggParameter);
		}
		this._map_2_spots.appendChild(this._room_2_13);
		this._room_2_11=document.createElement('div');
		this._room_2_11.ggId="Room_2_11";
		this._room_2_11.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._room_2_11.ggVisible=true;
		this._room_2_11.className='ggskin ggskin_image';
		this._room_2_11.ggType='image';
		hs ='position:absolute;';
		hs+='left: 392px;';
		hs+='top:  211px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_2_11.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._room_2_11.setAttribute('style',hs);
		this._room_2_11__img=document.createElement('img');
		this._room_2_11__img.className='ggskin ggskin_image';
		this._room_2_11__img.setAttribute('src',basePath + 'images/room_2_11.png');
		this._room_2_11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_2_11__img.className='ggskin ggskin_image';
		this._room_2_11__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_2_11__img);
		this._room_2_11.appendChild(this._room_2_11__img);
		this._room_2_11.onclick=function () {
			me.player.openNext("2_11_out.xml","");
			me._current_selection2.style[domTransition]='none';
			me._current_selection2.ggParameter.rx=392;me._current_selection2.ggParameter.ry=211;
			me._current_selection2.style[domTransform]=parameterToTransform(me._current_selection2.ggParameter);
			me._orientierung2.style[domTransition]='none';
			me._orientierung2.ggParameter.rx=392;me._orientierung2.ggParameter.ry=211;
			me._orientierung2.style[domTransform]=parameterToTransform(me._orientierung2.ggParameter);
		}
		this._room_2_11.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_11.style[domTransition]='none';
			} else {
				me._room_2_11.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_11.ggParameter.sx=0.3;me._room_2_11.ggParameter.sy=0.3;
			me._room_2_11.style[domTransform]=parameterToTransform(me._room_2_11.ggParameter);
		}
		this._room_2_11.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_11.style[domTransition]='none';
			} else {
				me._room_2_11.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_11.ggParameter.sx=0.2;me._room_2_11.ggParameter.sy=0.2;
			me._room_2_11.style[domTransform]=parameterToTransform(me._room_2_11.ggParameter);
		}
		this._map_2_spots.appendChild(this._room_2_11);
		this._room_2_08=document.createElement('div');
		this._room_2_08.ggId="Room_2_08";
		this._room_2_08.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._room_2_08.ggVisible=true;
		this._room_2_08.className='ggskin ggskin_image';
		this._room_2_08.ggType='image';
		hs ='position:absolute;';
		hs+='left: 162px;';
		hs+='top:  218px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_2_08.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._room_2_08.setAttribute('style',hs);
		this._room_2_08__img=document.createElement('img');
		this._room_2_08__img.className='ggskin ggskin_image';
		this._room_2_08__img.setAttribute('src',basePath + 'images/room_2_08.png');
		this._room_2_08__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_2_08__img.className='ggskin ggskin_image';
		this._room_2_08__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_2_08__img);
		this._room_2_08.appendChild(this._room_2_08__img);
		this._room_2_08.onclick=function () {
			me.player.openNext("2_08_out.xml","");
			me._current_selection2.style[domTransition]='none';
			me._current_selection2.ggParameter.rx=162;me._current_selection2.ggParameter.ry=218;
			me._current_selection2.style[domTransform]=parameterToTransform(me._current_selection2.ggParameter);
			me._orientierung2.style[domTransition]='none';
			me._orientierung2.ggParameter.rx=162;me._orientierung2.ggParameter.ry=218;
			me._orientierung2.style[domTransform]=parameterToTransform(me._orientierung2.ggParameter);
		}
		this._room_2_08.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_08.style[domTransition]='none';
			} else {
				me._room_2_08.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_08.ggParameter.sx=0.3;me._room_2_08.ggParameter.sy=0.3;
			me._room_2_08.style[domTransform]=parameterToTransform(me._room_2_08.ggParameter);
		}
		this._room_2_08.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_08.style[domTransition]='none';
			} else {
				me._room_2_08.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_08.ggParameter.sx=0.2;me._room_2_08.ggParameter.sy=0.2;
			me._room_2_08.style[domTransform]=parameterToTransform(me._room_2_08.ggParameter);
		}
		this._map_2_spots.appendChild(this._room_2_08);
		this._gang_2_06=document.createElement('div');
		this._gang_2_06.ggId="Gang_2_06";
		this._gang_2_06.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._gang_2_06.ggVisible=true;
		this._gang_2_06.className='ggskin ggskin_image';
		this._gang_2_06.ggType='image';
		hs ='position:absolute;';
		hs+='left: 147px;';
		hs+='top:  152px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_2_06.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._gang_2_06.setAttribute('style',hs);
		this._gang_2_06__img=document.createElement('img');
		this._gang_2_06__img.className='ggskin ggskin_image';
		this._gang_2_06__img.setAttribute('src',basePath + 'images/gang_2_06.png');
		this._gang_2_06__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_2_06__img.className='ggskin ggskin_image';
		this._gang_2_06__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_2_06__img);
		this._gang_2_06.appendChild(this._gang_2_06__img);
		this._gang_2_06.onclick=function () {
			me.player.openNext("Gang 2_06_out.xml","");
			me._current_selection2.style[domTransition]='none';
			me._current_selection2.ggParameter.rx=147;me._current_selection2.ggParameter.ry=152;
			me._current_selection2.style[domTransform]=parameterToTransform(me._current_selection2.ggParameter);
			me._orientierung2.style[domTransition]='none';
			me._orientierung2.ggParameter.rx=147;me._orientierung2.ggParameter.ry=152;
			me._orientierung2.style[domTransform]=parameterToTransform(me._orientierung2.ggParameter);
		}
		this._gang_2_06.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_2_06.style[domTransition]='none';
			} else {
				me._gang_2_06.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_2_06.ggParameter.sx=0.3;me._gang_2_06.ggParameter.sy=0.3;
			me._gang_2_06.style[domTransform]=parameterToTransform(me._gang_2_06.ggParameter);
		}
		this._gang_2_06.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_2_06.style[domTransition]='none';
			} else {
				me._gang_2_06.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_2_06.ggParameter.sx=0.2;me._gang_2_06.ggParameter.sy=0.2;
			me._gang_2_06.style[domTransform]=parameterToTransform(me._gang_2_06.ggParameter);
		}
		this._map_2_spots.appendChild(this._gang_2_06);
		this._gang_2_14=document.createElement('div');
		this._gang_2_14.ggId="Gang_2_14";
		this._gang_2_14.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._gang_2_14.ggVisible=true;
		this._gang_2_14.className='ggskin ggskin_image';
		this._gang_2_14.ggType='image';
		hs ='position:absolute;';
		hs+='left: 495px;';
		hs+='top:  155px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_2_14.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._gang_2_14.setAttribute('style',hs);
		this._gang_2_14__img=document.createElement('img');
		this._gang_2_14__img.className='ggskin ggskin_image';
		this._gang_2_14__img.setAttribute('src',basePath + 'images/gang_2_14.png');
		this._gang_2_14__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_2_14__img.className='ggskin ggskin_image';
		this._gang_2_14__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_2_14__img);
		this._gang_2_14.appendChild(this._gang_2_14__img);
		this._gang_2_14.onclick=function () {
			me.player.openNext("Gang 2_14_out.xml","");
			me._current_selection2.style[domTransition]='none';
			me._current_selection2.ggParameter.rx=495;me._current_selection2.ggParameter.ry=155;
			me._current_selection2.style[domTransform]=parameterToTransform(me._current_selection2.ggParameter);
			me._orientierung2.style[domTransition]='none';
			me._orientierung2.ggParameter.rx=495;me._orientierung2.ggParameter.ry=155;
			me._orientierung2.style[domTransform]=parameterToTransform(me._orientierung2.ggParameter);
		}
		this._gang_2_14.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_2_14.style[domTransition]='none';
			} else {
				me._gang_2_14.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_2_14.ggParameter.sx=0.3;me._gang_2_14.ggParameter.sy=0.3;
			me._gang_2_14.style[domTransform]=parameterToTransform(me._gang_2_14.ggParameter);
		}
		this._gang_2_14.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_2_14.style[domTransition]='none';
			} else {
				me._gang_2_14.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_2_14.ggParameter.sx=0.2;me._gang_2_14.ggParameter.sy=0.2;
			me._gang_2_14.style[domTransform]=parameterToTransform(me._gang_2_14.ggParameter);
		}
		this._map_2_spots.appendChild(this._gang_2_14);
		this._room_2_07=document.createElement('div');
		this._room_2_07.ggId="Room_2_07";
		this._room_2_07.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._room_2_07.ggVisible=true;
		this._room_2_07.className='ggskin ggskin_image';
		this._room_2_07.ggType='image';
		hs ='position:absolute;';
		hs+='left: 62px;';
		hs+='top:  215px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_2_07.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._room_2_07.setAttribute('style',hs);
		this._room_2_07__img=document.createElement('img');
		this._room_2_07__img.className='ggskin ggskin_image';
		this._room_2_07__img.setAttribute('src',basePath + 'images/room_2_07.png');
		this._room_2_07__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_2_07__img.className='ggskin ggskin_image';
		this._room_2_07__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_2_07__img);
		this._room_2_07.appendChild(this._room_2_07__img);
		this._room_2_07.onclick=function () {
			me.player.openNext("2_07_out.xml","");
			me._current_selection2.style[domTransition]='none';
			me._current_selection2.ggParameter.rx=62;me._current_selection2.ggParameter.ry=215;
			me._current_selection2.style[domTransform]=parameterToTransform(me._current_selection2.ggParameter);
			me._orientierung2.style[domTransition]='none';
			me._orientierung2.ggParameter.rx=62;me._orientierung2.ggParameter.ry=215;
			me._orientierung2.style[domTransform]=parameterToTransform(me._orientierung2.ggParameter);
		}
		this._room_2_07.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_07.style[domTransition]='none';
			} else {
				me._room_2_07.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_07.ggParameter.sx=0.3;me._room_2_07.ggParameter.sy=0.3;
			me._room_2_07.style[domTransform]=parameterToTransform(me._room_2_07.ggParameter);
		}
		this._room_2_07.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_2_07.style[domTransition]='none';
			} else {
				me._room_2_07.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_2_07.ggParameter.sx=0.2;me._room_2_07.ggParameter.sy=0.2;
			me._room_2_07.style[domTransform]=parameterToTransform(me._room_2_07.ggParameter);
		}
		this._map_2_spots.appendChild(this._room_2_07);
		this._gang_2_treppe=document.createElement('div');
		this._gang_2_treppe.ggId="Gang_2_Treppe";
		this._gang_2_treppe.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._gang_2_treppe.ggVisible=true;
		this._gang_2_treppe.className='ggskin ggskin_image';
		this._gang_2_treppe.ggType='image';
		hs ='position:absolute;';
		hs+='left: 291px;';
		hs+='top:  144px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_2_treppe.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._gang_2_treppe.setAttribute('style',hs);
		this._gang_2_treppe__img=document.createElement('img');
		this._gang_2_treppe__img.className='ggskin ggskin_image';
		this._gang_2_treppe__img.setAttribute('src',basePath + 'images/gang_2_treppe.png');
		this._gang_2_treppe__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_2_treppe__img.className='ggskin ggskin_image';
		this._gang_2_treppe__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_2_treppe__img);
		this._gang_2_treppe.appendChild(this._gang_2_treppe__img);
		this._gang_2_treppe.onclick=function () {
			me.player.openNext("Gang 2_Treppe_out.xml","");
			me._current_selection2.style[domTransition]='none';
			me._current_selection2.ggParameter.rx=291;me._current_selection2.ggParameter.ry=144;
			me._current_selection2.style[domTransform]=parameterToTransform(me._current_selection2.ggParameter);
			me._orientierung2.style[domTransition]='none';
			me._orientierung2.ggParameter.rx=291;me._orientierung2.ggParameter.ry=144;
			me._orientierung2.style[domTransform]=parameterToTransform(me._orientierung2.ggParameter);
		}
		this._gang_2_treppe.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_2_treppe.style[domTransition]='none';
			} else {
				me._gang_2_treppe.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_2_treppe.ggParameter.sx=0.3;me._gang_2_treppe.ggParameter.sy=0.3;
			me._gang_2_treppe.style[domTransform]=parameterToTransform(me._gang_2_treppe.ggParameter);
		}
		this._gang_2_treppe.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_2_treppe.style[domTransition]='none';
			} else {
				me._gang_2_treppe.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_2_treppe.ggParameter.sx=0.2;me._gang_2_treppe.ggParameter.sy=0.2;
			me._gang_2_treppe.style[domTransform]=parameterToTransform(me._gang_2_treppe.ggParameter);
		}
		this._map_2_spots.appendChild(this._gang_2_treppe);
		this.__2_stairs_down=document.createElement('div');
		this.__2_stairs_down.ggId="2_stairs_down";
		this.__2_stairs_down.ggParameter={ rx:0,ry:0,a:0,sx:0.05,sy:0.05 };
		this.__2_stairs_down.ggVisible=true;
		this.__2_stairs_down.className='ggskin ggskin_image';
		this.__2_stairs_down.ggType='image';
		this.__2_stairs_down.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(393 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-91 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 393px;';
		hs+='top:  -91px;';
		hs+='width: 600px;';
		hs+='height: 569px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__2_stairs_down.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__2_stairs_down.setAttribute('style',hs);
		this.__2_stairs_down__img=document.createElement('img');
		this.__2_stairs_down__img.className='ggskin ggskin_image';
		this.__2_stairs_down__img.setAttribute('src',basePath + 'images/_2_stairs_down.png');
		this.__2_stairs_down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__2_stairs_down__img.className='ggskin ggskin_image';
		this.__2_stairs_down__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__2_stairs_down__img);
		this.__2_stairs_down.appendChild(this.__2_stairs_down__img);
		this.__2_stairs_down.onclick=function () {
			me._do_1.onclick();
		}
		this.__2_stairs_down.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me.__2_stairs_down.style[domTransition]='none';
			} else {
				me.__2_stairs_down.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__2_stairs_down.ggParameter.sx=0.08;me.__2_stairs_down.ggParameter.sy=0.08;
			me.__2_stairs_down.style[domTransform]=parameterToTransform(me.__2_stairs_down.ggParameter);
		}
		this.__2_stairs_down.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me.__2_stairs_down.style[domTransition]='none';
			} else {
				me.__2_stairs_down.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__2_stairs_down.ggParameter.sx=0.05;me.__2_stairs_down.ggParameter.sy=0.05;
			me.__2_stairs_down.style[domTransform]=parameterToTransform(me.__2_stairs_down.ggParameter);
		}
		this._map_2_spots.appendChild(this.__2_stairs_down);
		this.__2_stairs_up=document.createElement('div');
		this.__2_stairs_up.ggId="2_stairs_up";
		this.__2_stairs_up.ggParameter={ rx:0,ry:0,a:0,sx:0.05,sy:0.05 };
		this.__2_stairs_up.ggVisible=true;
		this.__2_stairs_up.className='ggskin ggskin_image';
		this.__2_stairs_up.ggType='image';
		this.__2_stairs_up.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(111 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-97 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 111px;';
		hs+='top:  -97px;';
		hs+='width: 570px;';
		hs+='height: 599px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__2_stairs_up.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__2_stairs_up.setAttribute('style',hs);
		this.__2_stairs_up__img=document.createElement('img');
		this.__2_stairs_up__img.className='ggskin ggskin_image';
		this.__2_stairs_up__img.setAttribute('src',basePath + 'images/_2_stairs_up.png');
		this.__2_stairs_up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__2_stairs_up__img.className='ggskin ggskin_image';
		this.__2_stairs_up__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__2_stairs_up__img);
		this.__2_stairs_up.appendChild(this.__2_stairs_up__img);
		this.__2_stairs_up.onclick=function () {
			me._up_3.onclick();
		}
		this.__2_stairs_up.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me.__2_stairs_up.style[domTransition]='none';
			} else {
				me.__2_stairs_up.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__2_stairs_up.ggParameter.sx=0.08;me.__2_stairs_up.ggParameter.sy=0.08;
			me.__2_stairs_up.style[domTransform]=parameterToTransform(me.__2_stairs_up.ggParameter);
		}
		this.__2_stairs_up.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me.__2_stairs_up.style[domTransition]='none';
			} else {
				me.__2_stairs_up.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__2_stairs_up.ggParameter.sx=0.05;me.__2_stairs_up.ggParameter.sy=0.05;
			me.__2_stairs_up.style[domTransform]=parameterToTransform(me.__2_stairs_up.ggParameter);
		}
		this._map_2_spots.appendChild(this.__2_stairs_up);
		this._orientierung2=document.createElement('div');
		this._orientierung2.ggId="Orientierung2";
		this._orientierung2.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._orientierung2.ggVisible=true;
		this._orientierung2.className='ggskin ggskin_image';
		this._orientierung2.ggType='image';
		this._orientierung2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._orientierung2.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._orientierung2.setAttribute('style',hs);
		this._orientierung2__img=document.createElement('img');
		this._orientierung2__img.className='ggskin ggskin_image';
		this._orientierung2__img.setAttribute('src',basePath + 'images/orientierung2.png');
		this._orientierung2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._orientierung2__img.className='ggskin ggskin_image';
		this._orientierung2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._orientierung2__img);
		this._orientierung2.appendChild(this._orientierung2__img);
		this._arrow3=document.createElement('div');
		this._arrow3.ggId="Arrow";
		this._arrow3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._arrow3.ggVisible=true;
		this._arrow3.className='ggskin ggskin_image';
		this._arrow3.ggType='image';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -100px;';
		hs+='width: 120px;';
		hs+='height: 120px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._arrow3.setAttribute('style',hs);
		this._arrow3__img=document.createElement('img');
		this._arrow3__img.className='ggskin ggskin_image';
		this._arrow3__img.setAttribute('src',basePath + 'images/arrow3.png');
		this._arrow3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._arrow3__img.className='ggskin ggskin_image';
		this._arrow3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._arrow3__img);
		this._arrow3.appendChild(this._arrow3__img);
		this._orientierung2.appendChild(this._arrow3);
		this._map_2_spots.appendChild(this._orientierung2);
		this._current_selection2=document.createElement('div');
		this._current_selection2.ggId="Current_Selection2";
		this._current_selection2.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
		this._current_selection2.ggVisible=true;
		this._current_selection2.className='ggskin ggskin_image';
		this._current_selection2.ggType='image';
		this._current_selection2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-86 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-155 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -86px;';
		hs+='top:  -155px;';
		hs+='width: 300px;';
		hs+='height: 400px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._current_selection2.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._current_selection2.setAttribute('style',hs);
		this._current_selection2__img=document.createElement('img');
		this._current_selection2__img.className='ggskin ggskin_image';
		this._current_selection2__img.setAttribute('src',basePath + 'images/current_selection2.png');
		this._current_selection2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._current_selection2__img.className='ggskin ggskin_image';
		this._current_selection2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._current_selection2__img);
		this._current_selection2.appendChild(this._current_selection2__img);
		this._map_2_spots.appendChild(this._current_selection2);
		this._map_2.appendChild(this._map_2_spots);
		this._mapholder.appendChild(this._map_2);
		this._map_1=document.createElement('div');
		this._map_1.ggId="Map_1";
		this._map_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_1.ggVisible=true;
		this._map_1.className='ggskin ggskin_container';
		this._map_1.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  1px;';
		hs+='width: 1px;';
		hs+='height: 1px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._map_1.setAttribute('style',hs);
		this._map_1_map=document.createElement('div');
		this._map_1_map.ggId="Map_1_Map";
		this._map_1_map.ggParameter={ rx:0,ry:0,a:0,sx:0.62,sy:0.62 };
		this._map_1_map.ggVisible=true;
		this._map_1_map.className='ggskin ggskin_image';
		this._map_1_map.ggType='image';
		hs ='position:absolute;';
		hs+='left: -80px;';
		hs+='top:  -135px;';
		hs+='width: 1019px;';
		hs+='height: 770px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._map_1_map.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._map_1_map.setAttribute('style',hs);
		this._map_1_map__img=document.createElement('img');
		this._map_1_map__img.className='ggskin ggskin_image';
		this._map_1_map__img.setAttribute('src',basePath + 'images/map_1_map.png');
		this._map_1_map__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._map_1_map__img.className='ggskin ggskin_image';
		this._map_1_map__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._map_1_map__img);
		this._map_1_map.appendChild(this._map_1_map__img);
		this._map_1.appendChild(this._map_1_map);
		this._map_1_spots0=document.createElement('div');
		this._map_1_spots0.ggId="Map_1_Spots";
		this._map_1_spots0.ggParameter={ rx:0,ry:0,a:0,sx:0.94,sy:0.94 };
		this._map_1_spots0.ggVisible=true;
		this._map_1_spots0.className='ggskin ggskin_container';
		this._map_1_spots0.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 1px;';
		hs+='height: 1px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._map_1_spots0.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._map_1_spots0.setAttribute('style',hs);
		this._gang_1_24=document.createElement('div');
		this._gang_1_24.ggId="Gang_1_24";
		this._gang_1_24.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._gang_1_24.ggVisible=true;
		this._gang_1_24.className='ggskin ggskin_image';
		this._gang_1_24.ggType='image';
		hs ='position:absolute;';
		hs+='left: 514px;';
		hs+='top:  161px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_1_24.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._gang_1_24.setAttribute('style',hs);
		this._gang_1_24__img=document.createElement('img');
		this._gang_1_24__img.className='ggskin ggskin_image';
		this._gang_1_24__img.setAttribute('src',basePath + 'images/gang_1_24.png');
		this._gang_1_24__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_1_24__img.className='ggskin ggskin_image';
		this._gang_1_24__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_1_24__img);
		this._gang_1_24.appendChild(this._gang_1_24__img);
		this._gang_1_24.onclick=function () {
			me.player.openNext("Gang 1_24_out.xml","");
			me._current_selection1.style[domTransition]='none';
			me._current_selection1.ggParameter.rx=514;me._current_selection1.ggParameter.ry=161;
			me._current_selection1.style[domTransform]=parameterToTransform(me._current_selection1.ggParameter);
			me._orientierung1.style[domTransition]='none';
			me._orientierung1.ggParameter.rx=514;me._orientierung1.ggParameter.ry=161;
			me._orientierung1.style[domTransform]=parameterToTransform(me._orientierung1.ggParameter);
		}
		this._gang_1_24.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_1_24.style[domTransition]='none';
			} else {
				me._gang_1_24.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_1_24.ggParameter.sx=0.3;me._gang_1_24.ggParameter.sy=0.3;
			me._gang_1_24.style[domTransform]=parameterToTransform(me._gang_1_24.ggParameter);
		}
		this._gang_1_24.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_1_24.style[domTransition]='none';
			} else {
				me._gang_1_24.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_1_24.ggParameter.sx=0.2;me._gang_1_24.ggParameter.sy=0.2;
			me._gang_1_24.style[domTransform]=parameterToTransform(me._gang_1_24.ggParameter);
		}
		this._map_1_spots0.appendChild(this._gang_1_24);
		this._bibliothek=document.createElement('div');
		this._bibliothek.ggId="Bibliothek";
		this._bibliothek.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._bibliothek.ggVisible=true;
		this._bibliothek.className='ggskin ggskin_image';
		this._bibliothek.ggType='image';
		hs ='position:absolute;';
		hs+='left: 336px;';
		hs+='top:  220px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._bibliothek.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._bibliothek.setAttribute('style',hs);
		this._bibliothek__img=document.createElement('img');
		this._bibliothek__img.className='ggskin ggskin_image';
		this._bibliothek__img.setAttribute('src',basePath + 'images/bibliothek.png');
		this._bibliothek__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._bibliothek__img.className='ggskin ggskin_image';
		this._bibliothek__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._bibliothek__img);
		this._bibliothek.appendChild(this._bibliothek__img);
		this._bibliothek.onclick=function () {
			me.player.openNext("Bibliothek_out.xml","");
			me._current_selection1.style[domTransition]='none';
			me._current_selection1.ggParameter.rx=336;me._current_selection1.ggParameter.ry=220;
			me._current_selection1.style[domTransform]=parameterToTransform(me._current_selection1.ggParameter);
			me._orientierung1.style[domTransition]='none';
			me._orientierung1.ggParameter.rx=336;me._orientierung1.ggParameter.ry=220;
			me._orientierung1.style[domTransform]=parameterToTransform(me._orientierung1.ggParameter);
		}
		this._bibliothek.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._bibliothek.style[domTransition]='none';
			} else {
				me._bibliothek.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._bibliothek.ggParameter.sx=0.3;me._bibliothek.ggParameter.sy=0.3;
			me._bibliothek.style[domTransform]=parameterToTransform(me._bibliothek.ggParameter);
		}
		this._bibliothek.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._bibliothek.style[domTransition]='none';
			} else {
				me._bibliothek.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._bibliothek.ggParameter.sx=0.2;me._bibliothek.ggParameter.sy=0.2;
			me._bibliothek.style[domTransform]=parameterToTransform(me._bibliothek.ggParameter);
		}
		this._map_1_spots0.appendChild(this._bibliothek);
		this._gang_1_treppe=document.createElement('div');
		this._gang_1_treppe.ggId="Gang_1_Treppe";
		this._gang_1_treppe.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._gang_1_treppe.ggVisible=true;
		this._gang_1_treppe.className='ggskin ggskin_image';
		this._gang_1_treppe.ggType='image';
		hs ='position:absolute;';
		hs+='left: 426px;';
		hs+='top:  119px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_1_treppe.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._gang_1_treppe.setAttribute('style',hs);
		this._gang_1_treppe__img=document.createElement('img');
		this._gang_1_treppe__img.className='ggskin ggskin_image';
		this._gang_1_treppe__img.setAttribute('src',basePath + 'images/gang_1_treppe.png');
		this._gang_1_treppe__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_1_treppe__img.className='ggskin ggskin_image';
		this._gang_1_treppe__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_1_treppe__img);
		this._gang_1_treppe.appendChild(this._gang_1_treppe__img);
		this._gang_1_treppe.onclick=function () {
			me.player.openNext("Gang 1_Treppe_out.xml","");
			me._current_selection1.style[domTransition]='none';
			me._current_selection1.ggParameter.rx=426;me._current_selection1.ggParameter.ry=119;
			me._current_selection1.style[domTransform]=parameterToTransform(me._current_selection1.ggParameter);
			me._orientierung1.style[domTransition]='none';
			me._orientierung1.ggParameter.rx=426;me._orientierung1.ggParameter.ry=119;
			me._orientierung1.style[domTransform]=parameterToTransform(me._orientierung1.ggParameter);
		}
		this._gang_1_treppe.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_1_treppe.style[domTransition]='none';
			} else {
				me._gang_1_treppe.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_1_treppe.ggParameter.sx=0.3;me._gang_1_treppe.ggParameter.sy=0.3;
			me._gang_1_treppe.style[domTransform]=parameterToTransform(me._gang_1_treppe.ggParameter);
		}
		this._gang_1_treppe.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_1_treppe.style[domTransition]='none';
			} else {
				me._gang_1_treppe.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_1_treppe.ggParameter.sx=0.2;me._gang_1_treppe.ggParameter.sy=0.2;
			me._gang_1_treppe.style[domTransform]=parameterToTransform(me._gang_1_treppe.ggParameter);
		}
		this._map_1_spots0.appendChild(this._gang_1_treppe);
		this._room_1_08=document.createElement('div');
		this._room_1_08.ggId="Room_1_08";
		this._room_1_08.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._room_1_08.ggVisible=true;
		this._room_1_08.className='ggskin ggskin_image';
		this._room_1_08.ggType='image';
		hs ='position:absolute;';
		hs+='left: 166px;';
		hs+='top:  328px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_1_08.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._room_1_08.setAttribute('style',hs);
		this._room_1_08__img=document.createElement('img');
		this._room_1_08__img.className='ggskin ggskin_image';
		this._room_1_08__img.setAttribute('src',basePath + 'images/room_1_08.png');
		this._room_1_08__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_1_08__img.className='ggskin ggskin_image';
		this._room_1_08__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_1_08__img);
		this._room_1_08.appendChild(this._room_1_08__img);
		this._room_1_08.onclick=function () {
			me.player.openNext("1_08_out.xml","");
			me._current_selection1.style[domTransition]='none';
			me._current_selection1.ggParameter.rx=166;me._current_selection1.ggParameter.ry=328;
			me._current_selection1.style[domTransform]=parameterToTransform(me._current_selection1.ggParameter);
			me._orientierung1.style[domTransition]='none';
			me._orientierung1.ggParameter.rx=166;me._orientierung1.ggParameter.ry=328;
			me._orientierung1.style[domTransform]=parameterToTransform(me._orientierung1.ggParameter);
		}
		this._room_1_08.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_1_08.style[domTransition]='none';
			} else {
				me._room_1_08.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_1_08.ggParameter.sx=0.3;me._room_1_08.ggParameter.sy=0.3;
			me._room_1_08.style[domTransform]=parameterToTransform(me._room_1_08.ggParameter);
		}
		this._room_1_08.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_1_08.style[domTransition]='none';
			} else {
				me._room_1_08.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_1_08.ggParameter.sx=0.2;me._room_1_08.ggParameter.sy=0.2;
			me._room_1_08.style[domTransform]=parameterToTransform(me._room_1_08.ggParameter);
		}
		this._map_1_spots0.appendChild(this._room_1_08);
		this._room_1_28=document.createElement('div');
		this._room_1_28.ggId="Room_1_28";
		this._room_1_28.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._room_1_28.ggVisible=true;
		this._room_1_28.className='ggskin ggskin_image';
		this._room_1_28.ggType='image';
		hs ='position:absolute;';
		hs+='left: 623px;';
		hs+='top:  202px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_1_28.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._room_1_28.setAttribute('style',hs);
		this._room_1_28__img=document.createElement('img');
		this._room_1_28__img.className='ggskin ggskin_image';
		this._room_1_28__img.setAttribute('src',basePath + 'images/room_1_28.png');
		this._room_1_28__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_1_28__img.className='ggskin ggskin_image';
		this._room_1_28__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_1_28__img);
		this._room_1_28.appendChild(this._room_1_28__img);
		this._room_1_28.onclick=function () {
			me.player.openNext("1_28_out.xml","");
			me._current_selection1.style[domTransition]='none';
			me._current_selection1.ggParameter.rx=623;me._current_selection1.ggParameter.ry=202;
			me._current_selection1.style[domTransform]=parameterToTransform(me._current_selection1.ggParameter);
			me._orientierung1.style[domTransition]='none';
			me._orientierung1.ggParameter.rx=623;me._orientierung1.ggParameter.ry=202;
			me._orientierung1.style[domTransform]=parameterToTransform(me._orientierung1.ggParameter);
		}
		this._room_1_28.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_1_28.style[domTransition]='none';
			} else {
				me._room_1_28.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_1_28.ggParameter.sx=0.3;me._room_1_28.ggParameter.sy=0.3;
			me._room_1_28.style[domTransform]=parameterToTransform(me._room_1_28.ggParameter);
		}
		this._room_1_28.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_1_28.style[domTransition]='none';
			} else {
				me._room_1_28.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_1_28.ggParameter.sx=0.2;me._room_1_28.ggParameter.sy=0.2;
			me._room_1_28.style[domTransform]=parameterToTransform(me._room_1_28.ggParameter);
		}
		this._map_1_spots0.appendChild(this._room_1_28);
		this._room_1_31=document.createElement('div');
		this._room_1_31.ggId="Room_1_31";
		this._room_1_31.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._room_1_31.ggVisible=true;
		this._room_1_31.className='ggskin ggskin_image';
		this._room_1_31.ggType='image';
		hs ='position:absolute;';
		hs+='left: 695px;';
		hs+='top:  157px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_1_31.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._room_1_31.setAttribute('style',hs);
		this._room_1_31__img=document.createElement('img');
		this._room_1_31__img.className='ggskin ggskin_image';
		this._room_1_31__img.setAttribute('src',basePath + 'images/room_1_31.png');
		this._room_1_31__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_1_31__img.className='ggskin ggskin_image';
		this._room_1_31__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_1_31__img);
		this._room_1_31.appendChild(this._room_1_31__img);
		this._room_1_31.onclick=function () {
			me._current_selection1.style[domTransition]='none';
			me._current_selection1.ggParameter.rx=695;me._current_selection1.ggParameter.ry=157;
			me._current_selection1.style[domTransform]=parameterToTransform(me._current_selection1.ggParameter);
			me._orientierung1.style[domTransition]='none';
			me._orientierung1.ggParameter.rx=695;me._orientierung1.ggParameter.ry=157;
			me._orientierung1.style[domTransform]=parameterToTransform(me._orientierung1.ggParameter);
		}
		this._room_1_31.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_1_31.style[domTransition]='none';
			} else {
				me._room_1_31.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_1_31.ggParameter.sx=0.3;me._room_1_31.ggParameter.sy=0.3;
			me._room_1_31.style[domTransform]=parameterToTransform(me._room_1_31.ggParameter);
		}
		this._room_1_31.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_1_31.style[domTransition]='none';
			} else {
				me._room_1_31.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_1_31.ggParameter.sx=0.2;me._room_1_31.ggParameter.sy=0.2;
			me._room_1_31.style[domTransform]=parameterToTransform(me._room_1_31.ggParameter);
		}
		this._map_1_spots0.appendChild(this._room_1_31);
		this._gang_1_25=document.createElement('div');
		this._gang_1_25.ggId="Gang_1_25";
		this._gang_1_25.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._gang_1_25.ggVisible=true;
		this._gang_1_25.className='ggskin ggskin_image';
		this._gang_1_25.ggType='image';
		hs ='position:absolute;';
		hs+='left: 353px;';
		hs+='top:  155px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_1_25.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._gang_1_25.setAttribute('style',hs);
		this._gang_1_25__img=document.createElement('img');
		this._gang_1_25__img.className='ggskin ggskin_image';
		this._gang_1_25__img.setAttribute('src',basePath + 'images/gang_1_25.png');
		this._gang_1_25__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_1_25__img.className='ggskin ggskin_image';
		this._gang_1_25__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_1_25__img);
		this._gang_1_25.appendChild(this._gang_1_25__img);
		this._gang_1_25.onclick=function () {
			me._current_selection1.style[domTransition]='none';
			me._current_selection1.ggParameter.rx=353;me._current_selection1.ggParameter.ry=155;
			me._current_selection1.style[domTransform]=parameterToTransform(me._current_selection1.ggParameter);
			me._orientierung1.style[domTransition]='none';
			me._orientierung1.ggParameter.rx=353;me._orientierung1.ggParameter.ry=155;
			me._orientierung1.style[domTransform]=parameterToTransform(me._orientierung1.ggParameter);
			me.player.openNext("Gang 1_25_out.xml","");
		}
		this._gang_1_25.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_1_25.style[domTransition]='none';
			} else {
				me._gang_1_25.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_1_25.ggParameter.sx=0.3;me._gang_1_25.ggParameter.sy=0.3;
			me._gang_1_25.style[domTransform]=parameterToTransform(me._gang_1_25.ggParameter);
		}
		this._gang_1_25.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_1_25.style[domTransition]='none';
			} else {
				me._gang_1_25.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_1_25.ggParameter.sx=0.2;me._gang_1_25.ggParameter.sy=0.2;
			me._gang_1_25.style[domTransform]=parameterToTransform(me._gang_1_25.ggParameter);
		}
		this._map_1_spots0.appendChild(this._gang_1_25);
		this._gang_1_15=document.createElement('div');
		this._gang_1_15.ggId="Gang_1_15";
		this._gang_1_15.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._gang_1_15.ggVisible=true;
		this._gang_1_15.className='ggskin ggskin_image';
		this._gang_1_15.ggType='image';
		hs ='position:absolute;';
		hs+='left: 209px;';
		hs+='top:  170px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_1_15.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._gang_1_15.setAttribute('style',hs);
		this._gang_1_15__img=document.createElement('img');
		this._gang_1_15__img.className='ggskin ggskin_image';
		this._gang_1_15__img.setAttribute('src',basePath + 'images/gang_1_15.png');
		this._gang_1_15__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_1_15__img.className='ggskin ggskin_image';
		this._gang_1_15__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_1_15__img);
		this._gang_1_15.appendChild(this._gang_1_15__img);
		this._gang_1_15.onclick=function () {
			me.player.openNext("Gang 1_15_out.xml","");
			me._current_selection1.style[domTransition]='none';
			me._current_selection1.ggParameter.rx=209;me._current_selection1.ggParameter.ry=170;
			me._current_selection1.style[domTransform]=parameterToTransform(me._current_selection1.ggParameter);
			me._orientierung1.style[domTransition]='none';
			me._orientierung1.ggParameter.rx=209;me._orientierung1.ggParameter.ry=170;
			me._orientierung1.style[domTransform]=parameterToTransform(me._orientierung1.ggParameter);
		}
		this._gang_1_15.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_1_15.style[domTransition]='none';
			} else {
				me._gang_1_15.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_1_15.ggParameter.sx=0.3;me._gang_1_15.ggParameter.sy=0.3;
			me._gang_1_15.style[domTransform]=parameterToTransform(me._gang_1_15.ggParameter);
		}
		this._gang_1_15.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_1_15.style[domTransition]='none';
			} else {
				me._gang_1_15.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_1_15.ggParameter.sx=0.2;me._gang_1_15.ggParameter.sy=0.2;
			me._gang_1_15.style[domTransform]=parameterToTransform(me._gang_1_15.ggParameter);
		}
		this._map_1_spots0.appendChild(this._gang_1_15);
		this._gang_1_48=document.createElement('div');
		this._gang_1_48.ggId="Gang_1_48";
		this._gang_1_48.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._gang_1_48.ggVisible=true;
		this._gang_1_48.className='ggskin ggskin_image';
		this._gang_1_48.ggType='image';
		hs ='position:absolute;';
		hs+='left: 205px;';
		hs+='top:  68px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_1_48.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._gang_1_48.setAttribute('style',hs);
		this._gang_1_48__img=document.createElement('img');
		this._gang_1_48__img.className='ggskin ggskin_image';
		this._gang_1_48__img.setAttribute('src',basePath + 'images/gang_1_48.png');
		this._gang_1_48__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_1_48__img.className='ggskin ggskin_image';
		this._gang_1_48__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_1_48__img);
		this._gang_1_48.appendChild(this._gang_1_48__img);
		this._gang_1_48.onclick=function () {
			me.player.openNext("Gang 1_48_out.xml","");
			me._current_selection1.style[domTransition]='none';
			me._current_selection1.ggParameter.rx=205;me._current_selection1.ggParameter.ry=68;
			me._current_selection1.style[domTransform]=parameterToTransform(me._current_selection1.ggParameter);
			me._orientierung1.style[domTransition]='none';
			me._orientierung1.ggParameter.rx=205;me._orientierung1.ggParameter.ry=68;
			me._orientierung1.style[domTransform]=parameterToTransform(me._orientierung1.ggParameter);
		}
		this._gang_1_48.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_1_48.style[domTransition]='none';
			} else {
				me._gang_1_48.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_1_48.ggParameter.sx=0.3;me._gang_1_48.ggParameter.sy=0.3;
			me._gang_1_48.style[domTransform]=parameterToTransform(me._gang_1_48.ggParameter);
		}
		this._gang_1_48.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_1_48.style[domTransition]='none';
			} else {
				me._gang_1_48.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_1_48.ggParameter.sx=0.2;me._gang_1_48.ggParameter.sy=0.2;
			me._gang_1_48.style[domTransform]=parameterToTransform(me._gang_1_48.ggParameter);
		}
		this._map_1_spots0.appendChild(this._gang_1_48);
		this._gang_1_d=document.createElement('div');
		this._gang_1_d.ggId="Gang_1_D";
		this._gang_1_d.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._gang_1_d.ggVisible=true;
		this._gang_1_d.className='ggskin ggskin_image';
		this._gang_1_d.ggType='image';
		hs ='position:absolute;';
		hs+='left: 432px;';
		hs+='top:  -2px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_1_d.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._gang_1_d.setAttribute('style',hs);
		this._gang_1_d__img=document.createElement('img');
		this._gang_1_d__img.className='ggskin ggskin_image';
		this._gang_1_d__img.setAttribute('src',basePath + 'images/gang_1_d.png');
		this._gang_1_d__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_1_d__img.className='ggskin ggskin_image';
		this._gang_1_d__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_1_d__img);
		this._gang_1_d.appendChild(this._gang_1_d__img);
		this._gang_1_d.onclick=function () {
			me.player.openNext("Gang 1_D_out.xml","");
			me._current_selection1.style[domTransition]='none';
			me._current_selection1.ggParameter.rx=432;me._current_selection1.ggParameter.ry=-2;
			me._current_selection1.style[domTransform]=parameterToTransform(me._current_selection1.ggParameter);
			me._orientierung1.style[domTransition]='none';
			me._orientierung1.ggParameter.rx=432;me._orientierung1.ggParameter.ry=-2;
			me._orientierung1.style[domTransform]=parameterToTransform(me._orientierung1.ggParameter);
		}
		this._gang_1_d.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_1_d.style[domTransition]='none';
			} else {
				me._gang_1_d.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_1_d.ggParameter.sx=0.3;me._gang_1_d.ggParameter.sy=0.3;
			me._gang_1_d.style[domTransform]=parameterToTransform(me._gang_1_d.ggParameter);
		}
		this._gang_1_d.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_1_d.style[domTransition]='none';
			} else {
				me._gang_1_d.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_1_d.ggParameter.sx=0.2;me._gang_1_d.ggParameter.sy=0.2;
			me._gang_1_d.style[domTransform]=parameterToTransform(me._gang_1_d.ggParameter);
		}
		this._map_1_spots0.appendChild(this._gang_1_d);
		this.__1_stairs_up=document.createElement('div');
		this.__1_stairs_up.ggId="1_stairs_up";
		this.__1_stairs_up.ggParameter={ rx:0,ry:0,a:0,sx:0.05,sy:0.05 };
		this.__1_stairs_up.ggVisible=true;
		this.__1_stairs_up.className='ggskin ggskin_image';
		this.__1_stairs_up.ggType='image';
		this.__1_stairs_up.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-118 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 180px;';
		hs+='top:  -118px;';
		hs+='width: 570px;';
		hs+='height: 599px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__1_stairs_up.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__1_stairs_up.setAttribute('style',hs);
		this.__1_stairs_up__img=document.createElement('img');
		this.__1_stairs_up__img.className='ggskin ggskin_image';
		this.__1_stairs_up__img.setAttribute('src',basePath + 'images/_1_stairs_up.png');
		this.__1_stairs_up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__1_stairs_up__img.className='ggskin ggskin_image';
		this.__1_stairs_up__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__1_stairs_up__img);
		this.__1_stairs_up.appendChild(this.__1_stairs_up__img);
		this.__1_stairs_up.onclick=function () {
			me._up_2.onclick();
		}
		this.__1_stairs_up.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me.__1_stairs_up.style[domTransition]='none';
			} else {
				me.__1_stairs_up.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__1_stairs_up.ggParameter.sx=0.08;me.__1_stairs_up.ggParameter.sy=0.08;
			me.__1_stairs_up.style[domTransform]=parameterToTransform(me.__1_stairs_up.ggParameter);
		}
		this.__1_stairs_up.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me.__1_stairs_up.style[domTransition]='none';
			} else {
				me.__1_stairs_up.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__1_stairs_up.ggParameter.sx=0.05;me.__1_stairs_up.ggParameter.sy=0.05;
			me.__1_stairs_up.style[domTransform]=parameterToTransform(me.__1_stairs_up.ggParameter);
		}
		this._map_1_spots0.appendChild(this.__1_stairs_up);
		this.__1_stairs_down=document.createElement('div');
		this.__1_stairs_down.ggId="1_stairs_down";
		this.__1_stairs_down.ggParameter={ rx:0,ry:0,a:0,sx:0.05,sy:0.05 };
		this.__1_stairs_down.ggVisible=true;
		this.__1_stairs_down.className='ggskin ggskin_image';
		this.__1_stairs_down.ggType='image';
		this.__1_stairs_down.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(370 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-74 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 370px;';
		hs+='top:  -74px;';
		hs+='width: 600px;';
		hs+='height: 569px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__1_stairs_down.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__1_stairs_down.setAttribute('style',hs);
		this.__1_stairs_down__img=document.createElement('img');
		this.__1_stairs_down__img.className='ggskin ggskin_image';
		this.__1_stairs_down__img.setAttribute('src',basePath + 'images/_1_stairs_down.png');
		this.__1_stairs_down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__1_stairs_down__img.className='ggskin ggskin_image';
		this.__1_stairs_down__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__1_stairs_down__img);
		this.__1_stairs_down.appendChild(this.__1_stairs_down__img);
		this.__1_stairs_down.onclick=function () {
			me._do_eg.onclick();
		}
		this.__1_stairs_down.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me.__1_stairs_down.style[domTransition]='none';
			} else {
				me.__1_stairs_down.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__1_stairs_down.ggParameter.sx=0.08;me.__1_stairs_down.ggParameter.sy=0.08;
			me.__1_stairs_down.style[domTransform]=parameterToTransform(me.__1_stairs_down.ggParameter);
		}
		this.__1_stairs_down.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me.__1_stairs_down.style[domTransition]='none';
			} else {
				me.__1_stairs_down.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__1_stairs_down.ggParameter.sx=0.05;me.__1_stairs_down.ggParameter.sy=0.05;
			me.__1_stairs_down.style[domTransform]=parameterToTransform(me.__1_stairs_down.ggParameter);
		}
		this._map_1_spots0.appendChild(this.__1_stairs_down);
		this._orientierung1=document.createElement('div');
		this._orientierung1.ggId="Orientierung1";
		this._orientierung1.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._orientierung1.ggVisible=true;
		this._orientierung1.className='ggskin ggskin_image';
		this._orientierung1.ggType='image';
		this._orientierung1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._orientierung1.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._orientierung1.setAttribute('style',hs);
		this._orientierung1__img=document.createElement('img');
		this._orientierung1__img.className='ggskin ggskin_image';
		this._orientierung1__img.setAttribute('src',basePath + 'images/orientierung1.png');
		this._orientierung1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._orientierung1__img.className='ggskin ggskin_image';
		this._orientierung1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._orientierung1__img);
		this._orientierung1.appendChild(this._orientierung1__img);
		this._arrow2=document.createElement('div');
		this._arrow2.ggId="Arrow";
		this._arrow2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._arrow2.ggVisible=true;
		this._arrow2.className='ggskin ggskin_image';
		this._arrow2.ggType='image';
		this._arrow2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-64 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-164 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -64px;';
		hs+='top:  -164px;';
		hs+='width: 120px;';
		hs+='height: 120px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._arrow2.setAttribute('style',hs);
		this._arrow2__img=document.createElement('img');
		this._arrow2__img.className='ggskin ggskin_image';
		this._arrow2__img.setAttribute('src',basePath + 'images/arrow2.png');
		this._arrow2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._arrow2__img.className='ggskin ggskin_image';
		this._arrow2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._arrow2__img);
		this._arrow2.appendChild(this._arrow2__img);
		this._orientierung1.appendChild(this._arrow2);
		this._map_1_spots0.appendChild(this._orientierung1);
		this._current_selection1=document.createElement('div');
		this._current_selection1.ggId="Current_Selection1";
		this._current_selection1.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
		this._current_selection1.ggVisible=true;
		this._current_selection1.className='ggskin ggskin_image';
		this._current_selection1.ggType='image';
		this._current_selection1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-86 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(26 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -86px;';
		hs+='top:  26px;';
		hs+='width: 300px;';
		hs+='height: 400px;';
		hs+=cssPrefix + 'transform-origin: 50% 0%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._current_selection1.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._current_selection1.setAttribute('style',hs);
		this._current_selection1__img=document.createElement('img');
		this._current_selection1__img.className='ggskin ggskin_image';
		this._current_selection1__img.setAttribute('src',basePath + 'images/current_selection1.png');
		this._current_selection1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._current_selection1__img.className='ggskin ggskin_image';
		this._current_selection1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._current_selection1__img);
		this._current_selection1.appendChild(this._current_selection1__img);
		this._map_1_spots0.appendChild(this._current_selection1);
		this._map_1.appendChild(this._map_1_spots0);
		this._mapholder.appendChild(this._map_1);
		this._map_erdgeschoss=document.createElement('div');
		this._map_erdgeschoss.ggId="Map_Erdgeschoss";
		this._map_erdgeschoss.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_erdgeschoss.ggVisible=true;
		this._map_erdgeschoss.className='ggskin ggskin_container';
		this._map_erdgeschoss.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  1px;';
		hs+='width: 1px;';
		hs+='height: 1px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._map_erdgeschoss.setAttribute('style',hs);
		this._map_erdgeschoss0=document.createElement('div');
		this._map_erdgeschoss0.ggId="Map_Erdgeschoss";
		this._map_erdgeschoss0.ggParameter={ rx:0,ry:0,a:0,sx:1.15,sy:1.15 };
		this._map_erdgeschoss0.ggVisible=true;
		this._map_erdgeschoss0.className='ggskin ggskin_image';
		this._map_erdgeschoss0.ggType='image';
		hs ='position:absolute;';
		hs+='left: 155px;';
		hs+='top:  44px;';
		hs+='width: 563px;';
		hs+='height: 403px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._map_erdgeschoss0.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._map_erdgeschoss0.setAttribute('style',hs);
		this._map_erdgeschoss0__img=document.createElement('img');
		this._map_erdgeschoss0__img.className='ggskin ggskin_image';
		this._map_erdgeschoss0__img.setAttribute('src',basePath + 'images/map_erdgeschoss0.png');
		this._map_erdgeschoss0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._map_erdgeschoss0__img.className='ggskin ggskin_image';
		this._map_erdgeschoss0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._map_erdgeschoss0__img);
		this._map_erdgeschoss0.appendChild(this._map_erdgeschoss0__img);
		this._map_erdgeschoss.appendChild(this._map_erdgeschoss0);
		this._map_0_spots=document.createElement('div');
		this._map_0_spots.ggId="Map_0_Spots";
		this._map_0_spots.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_0_spots.ggVisible=true;
		this._map_0_spots.className='ggskin ggskin_container';
		this._map_0_spots.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 1px;';
		hs+='height: 1px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._map_0_spots.setAttribute('style',hs);
		this._turnhalle=document.createElement('div');
		this._turnhalle.ggId="Turnhalle";
		this._turnhalle.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._turnhalle.ggVisible=true;
		this._turnhalle.className='ggskin ggskin_image';
		this._turnhalle.ggType='image';
		hs ='position:absolute;';
		hs+='left: 105px;';
		hs+='top:  -19px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._turnhalle.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._turnhalle.setAttribute('style',hs);
		this._turnhalle__img=document.createElement('img');
		this._turnhalle__img.className='ggskin ggskin_image';
		this._turnhalle__img.setAttribute('src',basePath + 'images/turnhalle.png');
		this._turnhalle__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._turnhalle__img.className='ggskin ggskin_image';
		this._turnhalle__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._turnhalle__img);
		this._turnhalle.appendChild(this._turnhalle__img);
		this._turnhalle.onclick=function () {
			me.player.openNext("Turnhalle_out.xml","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=105;me._current_selectione.ggParameter.ry=-19;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=105;me._orientierunge.ggParameter.ry=-19;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._turnhalle.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._turnhalle.style[domTransition]='none';
			} else {
				me._turnhalle.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._turnhalle.ggParameter.sx=0.3;me._turnhalle.ggParameter.sy=0.3;
			me._turnhalle.style[domTransform]=parameterToTransform(me._turnhalle.ggParameter);
		}
		this._turnhalle.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._turnhalle.style[domTransition]='none';
			} else {
				me._turnhalle.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._turnhalle.ggParameter.sx=0.2;me._turnhalle.ggParameter.sy=0.2;
			me._turnhalle.style[domTransform]=parameterToTransform(me._turnhalle.ggParameter);
		}
		this._map_0_spots.appendChild(this._turnhalle);
		this._room_0_23=document.createElement('div');
		this._room_0_23.ggId="Room_0_23";
		this._room_0_23.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._room_0_23.ggVisible=true;
		this._room_0_23.className='ggskin ggskin_image';
		this._room_0_23.ggType='image';
		hs ='position:absolute;';
		hs+='left: 525px;';
		hs+='top:  185px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_0_23.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._room_0_23.setAttribute('style',hs);
		this._room_0_23__img=document.createElement('img');
		this._room_0_23__img.className='ggskin ggskin_image';
		this._room_0_23__img.setAttribute('src',basePath + 'images/room_0_23.png');
		this._room_0_23__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_0_23__img.className='ggskin ggskin_image';
		this._room_0_23__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_0_23__img);
		this._room_0_23.appendChild(this._room_0_23__img);
		this._room_0_23.onclick=function () {
			me.player.openNext("A0_23_out.xml (Fehlt noch)","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=525;me._current_selectione.ggParameter.ry=185;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=525;me._orientierunge.ggParameter.ry=185;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._room_0_23.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_0_23.style[domTransition]='none';
			} else {
				me._room_0_23.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_0_23.ggParameter.sx=0.3;me._room_0_23.ggParameter.sy=0.3;
			me._room_0_23.style[domTransform]=parameterToTransform(me._room_0_23.ggParameter);
		}
		this._room_0_23.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_0_23.style[domTransition]='none';
			} else {
				me._room_0_23.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_0_23.ggParameter.sx=0.2;me._room_0_23.ggParameter.sy=0.2;
			me._room_0_23.style[domTransform]=parameterToTransform(me._room_0_23.ggParameter);
		}
		this._map_0_spots.appendChild(this._room_0_23);
		this._ogs=document.createElement('div');
		this._ogs.ggId="OGS";
		this._ogs.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._ogs.ggVisible=true;
		this._ogs.className='ggskin ggskin_image';
		this._ogs.ggType='image';
		hs ='position:absolute;';
		hs+='left: 153px;';
		hs+='top:  142px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._ogs.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._ogs.setAttribute('style',hs);
		this._ogs__img=document.createElement('img');
		this._ogs__img.className='ggskin ggskin_image';
		this._ogs__img.setAttribute('src',basePath + 'images/ogs.png');
		this._ogs__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._ogs__img.className='ggskin ggskin_image';
		this._ogs__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._ogs__img);
		this._ogs.appendChild(this._ogs__img);
		this._ogs.onclick=function () {
			me.player.openNext("OGS_out.xml","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=153;me._current_selectione.ggParameter.ry=142;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=153;me._orientierunge.ggParameter.ry=142;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._ogs.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._ogs.style[domTransition]='none';
			} else {
				me._ogs.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._ogs.ggParameter.sx=0.3;me._ogs.ggParameter.sy=0.3;
			me._ogs.style[domTransform]=parameterToTransform(me._ogs.ggParameter);
		}
		this._ogs.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._ogs.style[domTransition]='none';
			} else {
				me._ogs.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._ogs.ggParameter.sx=0.2;me._ogs.ggParameter.sy=0.2;
			me._ogs.style[domTransform]=parameterToTransform(me._ogs.ggParameter);
		}
		this._map_0_spots.appendChild(this._ogs);
		this._aula=document.createElement('div');
		this._aula.ggId="Aula";
		this._aula.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._aula.ggVisible=true;
		this._aula.className='ggskin ggskin_image';
		this._aula.ggType='image';
		hs ='position:absolute;';
		hs+='left: 293px;';
		hs+='top:  186px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._aula.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._aula.setAttribute('style',hs);
		this._aula__img=document.createElement('img');
		this._aula__img.className='ggskin ggskin_image';
		this._aula__img.setAttribute('src',basePath + 'images/aula.png');
		this._aula__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._aula__img.className='ggskin ggskin_image';
		this._aula__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._aula__img);
		this._aula.appendChild(this._aula__img);
		this._aula.onclick=function () {
			me.player.openNext("Aula_out.xml","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=293;me._current_selectione.ggParameter.ry=186;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=293;me._orientierunge.ggParameter.ry=186;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._aula.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._aula.style[domTransition]='none';
			} else {
				me._aula.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._aula.ggParameter.sx=0.3;me._aula.ggParameter.sy=0.3;
			me._aula.style[domTransform]=parameterToTransform(me._aula.ggParameter);
		}
		this._aula.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._aula.style[domTransition]='none';
			} else {
				me._aula.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._aula.ggParameter.sx=0.2;me._aula.ggParameter.sy=0.2;
			me._aula.style[domTransform]=parameterToTransform(me._aula.ggParameter);
		}
		this._map_0_spots.appendChild(this._aula);
		this._mensa=document.createElement('div');
		this._mensa.ggId="Mensa";
		this._mensa.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._mensa.ggVisible=true;
		this._mensa.className='ggskin ggskin_image';
		this._mensa.ggType='image';
		hs ='position:absolute;';
		hs+='left: 284px;';
		hs+='top:  85px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._mensa.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._mensa.setAttribute('style',hs);
		this._mensa__img=document.createElement('img');
		this._mensa__img.className='ggskin ggskin_image';
		this._mensa__img.setAttribute('src',basePath + 'images/mensa.png');
		this._mensa__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._mensa__img.className='ggskin ggskin_image';
		this._mensa__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._mensa__img);
		this._mensa.appendChild(this._mensa__img);
		this._mensa.onclick=function () {
			me.player.openNext("Mensa_out.xml","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=284;me._current_selectione.ggParameter.ry=85;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=284;me._orientierunge.ggParameter.ry=85;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._mensa.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._mensa.style[domTransition]='none';
			} else {
				me._mensa.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mensa.ggParameter.sx=0.3;me._mensa.ggParameter.sy=0.3;
			me._mensa.style[domTransform]=parameterToTransform(me._mensa.ggParameter);
		}
		this._mensa.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._mensa.style[domTransition]='none';
			} else {
				me._mensa.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mensa.ggParameter.sx=0.2;me._mensa.ggParameter.sy=0.2;
			me._mensa.style[domTransform]=parameterToTransform(me._mensa.ggParameter);
		}
		this._map_0_spots.appendChild(this._mensa);
		this._smv=document.createElement('div');
		this._smv.ggId="SMV";
		this._smv.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._smv.ggVisible=true;
		this._smv.className='ggskin ggskin_image';
		this._smv.ggType='image';
		hs ='position:absolute;';
		hs+='left: 398px;';
		hs+='top:  -20px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._smv.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._smv.setAttribute('style',hs);
		this._smv__img=document.createElement('img');
		this._smv__img.className='ggskin ggskin_image';
		this._smv__img.setAttribute('src',basePath + 'images/smv.png');
		this._smv__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._smv__img.className='ggskin ggskin_image';
		this._smv__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._smv__img);
		this._smv.appendChild(this._smv__img);
		this._smv.onclick=function () {
			me.player.openNext("SMV_out.xml","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=398;me._current_selectione.ggParameter.ry=-20;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=398;me._orientierunge.ggParameter.ry=-20;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._smv.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._smv.style[domTransition]='none';
			} else {
				me._smv.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._smv.ggParameter.sx=0.3;me._smv.ggParameter.sy=0.3;
			me._smv.style[domTransform]=parameterToTransform(me._smv.ggParameter);
		}
		this._smv.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._smv.style[domTransition]='none';
			} else {
				me._smv.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._smv.ggParameter.sx=0.2;me._smv.ggParameter.sy=0.2;
			me._smv.style[domTransform]=parameterToTransform(me._smv.ggParameter);
		}
		this._map_0_spots.appendChild(this._smv);
		this._vor_turnhalle=document.createElement('div');
		this._vor_turnhalle.ggId="Vor_Turnhalle";
		this._vor_turnhalle.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._vor_turnhalle.ggVisible=true;
		this._vor_turnhalle.className='ggskin ggskin_image';
		this._vor_turnhalle.ggType='image';
		hs ='position:absolute;';
		hs+='left: 63px;';
		hs+='top:  -143px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._vor_turnhalle.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._vor_turnhalle.setAttribute('style',hs);
		this._vor_turnhalle__img=document.createElement('img');
		this._vor_turnhalle__img.className='ggskin ggskin_image';
		this._vor_turnhalle__img.setAttribute('src',basePath + 'images/vor_turnhalle.png');
		this._vor_turnhalle__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._vor_turnhalle__img.className='ggskin ggskin_image';
		this._vor_turnhalle__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._vor_turnhalle__img);
		this._vor_turnhalle.appendChild(this._vor_turnhalle__img);
		this._vor_turnhalle.onclick=function () {
			me.player.openNext("Vor_Turnhalle_out.xml","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=63;me._current_selectione.ggParameter.ry=-143;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=63;me._orientierunge.ggParameter.ry=-143;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._vor_turnhalle.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._vor_turnhalle.style[domTransition]='none';
			} else {
				me._vor_turnhalle.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._vor_turnhalle.ggParameter.sx=0.3;me._vor_turnhalle.ggParameter.sy=0.3;
			me._vor_turnhalle.style[domTransform]=parameterToTransform(me._vor_turnhalle.ggParameter);
		}
		this._vor_turnhalle.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._vor_turnhalle.style[domTransition]='none';
			} else {
				me._vor_turnhalle.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._vor_turnhalle.ggParameter.sx=0.2;me._vor_turnhalle.ggParameter.sy=0.2;
			me._vor_turnhalle.style[domTransform]=parameterToTransform(me._vor_turnhalle.ggParameter);
		}
		this._map_0_spots.appendChild(this._vor_turnhalle);
		this._gang_0_24=document.createElement('div');
		this._gang_0_24.ggId="Gang_0_24";
		this._gang_0_24.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._gang_0_24.ggVisible=true;
		this._gang_0_24.className='ggskin ggskin_image';
		this._gang_0_24.ggType='image';
		hs ='position:absolute;';
		hs+='left: 485px;';
		hs+='top:  144px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_0_24.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._gang_0_24.setAttribute('style',hs);
		this._gang_0_24__img=document.createElement('img');
		this._gang_0_24__img.className='ggskin ggskin_image';
		this._gang_0_24__img.setAttribute('src',basePath + 'images/gang_0_24.png');
		this._gang_0_24__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_0_24__img.className='ggskin ggskin_image';
		this._gang_0_24__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_0_24__img);
		this._gang_0_24.appendChild(this._gang_0_24__img);
		this._gang_0_24.onclick=function () {
			me.player.openNext("Gang 0_24_out.xml","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=485;me._current_selectione.ggParameter.ry=144;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=485;me._orientierunge.ggParameter.ry=144;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._gang_0_24.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_0_24.style[domTransition]='none';
			} else {
				me._gang_0_24.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_0_24.ggParameter.sx=0.3;me._gang_0_24.ggParameter.sy=0.3;
			me._gang_0_24.style[domTransform]=parameterToTransform(me._gang_0_24.ggParameter);
		}
		this._gang_0_24.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_0_24.style[domTransition]='none';
			} else {
				me._gang_0_24.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_0_24.ggParameter.sx=0.2;me._gang_0_24.ggParameter.sy=0.2;
			me._gang_0_24.style[domTransform]=parameterToTransform(me._gang_0_24.ggParameter);
		}
		this._map_0_spots.appendChild(this._gang_0_24);
		this._buehne=document.createElement('div');
		this._buehne.ggId="Buehne";
		this._buehne.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._buehne.ggVisible=true;
		this._buehne.className='ggskin ggskin_image';
		this._buehne.ggType='image';
		hs ='position:absolute;';
		hs+='left: 263px;';
		hs+='top:  288px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._buehne.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._buehne.setAttribute('style',hs);
		this._buehne__img=document.createElement('img');
		this._buehne__img.className='ggskin ggskin_image';
		this._buehne__img.setAttribute('src',basePath + 'images/buehne.png');
		this._buehne__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._buehne__img.className='ggskin ggskin_image';
		this._buehne__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._buehne__img);
		this._buehne.appendChild(this._buehne__img);
		this._buehne.onclick=function () {
			me.player.openNext("Buehne_out.xml","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=263;me._current_selectione.ggParameter.ry=288;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=263;me._orientierunge.ggParameter.ry=288;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._buehne.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._buehne.style[domTransition]='none';
			} else {
				me._buehne.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._buehne.ggParameter.sx=0.3;me._buehne.ggParameter.sy=0.3;
			me._buehne.style[domTransform]=parameterToTransform(me._buehne.ggParameter);
		}
		this._buehne.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._buehne.style[domTransition]='none';
			} else {
				me._buehne.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._buehne.ggParameter.sx=0.2;me._buehne.ggParameter.sy=0.2;
			me._buehne.style[domTransform]=parameterToTransform(me._buehne.ggParameter);
		}
		this._map_0_spots.appendChild(this._buehne);
		this._room_0_13=document.createElement('div');
		this._room_0_13.ggId="Room_0_13";
		this._room_0_13.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._room_0_13.ggVisible=true;
		this._room_0_13.className='ggskin ggskin_image';
		this._room_0_13.ggType='image';
		hs ='position:absolute;';
		hs+='left: 162px;';
		hs+='top:  322px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_0_13.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._room_0_13.setAttribute('style',hs);
		this._room_0_13__img=document.createElement('img');
		this._room_0_13__img.className='ggskin ggskin_image';
		this._room_0_13__img.setAttribute('src',basePath + 'images/room_0_13.png');
		this._room_0_13__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_0_13__img.className='ggskin ggskin_image';
		this._room_0_13__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_0_13__img);
		this._room_0_13.appendChild(this._room_0_13__img);
		this._room_0_13.onclick=function () {
			me.player.openNext("0_13_out.xml","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=162;me._current_selectione.ggParameter.ry=322;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=162;me._orientierunge.ggParameter.ry=322;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._room_0_13.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_0_13.style[domTransition]='none';
			} else {
				me._room_0_13.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_0_13.ggParameter.sx=0.3;me._room_0_13.ggParameter.sy=0.3;
			me._room_0_13.style[domTransform]=parameterToTransform(me._room_0_13.ggParameter);
		}
		this._room_0_13.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_0_13.style[domTransition]='none';
			} else {
				me._room_0_13.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_0_13.ggParameter.sx=0.2;me._room_0_13.ggParameter.sy=0.2;
			me._room_0_13.style[domTransform]=parameterToTransform(me._room_0_13.ggParameter);
		}
		this._map_0_spots.appendChild(this._room_0_13);
		this._room_0_24=document.createElement('div');
		this._room_0_24.ggId="Room_0_24";
		this._room_0_24.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._room_0_24.ggVisible=true;
		this._room_0_24.className='ggskin ggskin_image';
		this._room_0_24.ggType='image';
		hs ='position:absolute;';
		hs+='left: 466px;';
		hs+='top:  185px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_0_24.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._room_0_24.setAttribute('style',hs);
		this._room_0_24__img=document.createElement('img');
		this._room_0_24__img.className='ggskin ggskin_image';
		this._room_0_24__img.setAttribute('src',basePath + 'images/room_0_24.png');
		this._room_0_24__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_0_24__img.className='ggskin ggskin_image';
		this._room_0_24__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_0_24__img);
		this._room_0_24.appendChild(this._room_0_24__img);
		this._room_0_24.onclick=function () {
			me.player.openNext("0_24_out.xml","");
			me._current_selectione.style[domTransition]='none';
			me._current_selectione.ggParameter.rx=466;me._current_selectione.ggParameter.ry=185;
			me._current_selectione.style[domTransform]=parameterToTransform(me._current_selectione.ggParameter);
			me._orientierunge.style[domTransition]='none';
			me._orientierunge.ggParameter.rx=466;me._orientierunge.ggParameter.ry=185;
			me._orientierunge.style[domTransform]=parameterToTransform(me._orientierunge.ggParameter);
		}
		this._room_0_24.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_0_24.style[domTransition]='none';
			} else {
				me._room_0_24.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_0_24.ggParameter.sx=0.3;me._room_0_24.ggParameter.sy=0.3;
			me._room_0_24.style[domTransform]=parameterToTransform(me._room_0_24.ggParameter);
		}
		this._room_0_24.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_0_24.style[domTransition]='none';
			} else {
				me._room_0_24.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_0_24.ggParameter.sx=0.2;me._room_0_24.ggParameter.sy=0.2;
			me._room_0_24.style[domTransform]=parameterToTransform(me._room_0_24.ggParameter);
		}
		this._map_0_spots.appendChild(this._room_0_24);
		this.__0_stairs_down=document.createElement('div');
		this.__0_stairs_down.ggId="0_stairs_down";
		this.__0_stairs_down.ggParameter={ rx:0,ry:0,a:0,sx:0.05,sy:0.05 };
		this.__0_stairs_down.ggVisible=true;
		this.__0_stairs_down.className='ggskin ggskin_image';
		this.__0_stairs_down.ggType='image';
		this.__0_stairs_down.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(350 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-90 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 350px;';
		hs+='top:  -90px;';
		hs+='width: 600px;';
		hs+='height: 569px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__0_stairs_down.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__0_stairs_down.setAttribute('style',hs);
		this.__0_stairs_down__img=document.createElement('img');
		this.__0_stairs_down__img.className='ggskin ggskin_image';
		this.__0_stairs_down__img.setAttribute('src',basePath + 'images/_0_stairs_down.png');
		this.__0_stairs_down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__0_stairs_down__img.className='ggskin ggskin_image';
		this.__0_stairs_down__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__0_stairs_down__img);
		this.__0_stairs_down.appendChild(this.__0_stairs_down__img);
		this.__0_stairs_down.onclick=function () {
			me._do_ug.onclick();
		}
		this.__0_stairs_down.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me.__0_stairs_down.style[domTransition]='none';
			} else {
				me.__0_stairs_down.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__0_stairs_down.ggParameter.sx=0.08;me.__0_stairs_down.ggParameter.sy=0.08;
			me.__0_stairs_down.style[domTransform]=parameterToTransform(me.__0_stairs_down.ggParameter);
		}
		this.__0_stairs_down.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me.__0_stairs_down.style[domTransition]='none';
			} else {
				me.__0_stairs_down.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__0_stairs_down.ggParameter.sx=0.05;me.__0_stairs_down.ggParameter.sy=0.05;
			me.__0_stairs_down.style[domTransform]=parameterToTransform(me.__0_stairs_down.ggParameter);
		}
		this._map_0_spots.appendChild(this.__0_stairs_down);
		this.__0_stairs_up=document.createElement('div');
		this.__0_stairs_up.ggId="0_stairs_up";
		this.__0_stairs_up.ggParameter={ rx:0,ry:0,a:0,sx:0.05,sy:0.05 };
		this.__0_stairs_up.ggVisible=true;
		this.__0_stairs_up.className='ggskin ggskin_image';
		this.__0_stairs_up.ggType='image';
		this.__0_stairs_up.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(127 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-90 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 127px;';
		hs+='top:  -90px;';
		hs+='width: 570px;';
		hs+='height: 599px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__0_stairs_up.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this.__0_stairs_up.setAttribute('style',hs);
		this.__0_stairs_up__img=document.createElement('img');
		this.__0_stairs_up__img.className='ggskin ggskin_image';
		this.__0_stairs_up__img.setAttribute('src',basePath + 'images/_0_stairs_up.png');
		this.__0_stairs_up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this.__0_stairs_up__img.className='ggskin ggskin_image';
		this.__0_stairs_up__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this.__0_stairs_up__img);
		this.__0_stairs_up.appendChild(this.__0_stairs_up__img);
		this.__0_stairs_up.onclick=function () {
			me._up_1.onclick();
		}
		this.__0_stairs_up.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me.__0_stairs_up.style[domTransition]='none';
			} else {
				me.__0_stairs_up.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__0_stairs_up.ggParameter.sx=0.08;me.__0_stairs_up.ggParameter.sy=0.08;
			me.__0_stairs_up.style[domTransform]=parameterToTransform(me.__0_stairs_up.ggParameter);
		}
		this.__0_stairs_up.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me.__0_stairs_up.style[domTransition]='none';
			} else {
				me.__0_stairs_up.style[domTransition]='all 500ms ease-out 0ms';
			}
			me.__0_stairs_up.ggParameter.sx=0.05;me.__0_stairs_up.ggParameter.sy=0.05;
			me.__0_stairs_up.style[domTransform]=parameterToTransform(me.__0_stairs_up.ggParameter);
		}
		this._map_0_spots.appendChild(this.__0_stairs_up);
		this._orientierunge=document.createElement('div');
		this._orientierunge.ggId="OrientierungE";
		this._orientierunge.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._orientierunge.ggVisible=true;
		this._orientierunge.className='ggskin ggskin_image';
		this._orientierunge.ggType='image';
		this._orientierunge.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._orientierunge.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._orientierunge.setAttribute('style',hs);
		this._orientierunge__img=document.createElement('img');
		this._orientierunge__img.className='ggskin ggskin_image';
		this._orientierunge__img.setAttribute('src',basePath + 'images/orientierunge.png');
		this._orientierunge__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._orientierunge__img.className='ggskin ggskin_image';
		this._orientierunge__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._orientierunge__img);
		this._orientierunge.appendChild(this._orientierunge__img);
		this._arrow1=document.createElement('div');
		this._arrow1.ggId="Arrow";
		this._arrow1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._arrow1.ggVisible=true;
		this._arrow1.className='ggskin ggskin_image';
		this._arrow1.ggType='image';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -100px;';
		hs+='width: 120px;';
		hs+='height: 120px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._arrow1.setAttribute('style',hs);
		this._arrow1__img=document.createElement('img');
		this._arrow1__img.className='ggskin ggskin_image';
		this._arrow1__img.setAttribute('src',basePath + 'images/arrow1.png');
		this._arrow1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._arrow1__img.className='ggskin ggskin_image';
		this._arrow1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._arrow1__img);
		this._arrow1.appendChild(this._arrow1__img);
		this._orientierunge.appendChild(this._arrow1);
		this._map_0_spots.appendChild(this._orientierunge);
		this._current_selectione=document.createElement('div');
		this._current_selectione.ggId="Current_SelectionE";
		this._current_selectione.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
		this._current_selectione.ggVisible=true;
		this._current_selectione.className='ggskin ggskin_image';
		this._current_selectione.ggType='image';
		this._current_selectione.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(-86 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-154 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -86px;';
		hs+='top:  -154px;';
		hs+='width: 300px;';
		hs+='height: 400px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._current_selectione.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._current_selectione.setAttribute('style',hs);
		this._current_selectione__img=document.createElement('img');
		this._current_selectione__img.className='ggskin ggskin_image';
		this._current_selectione__img.setAttribute('src',basePath + 'images/current_selectione.png');
		this._current_selectione__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._current_selectione__img.className='ggskin ggskin_image';
		this._current_selectione__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._current_selectione__img);
		this._current_selectione.appendChild(this._current_selectione__img);
		this._map_0_spots.appendChild(this._current_selectione);
		this._map_erdgeschoss.appendChild(this._map_0_spots);
		this._mapholder.appendChild(this._map_erdgeschoss);
		this._map_keller=document.createElement('div');
		this._map_keller.ggId="Map_Keller";
		this._map_keller.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_keller.ggVisible=true;
		this._map_keller.className='ggskin ggskin_container';
		this._map_keller.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  1px;';
		hs+='width: 1px;';
		hs+='height: 1px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._map_keller.setAttribute('style',hs);
		this._map_keller0=document.createElement('div');
		this._map_keller0.ggId="Map_Keller";
		this._map_keller0.ggParameter={ rx:0,ry:0,a:0,sx:0.8,sy:0.8 };
		this._map_keller0.ggVisible=true;
		this._map_keller0.className='ggskin ggskin_image';
		this._map_keller0.ggType='image';
		hs ='position:absolute;';
		hs+='left: 84px;';
		hs+='top:  -16px;';
		hs+='width: 936px;';
		hs+='height: 448px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._map_keller0.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._map_keller0.setAttribute('style',hs);
		this._map_keller0__img=document.createElement('img');
		this._map_keller0__img.className='ggskin ggskin_image';
		this._map_keller0__img.setAttribute('src',basePath + 'images/map_keller0.png');
		this._map_keller0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._map_keller0__img.className='ggskin ggskin_image';
		this._map_keller0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._map_keller0__img);
		this._map_keller0.appendChild(this._map_keller0__img);
		this._map_keller.appendChild(this._map_keller0);
		this._map_1_spots=document.createElement('div');
		this._map_1_spots.ggId="Map_-1_Spots";
		this._map_1_spots.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2 };
		this._map_1_spots.ggVisible=true;
		this._map_1_spots.className='ggskin ggskin_container';
		this._map_1_spots.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 1px;';
		hs+='height: 1px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._map_1_spots.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._map_1_spots.setAttribute('style',hs);
		this._room_u_22=document.createElement('div');
		this._room_u_22.ggId="Room_U_22";
		this._room_u_22.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._room_u_22.ggVisible=true;
		this._room_u_22.className='ggskin ggskin_image';
		this._room_u_22.ggType='image';
		hs ='position:absolute;';
		hs+='left: 388px;';
		hs+='top:  134px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_u_22.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._room_u_22.setAttribute('style',hs);
		this._room_u_22__img=document.createElement('img');
		this._room_u_22__img.className='ggskin ggskin_image';
		this._room_u_22__img.setAttribute('src',basePath + 'images/room_u_22.png');
		this._room_u_22__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_u_22__img.className='ggskin ggskin_image';
		this._room_u_22__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_u_22__img);
		this._room_u_22.appendChild(this._room_u_22__img);
		this._room_u_22.onclick=function () {
			me.player.openNext("U_22_out.xml","");
			me._current_selectionu.style[domTransition]='none';
			me._current_selectionu.ggParameter.rx=388;me._current_selectionu.ggParameter.ry=134;
			me._current_selectionu.style[domTransform]=parameterToTransform(me._current_selectionu.ggParameter);
			me._orientierungu.style[domTransition]='none';
			me._orientierungu.ggParameter.rx=388;me._orientierungu.ggParameter.ry=134;
			me._orientierungu.style[domTransform]=parameterToTransform(me._orientierungu.ggParameter);
		}
		this._room_u_22.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_u_22.style[domTransition]='none';
			} else {
				me._room_u_22.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_u_22.ggParameter.sx=0.3;me._room_u_22.ggParameter.sy=0.3;
			me._room_u_22.style[domTransform]=parameterToTransform(me._room_u_22.ggParameter);
		}
		this._room_u_22.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_u_22.style[domTransition]='none';
			} else {
				me._room_u_22.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_u_22.ggParameter.sx=0.2;me._room_u_22.ggParameter.sy=0.2;
			me._room_u_22.style[domTransform]=parameterToTransform(me._room_u_22.ggParameter);
		}
		this._map_1_spots.appendChild(this._room_u_22);
		this._room_u_23=document.createElement('div');
		this._room_u_23.ggId="Room_U_23";
		this._room_u_23.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._room_u_23.ggVisible=true;
		this._room_u_23.className='ggskin ggskin_image';
		this._room_u_23.ggType='image';
		hs ='position:absolute;';
		hs+='left: 660px;';
		hs+='top:  84px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_u_23.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._room_u_23.setAttribute('style',hs);
		this._room_u_23__img=document.createElement('img');
		this._room_u_23__img.className='ggskin ggskin_image';
		this._room_u_23__img.setAttribute('src',basePath + 'images/room_u_23.png');
		this._room_u_23__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_u_23__img.className='ggskin ggskin_image';
		this._room_u_23__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_u_23__img);
		this._room_u_23.appendChild(this._room_u_23__img);
		this._room_u_23.onclick=function () {
			me.player.openNext("U_23_out.xml","");
			me._current_selectionu.style[domTransition]='none';
			me._current_selectionu.ggParameter.rx=660;me._current_selectionu.ggParameter.ry=84;
			me._current_selectionu.style[domTransform]=parameterToTransform(me._current_selectionu.ggParameter);
			me._orientierungu.style[domTransition]='none';
			me._orientierungu.ggParameter.rx=660;me._orientierungu.ggParameter.ry=84;
			me._orientierungu.style[domTransform]=parameterToTransform(me._orientierungu.ggParameter);
		}
		this._room_u_23.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_u_23.style[domTransition]='none';
			} else {
				me._room_u_23.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_u_23.ggParameter.sx=0.3;me._room_u_23.ggParameter.sy=0.3;
			me._room_u_23.style[domTransform]=parameterToTransform(me._room_u_23.ggParameter);
		}
		this._room_u_23.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_u_23.style[domTransition]='none';
			} else {
				me._room_u_23.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_u_23.ggParameter.sx=0.2;me._room_u_23.ggParameter.sy=0.2;
			me._room_u_23.style[domTransform]=parameterToTransform(me._room_u_23.ggParameter);
		}
		this._map_1_spots.appendChild(this._room_u_23);
		this._room_u_26=document.createElement('div');
		this._room_u_26.ggId="Room_U_26";
		this._room_u_26.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._room_u_26.ggVisible=true;
		this._room_u_26.className='ggskin ggskin_image';
		this._room_u_26.ggType='image';
		hs ='position:absolute;';
		hs+='left: 652px;';
		hs+='top:  135px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_u_26.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._room_u_26.setAttribute('style',hs);
		this._room_u_26__img=document.createElement('img');
		this._room_u_26__img.className='ggskin ggskin_image';
		this._room_u_26__img.setAttribute('src',basePath + 'images/room_u_26.png');
		this._room_u_26__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_u_26__img.className='ggskin ggskin_image';
		this._room_u_26__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_u_26__img);
		this._room_u_26.appendChild(this._room_u_26__img);
		this._room_u_26.onclick=function () {
			me.player.openNext("U_26_out.xml","");
			me._current_selectionu.style[domTransition]='none';
			me._current_selectionu.ggParameter.rx=652;me._current_selectionu.ggParameter.ry=135;
			me._current_selectionu.style[domTransform]=parameterToTransform(me._current_selectionu.ggParameter);
			me._orientierungu.style[domTransition]='none';
			me._orientierungu.ggParameter.rx=652;me._orientierungu.ggParameter.ry=135;
			me._orientierungu.style[domTransform]=parameterToTransform(me._orientierungu.ggParameter);
		}
		this._room_u_26.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_u_26.style[domTransition]='none';
			} else {
				me._room_u_26.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_u_26.ggParameter.sx=0.3;me._room_u_26.ggParameter.sy=0.3;
			me._room_u_26.style[domTransform]=parameterToTransform(me._room_u_26.ggParameter);
		}
		this._room_u_26.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_u_26.style[domTransition]='none';
			} else {
				me._room_u_26.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_u_26.ggParameter.sx=0.2;me._room_u_26.ggParameter.sy=0.2;
			me._room_u_26.style[domTransform]=parameterToTransform(me._room_u_26.ggParameter);
		}
		this._map_1_spots.appendChild(this._room_u_26);
		this._gang_u_21=document.createElement('div');
		this._gang_u_21.ggId="Gang_U_21";
		this._gang_u_21.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._gang_u_21.ggVisible=true;
		this._gang_u_21.className='ggskin ggskin_image';
		this._gang_u_21.ggType='image';
		hs ='position:absolute;';
		hs+='left: 338px;';
		hs+='top:  90px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_u_21.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._gang_u_21.setAttribute('style',hs);
		this._gang_u_21__img=document.createElement('img');
		this._gang_u_21__img.className='ggskin ggskin_image';
		this._gang_u_21__img.setAttribute('src',basePath + 'images/gang_u_21.png');
		this._gang_u_21__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_u_21__img.className='ggskin ggskin_image';
		this._gang_u_21__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_u_21__img);
		this._gang_u_21.appendChild(this._gang_u_21__img);
		this._gang_u_21.onclick=function () {
			me.player.openNext("Gang U_21_out.xml","");
			me._current_selectionu.style[domTransition]='none';
			me._current_selectionu.ggParameter.rx=338;me._current_selectionu.ggParameter.ry=90;
			me._current_selectionu.style[domTransform]=parameterToTransform(me._current_selectionu.ggParameter);
			me._orientierungu.style[domTransition]='none';
			me._orientierungu.ggParameter.rx=338;me._orientierungu.ggParameter.ry=90;
			me._orientierungu.style[domTransform]=parameterToTransform(me._orientierungu.ggParameter);
		}
		this._gang_u_21.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_u_21.style[domTransition]='none';
			} else {
				me._gang_u_21.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_u_21.ggParameter.sx=0.3;me._gang_u_21.ggParameter.sy=0.3;
			me._gang_u_21.style[domTransform]=parameterToTransform(me._gang_u_21.ggParameter);
		}
		this._gang_u_21.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_u_21.style[domTransition]='none';
			} else {
				me._gang_u_21.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_u_21.ggParameter.sx=0.2;me._gang_u_21.ggParameter.sy=0.2;
			me._gang_u_21.style[domTransform]=parameterToTransform(me._gang_u_21.ggParameter);
		}
		this._map_1_spots.appendChild(this._gang_u_21);
		this._gang_u_10=document.createElement('div');
		this._gang_u_10.ggId="Gang_U_10";
		this._gang_u_10.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._gang_u_10.ggVisible=true;
		this._gang_u_10.className='ggskin ggskin_image';
		this._gang_u_10.ggType='image';
		hs ='position:absolute;';
		hs+='left: 159px;';
		hs+='top:  100px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_u_10.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._gang_u_10.setAttribute('style',hs);
		this._gang_u_10__img=document.createElement('img');
		this._gang_u_10__img.className='ggskin ggskin_image';
		this._gang_u_10__img.setAttribute('src',basePath + 'images/gang_u_10.png');
		this._gang_u_10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_u_10__img.className='ggskin ggskin_image';
		this._gang_u_10__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_u_10__img);
		this._gang_u_10.appendChild(this._gang_u_10__img);
		this._gang_u_10.onclick=function () {
			me.player.openNext("Gang U_10_out.xml","");
			me._current_selectionu.style[domTransition]='none';
			me._current_selectionu.ggParameter.rx=159;me._current_selectionu.ggParameter.ry=100;
			me._current_selectionu.style[domTransform]=parameterToTransform(me._current_selectionu.ggParameter);
			me._orientierungu.style[domTransition]='none';
			me._orientierungu.ggParameter.rx=159;me._orientierungu.ggParameter.ry=100;
			me._orientierungu.style[domTransform]=parameterToTransform(me._orientierungu.ggParameter);
		}
		this._gang_u_10.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_u_10.style[domTransition]='none';
			} else {
				me._gang_u_10.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_u_10.ggParameter.sx=0.3;me._gang_u_10.ggParameter.sy=0.3;
			me._gang_u_10.style[domTransform]=parameterToTransform(me._gang_u_10.ggParameter);
		}
		this._gang_u_10.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_u_10.style[domTransition]='none';
			} else {
				me._gang_u_10.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_u_10.ggParameter.sx=0.2;me._gang_u_10.ggParameter.sy=0.2;
			me._gang_u_10.style[domTransform]=parameterToTransform(me._gang_u_10.ggParameter);
		}
		this._map_1_spots.appendChild(this._gang_u_10);
		this._gang_u_27=document.createElement('div');
		this._gang_u_27.ggId="Gang_U_27";
		this._gang_u_27.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._gang_u_27.ggVisible=true;
		this._gang_u_27.className='ggskin ggskin_image';
		this._gang_u_27.ggType='image';
		hs ='position:absolute;';
		hs+='left: 560px;';
		hs+='top:  94px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._gang_u_27.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._gang_u_27.setAttribute('style',hs);
		this._gang_u_27__img=document.createElement('img');
		this._gang_u_27__img.className='ggskin ggskin_image';
		this._gang_u_27__img.setAttribute('src',basePath + 'images/gang_u_27.png');
		this._gang_u_27__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._gang_u_27__img.className='ggskin ggskin_image';
		this._gang_u_27__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._gang_u_27__img);
		this._gang_u_27.appendChild(this._gang_u_27__img);
		this._gang_u_27.onclick=function () {
			me.player.openNext("Gang U_27_out.xml","");
			me._current_selectionu.style[domTransition]='none';
			me._current_selectionu.ggParameter.rx=560;me._current_selectionu.ggParameter.ry=94;
			me._current_selectionu.style[domTransform]=parameterToTransform(me._current_selectionu.ggParameter);
			me._orientierungu.style[domTransition]='none';
			me._orientierungu.ggParameter.rx=560;me._orientierungu.ggParameter.ry=94;
			me._orientierungu.style[domTransform]=parameterToTransform(me._orientierungu.ggParameter);
		}
		this._gang_u_27.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._gang_u_27.style[domTransition]='none';
			} else {
				me._gang_u_27.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_u_27.ggParameter.sx=0.3;me._gang_u_27.ggParameter.sy=0.3;
			me._gang_u_27.style[domTransform]=parameterToTransform(me._gang_u_27.ggParameter);
		}
		this._gang_u_27.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._gang_u_27.style[domTransition]='none';
			} else {
				me._gang_u_27.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._gang_u_27.ggParameter.sx=0.2;me._gang_u_27.ggParameter.sy=0.2;
			me._gang_u_27.style[domTransform]=parameterToTransform(me._gang_u_27.ggParameter);
		}
		this._map_1_spots.appendChild(this._gang_u_27);
		this._room_u_11=document.createElement('div');
		this._room_u_11.ggId="Room_U_11";
		this._room_u_11.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._room_u_11.ggVisible=true;
		this._room_u_11.className='ggskin ggskin_image';
		this._room_u_11.ggType='image';
		hs ='position:absolute;';
		hs+='left: 117px;';
		hs+='top:  233px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._room_u_11.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._room_u_11.setAttribute('style',hs);
		this._room_u_11__img=document.createElement('img');
		this._room_u_11__img.className='ggskin ggskin_image';
		this._room_u_11__img.setAttribute('src',basePath + 'images/room_u_11.png');
		this._room_u_11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._room_u_11__img.className='ggskin ggskin_image';
		this._room_u_11__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._room_u_11__img);
		this._room_u_11.appendChild(this._room_u_11__img);
		this._room_u_11.onclick=function () {
			me.player.openNext("U_11_out.xml","");
			me._current_selectionu.style[domTransition]='none';
			me._current_selectionu.ggParameter.rx=117;me._current_selectionu.ggParameter.ry=233;
			me._current_selectionu.style[domTransform]=parameterToTransform(me._current_selectionu.ggParameter);
			me._orientierungu.style[domTransition]='none';
			me._orientierungu.ggParameter.rx=117;me._orientierungu.ggParameter.ry=233;
			me._orientierungu.style[domTransform]=parameterToTransform(me._orientierungu.ggParameter);
		}
		this._room_u_11.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._room_u_11.style[domTransition]='none';
			} else {
				me._room_u_11.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_u_11.ggParameter.sx=0.3;me._room_u_11.ggParameter.sy=0.3;
			me._room_u_11.style[domTransform]=parameterToTransform(me._room_u_11.ggParameter);
		}
		this._room_u_11.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._room_u_11.style[domTransition]='none';
			} else {
				me._room_u_11.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._room_u_11.ggParameter.sx=0.2;me._room_u_11.ggParameter.sy=0.2;
			me._room_u_11.style[domTransform]=parameterToTransform(me._room_u_11.ggParameter);
		}
		this._map_1_spots.appendChild(this._room_u_11);
		this._u_stairs_up=document.createElement('div');
		this._u_stairs_up.ggId="U_stairs_up";
		this._u_stairs_up.ggParameter={ rx:0,ry:0,a:0,sx:0.05,sy:0.05 };
		this._u_stairs_up.ggVisible=true;
		this._u_stairs_up.className='ggskin ggskin_image';
		this._u_stairs_up.ggType='image';
		this._u_stairs_up.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(81 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-143 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 81px;';
		hs+='top:  -143px;';
		hs+='width: 570px;';
		hs+='height: 599px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._u_stairs_up.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._u_stairs_up.setAttribute('style',hs);
		this._u_stairs_up__img=document.createElement('img');
		this._u_stairs_up__img.className='ggskin ggskin_image';
		this._u_stairs_up__img.setAttribute('src',basePath + 'images/u_stairs_up.png');
		this._u_stairs_up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._u_stairs_up__img.className='ggskin ggskin_image';
		this._u_stairs_up__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._u_stairs_up__img);
		this._u_stairs_up.appendChild(this._u_stairs_up__img);
		this._u_stairs_up.onclick=function () {
			me._up_eg.onclick();
		}
		this._u_stairs_up.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._u_stairs_up.style[domTransition]='none';
			} else {
				me._u_stairs_up.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._u_stairs_up.ggParameter.sx=0.08;me._u_stairs_up.ggParameter.sy=0.08;
			me._u_stairs_up.style[domTransform]=parameterToTransform(me._u_stairs_up.ggParameter);
		}
		this._u_stairs_up.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._u_stairs_up.style[domTransition]='none';
			} else {
				me._u_stairs_up.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._u_stairs_up.ggParameter.sx=0.05;me._u_stairs_up.ggParameter.sy=0.05;
			me._u_stairs_up.style[domTransform]=parameterToTransform(me._u_stairs_up.ggParameter);
		}
		this._map_1_spots.appendChild(this._u_stairs_up);
		this._u_stairs_down=document.createElement('div');
		this._u_stairs_down.ggId="U_stairs_down";
		this._u_stairs_down.ggParameter={ rx:0,ry:0,a:0,sx:0.05,sy:0.05 };
		this._u_stairs_down.ggVisible=false;
		this._u_stairs_down.className='ggskin ggskin_image';
		this._u_stairs_down.ggType='image';
		this._u_stairs_down.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(340 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(-148 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 340px;';
		hs+='top:  -148px;';
		hs+='width: 600px;';
		hs+='height: 569px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._u_stairs_down.ggParameter) + ';';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='cursor: pointer;';
		this._u_stairs_down.setAttribute('style',hs);
		this._u_stairs_down__img=document.createElement('img');
		this._u_stairs_down__img.className='ggskin ggskin_image';
		this._u_stairs_down__img.setAttribute('src',basePath + 'images/u_stairs_down.png');
		this._u_stairs_down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._u_stairs_down__img.className='ggskin ggskin_image';
		this._u_stairs_down__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._u_stairs_down__img);
		this._u_stairs_down.appendChild(this._u_stairs_down__img);
		this._u_stairs_down.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._u_stairs_down.style[domTransition]='none';
			} else {
				me._u_stairs_down.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._u_stairs_down.ggParameter.sx=0.08;me._u_stairs_down.ggParameter.sy=0.08;
			me._u_stairs_down.style[domTransform]=parameterToTransform(me._u_stairs_down.ggParameter);
		}
		this._u_stairs_down.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._u_stairs_down.style[domTransition]='none';
			} else {
				me._u_stairs_down.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._u_stairs_down.ggParameter.sx=0.05;me._u_stairs_down.ggParameter.sy=0.05;
			me._u_stairs_down.style[domTransform]=parameterToTransform(me._u_stairs_down.ggParameter);
		}
		this._map_1_spots.appendChild(this._u_stairs_down);
		this._orientierungu=document.createElement('div');
		this._orientierungu.ggId="OrientierungU";
		this._orientierungu.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._orientierungu.ggVisible=true;
		this._orientierungu.className='ggskin ggskin_image';
		this._orientierungu.ggType='image';
		this._orientierungu.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._orientierungu.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._orientierungu.setAttribute('style',hs);
		this._orientierungu__img=document.createElement('img');
		this._orientierungu__img.className='ggskin ggskin_image';
		this._orientierungu__img.setAttribute('src',basePath + 'images/orientierungu.png');
		this._orientierungu__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._orientierungu__img.className='ggskin ggskin_image';
		this._orientierungu__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._orientierungu__img);
		this._orientierungu.appendChild(this._orientierungu__img);
		this._arrow0=document.createElement('div');
		this._arrow0.ggId="Arrow";
		this._arrow0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._arrow0.ggVisible=true;
		this._arrow0.className='ggskin ggskin_image';
		this._arrow0.ggType='image';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -100px;';
		hs+='width: 120px;';
		hs+='height: 120px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._arrow0.setAttribute('style',hs);
		this._arrow0__img=document.createElement('img');
		this._arrow0__img.className='ggskin ggskin_image';
		this._arrow0__img.setAttribute('src',basePath + 'images/arrow0.png');
		this._arrow0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._arrow0__img.className='ggskin ggskin_image';
		this._arrow0__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._arrow0__img);
		this._arrow0.appendChild(this._arrow0__img);
		this._orientierungu.appendChild(this._arrow0);
		this._map_1_spots.appendChild(this._orientierungu);
		this._current_selectionu=document.createElement('div');
		this._current_selectionu.ggId="Current_SelectionU";
		this._current_selectionu.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
		this._current_selectionu.ggVisible=true;
		this._current_selectionu.className='ggskin ggskin_image';
		this._current_selectionu.ggType='image';
		hs ='position:absolute;';
		hs+='left: -86px;';
		hs+='top:  25px;';
		hs+='width: 300px;';
		hs+='height: 400px;';
		hs+=cssPrefix + 'transform-origin: 50% 0%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._current_selectionu.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._current_selectionu.setAttribute('style',hs);
		this._current_selectionu__img=document.createElement('img');
		this._current_selectionu__img.className='ggskin ggskin_image';
		this._current_selectionu__img.setAttribute('src',basePath + 'images/current_selectionu.png');
		this._current_selectionu__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._current_selectionu__img.className='ggskin ggskin_image';
		this._current_selectionu__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._current_selectionu__img);
		this._current_selectionu.appendChild(this._current_selectionu__img);
		this._map_1_spots.appendChild(this._current_selectionu);
		this._map_keller.appendChild(this._map_1_spots);
		this._mapholder.appendChild(this._map_keller);
		this._map_draussen=document.createElement('div');
		this._map_draussen.ggId="Map_Draussen";
		this._map_draussen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._map_draussen.ggVisible=true;
		this._map_draussen.className='ggskin ggskin_container';
		this._map_draussen.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  2px;';
		hs+='width: 1px;';
		hs+='height: 1px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._map_draussen.setAttribute('style',hs);
		this._map_draussen_=document.createElement('div');
		this._map_draussen_.ggId="Map_Draussen_";
		this._map_draussen_.ggParameter={ rx:0,ry:0,a:0,sx:0.09,sy:0.09 };
		this._map_draussen_.ggVisible=true;
		this._map_draussen_.className='ggskin ggskin_image';
		this._map_draussen_.ggType='image';
		hs ='position:absolute;';
		hs+='left: 200px;';
		hs+='top:  9px;';
		hs+='width: 5430px;';
		hs+='height: 4226px;';
		hs+=cssPrefix + 'transform-origin: 0% 0%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._map_draussen_.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._map_draussen_.setAttribute('style',hs);
		this._map_draussen___img=document.createElement('img');
		this._map_draussen___img.className='ggskin ggskin_image';
		this._map_draussen___img.setAttribute('src',basePath + 'images/map_draussen_.png');
		this._map_draussen___img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._map_draussen___img.className='ggskin ggskin_image';
		this._map_draussen___img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._map_draussen___img);
		this._map_draussen_.appendChild(this._map_draussen___img);
		this._map_draussen.appendChild(this._map_draussen_);
		this._map_d_spots=document.createElement('div');
		this._map_d_spots.ggId="Map_D_Spots";
		this._map_d_spots.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._map_d_spots.ggVisible=true;
		this._map_d_spots.className='ggskin ggskin_container';
		this._map_d_spots.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 1px;';
		hs+='height: 1px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._map_d_spots.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._map_d_spots.setAttribute('style',hs);
		this._d_haupteingang=document.createElement('div');
		this._d_haupteingang.ggId="D_Haupteingang";
		this._d_haupteingang.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._d_haupteingang.ggVisible=true;
		this._d_haupteingang.className='ggskin ggskin_image';
		this._d_haupteingang.ggType='image';
		hs ='position:absolute;';
		hs+='left: 381px;';
		hs+='top:  339px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._d_haupteingang.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._d_haupteingang.setAttribute('style',hs);
		this._d_haupteingang__img=document.createElement('img');
		this._d_haupteingang__img.className='ggskin ggskin_image';
		this._d_haupteingang__img.setAttribute('src',basePath + 'images/d_haupteingang.png');
		this._d_haupteingang__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._d_haupteingang__img.className='ggskin ggskin_image';
		this._d_haupteingang__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._d_haupteingang__img);
		this._d_haupteingang.appendChild(this._d_haupteingang__img);
		this._d_haupteingang.onclick=function () {
			me.player.openNext("D_Haupteingang_out.xml","");
			me._current_selectiond.style[domTransition]='none';
			me._current_selectiond.ggParameter.rx=381;me._current_selectiond.ggParameter.ry=339;
			me._current_selectiond.style[domTransform]=parameterToTransform(me._current_selectiond.ggParameter);
			me._orientierungd.style[domTransition]='none';
			me._orientierungd.ggParameter.rx=381;me._orientierungd.ggParameter.ry=339;
			me._orientierungd.style[domTransform]=parameterToTransform(me._orientierungd.ggParameter);
		}
		this._d_haupteingang.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._d_haupteingang.style[domTransition]='none';
			} else {
				me._d_haupteingang.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._d_haupteingang.ggParameter.sx=0.3;me._d_haupteingang.ggParameter.sy=0.3;
			me._d_haupteingang.style[domTransform]=parameterToTransform(me._d_haupteingang.ggParameter);
		}
		this._d_haupteingang.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._d_haupteingang.style[domTransition]='none';
			} else {
				me._d_haupteingang.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._d_haupteingang.ggParameter.sx=0.2;me._d_haupteingang.ggParameter.sy=0.2;
			me._d_haupteingang.style[domTransform]=parameterToTransform(me._d_haupteingang.ggParameter);
		}
		this._map_d_spots.appendChild(this._d_haupteingang);
		this._d_pausenhof=document.createElement('div');
		this._d_pausenhof.ggId="D_Pausenhof";
		this._d_pausenhof.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._d_pausenhof.ggVisible=true;
		this._d_pausenhof.className='ggskin ggskin_image';
		this._d_pausenhof.ggType='image';
		hs ='position:absolute;';
		hs+='left: 509px;';
		hs+='top:  323px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._d_pausenhof.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._d_pausenhof.setAttribute('style',hs);
		this._d_pausenhof__img=document.createElement('img');
		this._d_pausenhof__img.className='ggskin ggskin_image';
		this._d_pausenhof__img.setAttribute('src',basePath + 'images/d_pausenhof.png');
		this._d_pausenhof__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._d_pausenhof__img.className='ggskin ggskin_image';
		this._d_pausenhof__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._d_pausenhof__img);
		this._d_pausenhof.appendChild(this._d_pausenhof__img);
		this._d_pausenhof.onclick=function () {
			me.player.openNext("D_Pausenhof_out.xml","");
			me._current_selectiond.style[domTransition]='none';
			me._current_selectiond.ggParameter.rx=509;me._current_selectiond.ggParameter.ry=323;
			me._current_selectiond.style[domTransform]=parameterToTransform(me._current_selectiond.ggParameter);
			me._orientierungd.style[domTransition]='none';
			me._orientierungd.ggParameter.rx=509;me._orientierungd.ggParameter.ry=323;
			me._orientierungd.style[domTransform]=parameterToTransform(me._orientierungd.ggParameter);
		}
		this._d_pausenhof.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._d_pausenhof.style[domTransition]='none';
			} else {
				me._d_pausenhof.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._d_pausenhof.ggParameter.sx=0.3;me._d_pausenhof.ggParameter.sy=0.3;
			me._d_pausenhof.style[domTransform]=parameterToTransform(me._d_pausenhof.ggParameter);
		}
		this._d_pausenhof.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._d_pausenhof.style[domTransition]='none';
			} else {
				me._d_pausenhof.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._d_pausenhof.ggParameter.sx=0.2;me._d_pausenhof.ggParameter.sy=0.2;
			me._d_pausenhof.style[domTransform]=parameterToTransform(me._d_pausenhof.ggParameter);
		}
		this._map_d_spots.appendChild(this._d_pausenhof);
		this._d_roterplatz=document.createElement('div');
		this._d_roterplatz.ggId="D_Roterplatz";
		this._d_roterplatz.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._d_roterplatz.ggVisible=true;
		this._d_roterplatz.className='ggskin ggskin_image';
		this._d_roterplatz.ggType='image';
		hs ='position:absolute;';
		hs+='left: 603px;';
		hs+='top:  257px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._d_roterplatz.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._d_roterplatz.setAttribute('style',hs);
		this._d_roterplatz__img=document.createElement('img');
		this._d_roterplatz__img.className='ggskin ggskin_image';
		this._d_roterplatz__img.setAttribute('src',basePath + 'images/d_roterplatz.png');
		this._d_roterplatz__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._d_roterplatz__img.className='ggskin ggskin_image';
		this._d_roterplatz__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._d_roterplatz__img);
		this._d_roterplatz.appendChild(this._d_roterplatz__img);
		this._d_roterplatz.onclick=function () {
			me.player.openNext("D_Roterplatz_out.xml","");
			me._current_selectiond.style[domTransition]='none';
			me._current_selectiond.ggParameter.rx=603;me._current_selectiond.ggParameter.ry=257;
			me._current_selectiond.style[domTransform]=parameterToTransform(me._current_selectiond.ggParameter);
			me._orientierungd.style[domTransition]='none';
			me._orientierungd.ggParameter.rx=603;me._orientierungd.ggParameter.ry=257;
			me._orientierungd.style[domTransform]=parameterToTransform(me._orientierungd.ggParameter);
		}
		this._d_roterplatz.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._d_roterplatz.style[domTransition]='none';
			} else {
				me._d_roterplatz.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._d_roterplatz.ggParameter.sx=0.3;me._d_roterplatz.ggParameter.sy=0.3;
			me._d_roterplatz.style[domTransform]=parameterToTransform(me._d_roterplatz.ggParameter);
		}
		this._d_roterplatz.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._d_roterplatz.style[domTransition]='none';
			} else {
				me._d_roterplatz.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._d_roterplatz.ggParameter.sx=0.2;me._d_roterplatz.ggParameter.sy=0.2;
			me._d_roterplatz.style[domTransform]=parameterToTransform(me._d_roterplatz.ggParameter);
		}
		this._map_d_spots.appendChild(this._d_roterplatz);
		this._d_vorschulwald=document.createElement('div');
		this._d_vorschulwald.ggId="D_Vorschulwald";
		this._d_vorschulwald.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._d_vorschulwald.ggVisible=true;
		this._d_vorschulwald.className='ggskin ggskin_image';
		this._d_vorschulwald.ggType='image';
		hs ='position:absolute;';
		hs+='left: 570px;';
		hs+='top:  49px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._d_vorschulwald.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._d_vorschulwald.setAttribute('style',hs);
		this._d_vorschulwald__img=document.createElement('img');
		this._d_vorschulwald__img.className='ggskin ggskin_image';
		this._d_vorschulwald__img.setAttribute('src',basePath + 'images/d_vorschulwald.png');
		this._d_vorschulwald__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._d_vorschulwald__img.className='ggskin ggskin_image';
		this._d_vorschulwald__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._d_vorschulwald__img);
		this._d_vorschulwald.appendChild(this._d_vorschulwald__img);
		this._d_vorschulwald.onclick=function () {
			me.player.openNext("D_Vorschulwald_out.xml","");
			me._current_selectiond.style[domTransition]='none';
			me._current_selectiond.ggParameter.rx=570;me._current_selectiond.ggParameter.ry=49;
			me._current_selectiond.style[domTransform]=parameterToTransform(me._current_selectiond.ggParameter);
			me._orientierungd.style[domTransition]='none';
			me._orientierungd.ggParameter.rx=570;me._orientierungd.ggParameter.ry=49;
			me._orientierungd.style[domTransform]=parameterToTransform(me._orientierungd.ggParameter);
		}
		this._d_vorschulwald.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._d_vorschulwald.style[domTransition]='none';
			} else {
				me._d_vorschulwald.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._d_vorschulwald.ggParameter.sx=0.3;me._d_vorschulwald.ggParameter.sy=0.3;
			me._d_vorschulwald.style[domTransform]=parameterToTransform(me._d_vorschulwald.ggParameter);
		}
		this._d_vorschulwald.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._d_vorschulwald.style[domTransition]='none';
			} else {
				me._d_vorschulwald.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._d_vorschulwald.ggParameter.sx=0.2;me._d_vorschulwald.ggParameter.sy=0.2;
			me._d_vorschulwald.style[domTransform]=parameterToTransform(me._d_vorschulwald.ggParameter);
		}
		this._map_d_spots.appendChild(this._d_vorschulwald);
		this._d_schulwald=document.createElement('div');
		this._d_schulwald.ggId="D_Schulwald";
		this._d_schulwald.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._d_schulwald.ggVisible=true;
		this._d_schulwald.className='ggskin ggskin_image';
		this._d_schulwald.ggType='image';
		hs ='position:absolute;';
		hs+='left: 610px;';
		hs+='top:  29px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._d_schulwald.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._d_schulwald.setAttribute('style',hs);
		this._d_schulwald__img=document.createElement('img');
		this._d_schulwald__img.className='ggskin ggskin_image';
		this._d_schulwald__img.setAttribute('src',basePath + 'images/d_schulwald.png');
		this._d_schulwald__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._d_schulwald__img.className='ggskin ggskin_image';
		this._d_schulwald__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._d_schulwald__img);
		this._d_schulwald.appendChild(this._d_schulwald__img);
		this._d_schulwald.onclick=function () {
			me.player.openNext("D_Schulwald_out.xml","");
			me._current_selectiond.style[domTransition]='none';
			me._current_selectiond.ggParameter.rx=610;me._current_selectiond.ggParameter.ry=29;
			me._current_selectiond.style[domTransform]=parameterToTransform(me._current_selectiond.ggParameter);
			me._orientierungd.style[domTransition]='none';
			me._orientierungd.ggParameter.rx=610;me._orientierungd.ggParameter.ry=29;
			me._orientierungd.style[domTransform]=parameterToTransform(me._orientierungd.ggParameter);
		}
		this._d_schulwald.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._d_schulwald.style[domTransition]='none';
			} else {
				me._d_schulwald.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._d_schulwald.ggParameter.sx=0.3;me._d_schulwald.ggParameter.sy=0.3;
			me._d_schulwald.style[domTransform]=parameterToTransform(me._d_schulwald.ggParameter);
		}
		this._d_schulwald.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._d_schulwald.style[domTransition]='none';
			} else {
				me._d_schulwald.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._d_schulwald.ggParameter.sx=0.2;me._d_schulwald.ggParameter.sy=0.2;
			me._d_schulwald.style[domTransform]=parameterToTransform(me._d_schulwald.ggParameter);
		}
		this._map_d_spots.appendChild(this._d_schulwald);
		this._d_vorschule=document.createElement('div');
		this._d_vorschule.ggId="D_Vorschule";
		this._d_vorschule.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._d_vorschule.ggVisible=true;
		this._d_vorschule.className='ggskin ggskin_image';
		this._d_vorschule.ggType='image';
		hs ='position:absolute;';
		hs+='left: 300px;';
		hs+='top:  369px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._d_vorschule.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._d_vorschule.setAttribute('style',hs);
		this._d_vorschule__img=document.createElement('img');
		this._d_vorschule__img.className='ggskin ggskin_image';
		this._d_vorschule__img.setAttribute('src',basePath + 'images/d_vorschule.png');
		this._d_vorschule__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._d_vorschule__img.className='ggskin ggskin_image';
		this._d_vorschule__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._d_vorschule__img);
		this._d_vorschule.appendChild(this._d_vorschule__img);
		this._d_vorschule.onclick=function () {
			me.player.openNext("D_Vorschule_out.xml","");
			me._current_selectiond.style[domTransition]='none';
			me._current_selectiond.ggParameter.rx=300;me._current_selectiond.ggParameter.ry=369;
			me._current_selectiond.style[domTransform]=parameterToTransform(me._current_selectiond.ggParameter);
			me._orientierungd.style[domTransition]='none';
			me._orientierungd.ggParameter.rx=300;me._orientierungd.ggParameter.ry=369;
			me._orientierungd.style[domTransform]=parameterToTransform(me._orientierungd.ggParameter);
		}
		this._d_vorschule.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._d_vorschule.style[domTransition]='none';
			} else {
				me._d_vorschule.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._d_vorschule.ggParameter.sx=0.3;me._d_vorschule.ggParameter.sy=0.3;
			me._d_vorschule.style[domTransform]=parameterToTransform(me._d_vorschule.ggParameter);
		}
		this._d_vorschule.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._d_vorschule.style[domTransition]='none';
			} else {
				me._d_vorschule.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._d_vorschule.ggParameter.sx=0.2;me._d_vorschule.ggParameter.sy=0.2;
			me._d_vorschule.style[domTransform]=parameterToTransform(me._d_vorschule.ggParameter);
		}
		this._map_d_spots.appendChild(this._d_vorschule);
		this._d_turnhalle=document.createElement('div');
		this._d_turnhalle.ggId="D_Turnhalle";
		this._d_turnhalle.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._d_turnhalle.ggVisible=true;
		this._d_turnhalle.className='ggskin ggskin_image';
		this._d_turnhalle.ggType='image';
		hs ='position:absolute;';
		hs+='left: 270px;';
		hs+='top:  204px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._d_turnhalle.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._d_turnhalle.setAttribute('style',hs);
		this._d_turnhalle__img=document.createElement('img');
		this._d_turnhalle__img.className='ggskin ggskin_image';
		this._d_turnhalle__img.setAttribute('src',basePath + 'images/d_turnhalle.png');
		this._d_turnhalle__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._d_turnhalle__img.className='ggskin ggskin_image';
		this._d_turnhalle__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._d_turnhalle__img);
		this._d_turnhalle.appendChild(this._d_turnhalle__img);
		this._d_turnhalle.onclick=function () {
			me.player.openNext("D_Turnhalle_out.xml","");
			me._current_selectiond.style[domTransition]='none';
			me._current_selectiond.ggParameter.rx=270;me._current_selectiond.ggParameter.ry=204;
			me._current_selectiond.style[domTransform]=parameterToTransform(me._current_selectiond.ggParameter);
			me._orientierungd.style[domTransition]='none';
			me._orientierungd.ggParameter.rx=270;me._orientierungd.ggParameter.ry=204;
			me._orientierungd.style[domTransform]=parameterToTransform(me._orientierungd.ggParameter);
		}
		this._d_turnhalle.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._d_turnhalle.style[domTransition]='none';
			} else {
				me._d_turnhalle.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._d_turnhalle.ggParameter.sx=0.3;me._d_turnhalle.ggParameter.sy=0.3;
			me._d_turnhalle.style[domTransform]=parameterToTransform(me._d_turnhalle.ggParameter);
		}
		this._d_turnhalle.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._d_turnhalle.style[domTransition]='none';
			} else {
				me._d_turnhalle.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._d_turnhalle.ggParameter.sx=0.2;me._d_turnhalle.ggParameter.sy=0.2;
			me._d_turnhalle.style[domTransform]=parameterToTransform(me._d_turnhalle.ggParameter);
		}
		this._map_d_spots.appendChild(this._d_turnhalle);
		this._orientierungd=document.createElement('div');
		this._orientierungd.ggId="OrientierungD";
		this._orientierungd.ggParameter={ rx:0,ry:0,a:0,sx:0.2,sy:0.2 };
		this._orientierungd.ggVisible=true;
		this._orientierungd.className='ggskin ggskin_image';
		this._orientierungd.ggType='image';
		this._orientierungd.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=Math.floor(0 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=Math.floor(0 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 128px;';
		hs+='height: 128px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._orientierungd.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._orientierungd.setAttribute('style',hs);
		this._orientierungd__img=document.createElement('img');
		this._orientierungd__img.className='ggskin ggskin_image';
		this._orientierungd__img.setAttribute('src',basePath + 'images/orientierungd.png');
		this._orientierungd__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._orientierungd__img.className='ggskin ggskin_image';
		this._orientierungd__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._orientierungd__img);
		this._orientierungd.appendChild(this._orientierungd__img);
		this._arrow=document.createElement('div');
		this._arrow.ggId="Arrow";
		this._arrow.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._arrow.ggVisible=true;
		this._arrow.className='ggskin ggskin_image';
		this._arrow.ggType='image';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -100px;';
		hs+='width: 120px;';
		hs+='height: 120px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._arrow.setAttribute('style',hs);
		this._arrow__img=document.createElement('img');
		this._arrow__img.className='ggskin ggskin_image';
		this._arrow__img.setAttribute('src',basePath + 'images/arrow.png');
		this._arrow__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._arrow__img.className='ggskin ggskin_image';
		this._arrow__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._arrow__img);
		this._arrow.appendChild(this._arrow__img);
		this._orientierungd.appendChild(this._arrow);
		this._map_d_spots.appendChild(this._orientierungd);
		this._current_selectiond=document.createElement('div');
		this._current_selectiond.ggId="Current_SelectionD";
		this._current_selectiond.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
		this._current_selectiond.ggVisible=true;
		this._current_selectiond.className='ggskin ggskin_image';
		this._current_selectiond.ggType='image';
		hs ='position:absolute;';
		hs+='left: -86px;';
		hs+='top:  25px;';
		hs+='width: 300px;';
		hs+='height: 400px;';
		hs+=cssPrefix + 'transform-origin: 50% 0%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._current_selectiond.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._current_selectiond.setAttribute('style',hs);
		this._current_selectiond__img=document.createElement('img');
		this._current_selectiond__img.className='ggskin ggskin_image';
		this._current_selectiond__img.setAttribute('src',basePath + 'images/current_selectiond.png');
		this._current_selectiond__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._current_selectiond__img.className='ggskin ggskin_image';
		this._current_selectiond__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._current_selectiond__img);
		this._current_selectiond.appendChild(this._current_selectiond__img);
		this._map_d_spots.appendChild(this._current_selectiond);
		this._map_draussen.appendChild(this._map_d_spots);
		this._mapholder.appendChild(this._map_draussen);
		this._closemap=document.createElement('div');
		this._closemap.ggId="CloseMap";
		this._closemap.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._closemap.ggVisible=true;
		this._closemap.className='ggskin ggskin_image';
		this._closemap.ggType='image';
		hs ='position:absolute;';
		hs+='left: -27px;';
		hs+='top:  -23px;';
		hs+='width: 120px;';
		hs+='height: 120px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._closemap.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._closemap.setAttribute('style',hs);
		this._closemap__img=document.createElement('img');
		this._closemap__img.className='ggskin ggskin_image';
		this._closemap__img.setAttribute('src',basePath + 'images/closemap.png');
		this._closemap__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._closemap__img.className='ggskin ggskin_image';
		this._closemap__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._closemap__img);
		this._closemap.appendChild(this._closemap__img);
		this._closemap.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._mapholder.style[domTransition]='none';
			} else {
				me._mapholder.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapholder.style.opacity='0';
			me._mapholder.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._openmap.style[domTransition]='none';
			} else {
				me._openmap.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._openmap.style.opacity='1';
			me._openmap.style.visibility=me._openmap.ggVisible?'inherit':'hidden';
		}
		this._closemap.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._closemap.style[domTransition]='none';
			} else {
				me._closemap.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._closemap.ggParameter.sx=0.5;me._closemap.ggParameter.sy=0.5;
			me._closemap.style[domTransform]=parameterToTransform(me._closemap.ggParameter);
		}
		this._closemap.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._closemap.style[domTransition]='none';
			} else {
				me._closemap.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._closemap.ggParameter.sx=0.4;me._closemap.ggParameter.sy=0.4;
			me._closemap.style[domTransform]=parameterToTransform(me._closemap.ggParameter);
		}
		this._mapholder.appendChild(this._closemap);
		this._karte_vergroesern_button=document.createElement('div');
		this._karte_vergroesern_button__text=document.createElement('div');
		this._karte_vergroesern_button.className='ggskin ggskin_textdiv';
		this._karte_vergroesern_button.ggTextDiv=this._karte_vergroesern_button__text;
		this._karte_vergroesern_button.ggId="Karte_Vergroesern_Button";
		this._karte_vergroesern_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._karte_vergroesern_button.ggVisible=true;
		this._karte_vergroesern_button.className='ggskin ggskin_text';
		this._karte_vergroesern_button.ggType='text';
		this._karte_vergroesern_button.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=Math.floor(0 + (170-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 7px;';
		hs+='top:  369px;';
		hs+='width: 152px;';
		hs+='height: 25px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.9;';
		hs+='visibility: inherit;';
		this._karte_vergroesern_button.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='border: 8px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._karte_vergroesern_button__text.setAttribute('style',hs);
		this._karte_vergroesern_button.ggTextDiv.innerHTML="<div style=\"font-size:15px;color:white\"><b>Karte vergr\xf6\xdfern<\/b><\/div>";
		this._karte_vergroesern_button.appendChild(this._karte_vergroesern_button__text);
		this._karte_vergroesern_button.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._mapholder.style[domTransition]='none';
			} else {
				me._mapholder.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapholder.ggParameter.sx=1;me._mapholder.ggParameter.sy=1;
			me._mapholder.style[domTransform]=parameterToTransform(me._mapholder.ggParameter);
			flag=(me._karte_vergroesern_button.style.visibility=='hidden');
			me._karte_vergroesern_button.style[domTransition]='none';
			me._karte_vergroesern_button.style.visibility=flag?'inherit':'hidden';
			me._karte_vergroesern_button.ggVisible=flag;
			flag=(me._karte_verkleinern_button.style.visibility=='hidden');
			me._karte_verkleinern_button.style[domTransition]='none';
			me._karte_verkleinern_button.style.visibility=flag?'inherit':'hidden';
			me._karte_verkleinern_button.ggVisible=flag;
		}
		this._karte_vergroesern_button.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._karte_vergroesern_button.style[domTransition]='none';
			} else {
				me._karte_vergroesern_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._karte_vergroesern_button.ggParameter.sx=1.1;me._karte_vergroesern_button.ggParameter.sy=1.1;
			me._karte_vergroesern_button.style[domTransform]=parameterToTransform(me._karte_vergroesern_button.ggParameter);
		}
		this._karte_vergroesern_button.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._karte_vergroesern_button.style[domTransition]='none';
			} else {
				me._karte_vergroesern_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._karte_vergroesern_button.ggParameter.sx=1;me._karte_vergroesern_button.ggParameter.sy=1;
			me._karte_vergroesern_button.style[domTransform]=parameterToTransform(me._karte_vergroesern_button.ggParameter);
		}
		this._mapholder.appendChild(this._karte_vergroesern_button);
		this._karte_verkleinern_button=document.createElement('div');
		this._karte_verkleinern_button__text=document.createElement('div');
		this._karte_verkleinern_button.className='ggskin ggskin_textdiv';
		this._karte_verkleinern_button.ggTextDiv=this._karte_verkleinern_button__text;
		this._karte_verkleinern_button.ggId="Karte_Verkleinern_Button";
		this._karte_verkleinern_button.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._karte_verkleinern_button.ggVisible=false;
		this._karte_verkleinern_button.className='ggskin ggskin_text';
		this._karte_verkleinern_button.ggType='text';
		this._karte_verkleinern_button.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=Math.floor(0 + (170-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		hs ='position:absolute;';
		hs+='left: 7px;';
		hs+='top:  369px;';
		hs+='width: 152px;';
		hs+='height: 25px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.8;';
		hs+='visibility: hidden;';
		this._karte_verkleinern_button.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #000000;';
		hs+='border: 8px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._karte_verkleinern_button__text.setAttribute('style',hs);
		this._karte_verkleinern_button.ggTextDiv.innerHTML="<div style=\"font-size:15px;color:white\"><b>Karte verkleinern<\/b><\/div>";
		this._karte_verkleinern_button.appendChild(this._karte_verkleinern_button__text);
		this._karte_verkleinern_button.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._mapholder.style[domTransition]='none';
			} else {
				me._mapholder.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapholder.ggParameter.sx=0.5;me._mapholder.ggParameter.sy=0.5;
			me._mapholder.style[domTransform]=parameterToTransform(me._mapholder.ggParameter);
			flag=(me._karte_verkleinern_button.style.visibility=='hidden');
			me._karte_verkleinern_button.style[domTransition]='none';
			me._karte_verkleinern_button.style.visibility=flag?'inherit':'hidden';
			me._karte_verkleinern_button.ggVisible=flag;
			flag=(me._karte_vergroesern_button.style.visibility=='hidden');
			me._karte_vergroesern_button.style[domTransition]='none';
			me._karte_vergroesern_button.style.visibility=flag?'inherit':'hidden';
			me._karte_vergroesern_button.ggVisible=flag;
		}
		this._karte_verkleinern_button.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._karte_verkleinern_button.style[domTransition]='none';
			} else {
				me._karte_verkleinern_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._karte_verkleinern_button.ggParameter.sx=1.1;me._karte_verkleinern_button.ggParameter.sy=1.1;
			me._karte_verkleinern_button.style[domTransform]=parameterToTransform(me._karte_verkleinern_button.ggParameter);
		}
		this._karte_verkleinern_button.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._karte_verkleinern_button.style[domTransition]='none';
			} else {
				me._karte_verkleinern_button.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._karte_verkleinern_button.ggParameter.sx=1;me._karte_verkleinern_button.ggParameter.sy=1;
			me._karte_verkleinern_button.style[domTransform]=parameterToTransform(me._karte_verkleinern_button.ggParameter);
		}
		this._mapholder.appendChild(this._karte_verkleinern_button);
		this._button_draussen=document.createElement('div');
		this._button_draussen__text=document.createElement('div');
		this._button_draussen.className='ggskin ggskin_textdiv';
		this._button_draussen.ggTextDiv=this._button_draussen__text;
		this._button_draussen.ggId="Button_Draussen";
		this._button_draussen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_draussen.ggVisible=true;
		this._button_draussen.className='ggskin ggskin_text';
		this._button_draussen.ggType='text';
		hs ='position:absolute;';
		hs+='left: 1077px;';
		hs+='top:  362px;';
		hs+='width: 169px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._button_draussen.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 169px;';
		hs+='height: 23px;';
		hs+='background: #000000;';
		hs+='border: 8px solid #000000;';
		hs+='border-radius: 4px;';
		hs+=cssPrefix + 'border-radius: 4px;';
		hs+='color: #e8e8e8;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._button_draussen__text.setAttribute('style',hs);
		this._button_draussen.ggTextDiv.innerHTML="Nach Drau\xdfen";
		this._button_draussen.appendChild(this._button_draussen__text);
		this._button_draussen.onclick=function () {
			me._stockwerk_wechsel_text.style[domTransition]='none';
			me._stockwerk_wechsel_text.style.visibility='hidden';
			me._stockwerk_wechsel_text.ggVisible=false;
			me._map_draussen.style[domTransition]='none';
			me._map_draussen.style.visibility='inherit';
			me._map_draussen.ggVisible=true;
			me._d_haupteingang.onclick();
			me._button_draussen.style[domTransition]='none';
			me._button_draussen.style.visibility='hidden';
			me._button_draussen.ggVisible=false;
			me._button_drinnen.style[domTransition]='none';
			me._button_drinnen.style.visibility='inherit';
			me._button_drinnen.ggVisible=true;
			me._stockwerk_wechsel.style[domTransition]='none';
			me._stockwerk_wechsel.style.visibility='hidden';
			me._stockwerk_wechsel.ggVisible=false;
			me._map_keller.style[domTransition]='none';
			me._map_keller.style.visibility='hidden';
			me._map_keller.ggVisible=false;
			me._map_erdgeschoss.style[domTransition]='none';
			me._map_erdgeschoss.style.visibility='hidden';
			me._map_erdgeschoss.ggVisible=false;
			me._map_1.style[domTransition]='none';
			me._map_1.style.visibility='hidden';
			me._map_1.ggVisible=false;
			me._map_2.style[domTransition]='none';
			me._map_2.style.visibility='hidden';
			me._map_2.ggVisible=false;
			me._map_3.style[domTransition]='none';
			me._map_3.style.visibility='hidden';
			me._map_3.ggVisible=false;
		}
		this._button_draussen.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._button_draussen.style[domTransition]='none';
			} else {
				me._button_draussen.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_draussen.ggParameter.sx=1.2;me._button_draussen.ggParameter.sy=1.2;
			me._button_draussen.style[domTransform]=parameterToTransform(me._button_draussen.ggParameter);
		}
		this._button_draussen.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._button_draussen.style[domTransition]='none';
			} else {
				me._button_draussen.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_draussen.ggParameter.sx=1;me._button_draussen.ggParameter.sy=1;
			me._button_draussen.style[domTransform]=parameterToTransform(me._button_draussen.ggParameter);
		}
		this._mapholder.appendChild(this._button_draussen);
		this._button_drinnen=document.createElement('div');
		this._button_drinnen__text=document.createElement('div');
		this._button_drinnen.className='ggskin ggskin_textdiv';
		this._button_drinnen.ggTextDiv=this._button_drinnen__text;
		this._button_drinnen.ggId="Button_Drinnen";
		this._button_drinnen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_drinnen.ggVisible=true;
		this._button_drinnen.className='ggskin ggskin_text';
		this._button_drinnen.ggType='text';
		hs ='position:absolute;';
		hs+='left: 1077px;';
		hs+='top:  362px;';
		hs+='width: 171px;';
		hs+='height: 25px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._button_drinnen.setAttribute('style',hs);
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 171px;';
		hs+='height: 25px;';
		hs+='background: #000000;';
		hs+='border: 8px solid #000000;';
		hs+='border-radius: 1px;';
		hs+=cssPrefix + 'border-radius: 1px;';
		hs+='color: #e8e8e8;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._button_drinnen__text.setAttribute('style',hs);
		this._button_drinnen.ggTextDiv.innerHTML="Nach Drinnen";
		this._button_drinnen.appendChild(this._button_drinnen__text);
		this._button_drinnen.onclick=function () {
			me._button_draussen.style[domTransition]='none';
			me._button_draussen.style.visibility='inherit';
			me._button_draussen.ggVisible=true;
			me._reset.onclick();
		}
		this._button_drinnen.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._button_drinnen.style[domTransition]='none';
			} else {
				me._button_drinnen.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_drinnen.ggParameter.sx=1.2;me._button_drinnen.ggParameter.sy=1.2;
			me._button_drinnen.style[domTransform]=parameterToTransform(me._button_drinnen.ggParameter);
		}
		this._button_drinnen.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._button_drinnen.style[domTransition]='none';
			} else {
				me._button_drinnen.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._button_drinnen.ggParameter.sx=1;me._button_drinnen.ggParameter.sy=1;
			me._button_drinnen.style[domTransform]=parameterToTransform(me._button_drinnen.ggParameter);
		}
		this._mapholder.appendChild(this._button_drinnen);
		this.divSkin.appendChild(this._mapholder);
		this._reset=document.createElement('div');
		this._reset.ggId="Reset";
		this._reset.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._reset.ggVisible=true;
		this._reset.className='ggskin ggskin_container';
		this._reset.ggType='container';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 1px;';
		hs+='height: 1px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._reset.setAttribute('style',hs);
		this._reset.onclick=function () {
			me._map_keller.style[domTransition]='none';
			me._map_keller.style.visibility='inherit';
			me._map_keller.ggVisible=true;
			me._map_erdgeschoss.style[domTransition]='none';
			me._map_erdgeschoss.style.visibility='inherit';
			me._map_erdgeschoss.ggVisible=true;
			me._map_1.style[domTransition]='none';
			me._map_1.style.visibility='inherit';
			me._map_1.ggVisible=true;
			me._map_2.style[domTransition]='none';
			me._map_2.style.visibility='inherit';
			me._map_2.ggVisible=true;
			me._map_3.style[domTransition]='none';
			me._map_3.style.visibility='inherit';
			me._map_3.ggVisible=true;
			me._map_2.style[domTransition]='none';
			me._map_2.style.opacity='0';
			me._map_2.style.visibility='hidden';
			me._map_1.style[domTransition]='none';
			me._map_1.style.opacity='0';
			me._map_1.style.visibility='hidden';
			me._map_3.style[domTransition]='none';
			me._map_3.style.opacity='0';
			me._map_3.style.visibility='hidden';
			me._map_erdgeschoss.style[domTransition]='none';
			me._map_erdgeschoss.style.opacity='1';
			me._map_erdgeschoss.style.visibility=me._map_erdgeschoss.ggVisible?'inherit':'hidden';
			me._map_keller.style[domTransition]='none';
			me._map_keller.style.opacity='0';
			me._map_keller.style.visibility='hidden';
			me._stockwerk_wechsel.style[domTransition]='none';
			me._stockwerk_wechsel.style.visibility='inherit';
			me._stockwerk_wechsel.ggVisible=true;
			me._stockwerk_wechsel_text.style[domTransition]='none';
			me._stockwerk_wechsel_text.style.visibility='inherit';
			me._stockwerk_wechsel_text.ggVisible=true;
			me._button_drinnen.style[domTransition]='none';
			me._button_drinnen.style.visibility='hidden';
			me._button_drinnen.ggVisible=false;
			me._up_2.style[domTransition]='none';
			me._up_2.style.visibility='hidden';
			me._up_2.ggVisible=false;
			me._up_3.style[domTransition]='none';
			me._up_3.style.visibility='hidden';
			me._up_3.ggVisible=false;
			me._up_eg.style[domTransition]='none';
			me._up_eg.style.visibility='hidden';
			me._up_eg.ggVisible=false;
			me._do_1.style[domTransition]='none';
			me._do_1.style.visibility='hidden';
			me._do_1.ggVisible=false;
			me._do_eg.style[domTransition]='none';
			me._do_eg.style.visibility='hidden';
			me._do_eg.ggVisible=false;
			me._do_2.style[domTransition]='none';
			me._do_2.style.visibility='hidden';
			me._do_2.ggVisible=false;
			flag=(me._map_draussen.style.visibility=='hidden');
			me._map_draussen.style[domTransition]='none';
			me._map_draussen.style.visibility=flag?'inherit':'hidden';
			me._map_draussen.ggVisible=flag;
			me._openmap.onclick();
			me._stockwerk_wechsel_text.ggText="<p style=\"font-size:40px;color:white\"><b>Erdgeschoss<\/b><\/p>";
			me._stockwerk_wechsel_text.ggTextDiv.innerHTML=me._stockwerk_wechsel_text.ggText;
			if (me._stockwerk_wechsel_text.ggUpdateText) {
				me._stockwerk_wechsel_text.ggUpdateText=function() {
					var hs="<p style=\"font-size:40px;color:white\"><b>Erdgeschoss<\/b><\/p>";
					if (hs!=me._stockwerk_wechsel_text.ggText) {
						me._stockwerk_wechsel_text.ggText=hs;
						me._stockwerk_wechsel_text.ggTextDiv.innerHTML=hs;
					}
				}
			}
			me._up_1.style[domTransition]='none';
			me._up_1.style.visibility='inherit';
			me._up_1.ggVisible=true;
			me._do_ug.style[domTransition]='none';
			me._do_ug.style.visibility='inherit';
			me._do_ug.ggVisible=true;
			me._aula.onclick();
		}
		this.divSkin.appendChild(this._reset);
		this._openmap=document.createElement('div');
		this._openmap.ggId="OpenMap";
		this._openmap.ggParameter={ rx:0,ry:0,a:0,sx:0.4,sy:0.4 };
		this._openmap.ggVisible=true;
		this._openmap.className='ggskin ggskin_image';
		this._openmap.ggType='image';
		hs ='position:absolute;';
		hs+='left: -27px;';
		hs+='top:  -23px;';
		hs+='width: 120px;';
		hs+='height: 120px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._openmap.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._openmap.setAttribute('style',hs);
		this._openmap__img=document.createElement('img');
		this._openmap__img.className='ggskin ggskin_image';
		this._openmap__img.setAttribute('src',basePath + 'images/openmap.png');
		this._openmap__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
		this._openmap__img.className='ggskin ggskin_image';
		this._openmap__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._openmap__img);
		this._openmap.appendChild(this._openmap__img);
		this._openmap.onclick=function () {
			if (me.player.transitionsDisabled) {
				me._openmap.style[domTransition]='none';
			} else {
				me._openmap.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._openmap.style.opacity='0';
			me._openmap.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._mapholder.style[domTransition]='none';
			} else {
				me._mapholder.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapholder.style.opacity='1';
			me._mapholder.style.visibility=me._mapholder.ggVisible?'inherit':'hidden';
		}
		this._openmap.onmouseover=function () {
			if (me.player.transitionsDisabled) {
				me._openmap.style[domTransition]='none';
			} else {
				me._openmap.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._openmap.ggParameter.sx=0.5;me._openmap.ggParameter.sy=0.5;
			me._openmap.style[domTransform]=parameterToTransform(me._openmap.ggParameter);
		}
		this._openmap.onmouseout=function () {
			if (me.player.transitionsDisabled) {
				me._openmap.style[domTransition]='none';
			} else {
				me._openmap.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._openmap.ggParameter.sx=0.4;me._openmap.ggParameter.sy=0.4;
			me._openmap.style[domTransform]=parameterToTransform(me._openmap.ggParameter);
		}
		this.divSkin.appendChild(this._openmap);
		me._reset.onclick();
		me._current_selection3.style[domTransition]='none';
		me._current_selection3.ggParameter.rx=36;me._current_selection3.ggParameter.ry=133;
		me._current_selection3.style[domTransform]=parameterToTransform(me._current_selection3.ggParameter);
		me._orientierung3.style[domTransition]='none';
		me._orientierung3.ggParameter.rx=36;me._orientierung3.ggParameter.ry=133;
		me._orientierung3.style[domTransform]=parameterToTransform(me._orientierung3.ggParameter);
		me._current_selection2.style[domTransition]='none';
		me._current_selection2.ggParameter.rx=147;me._current_selection2.ggParameter.ry=152;
		me._current_selection2.style[domTransform]=parameterToTransform(me._current_selection2.ggParameter);
		me._orientierung2.style[domTransition]='none';
		me._orientierung2.ggParameter.rx=147;me._orientierung2.ggParameter.ry=152;
		me._orientierung2.style[domTransform]=parameterToTransform(me._orientierung2.ggParameter);
		me._current_selection2.style[domTransition]='none';
		me._current_selection2.ggParameter.rx=291;me._current_selection2.ggParameter.ry=144;
		me._current_selection2.style[domTransform]=parameterToTransform(me._current_selection2.ggParameter);
		me._orientierung2.style[domTransition]='none';
		me._orientierung2.ggParameter.rx=291;me._orientierung2.ggParameter.ry=144;
		me._orientierung2.style[domTransform]=parameterToTransform(me._orientierung2.ggParameter);
		me._current_selection1.style[domTransition]='none';
		me._current_selection1.ggParameter.rx=336;me._current_selection1.ggParameter.ry=220;
		me._current_selection1.style[domTransform]=parameterToTransform(me._current_selection1.ggParameter);
		me._orientierung1.style[domTransition]='none';
		me._orientierung1.ggParameter.rx=336;me._orientierung1.ggParameter.ry=220;
		me._orientierung1.style[domTransform]=parameterToTransform(me._orientierung1.ggParameter);
		me._current_selection1.style[domTransition]='none';
		me._current_selection1.ggParameter.rx=426;me._current_selection1.ggParameter.ry=119;
		me._current_selection1.style[domTransform]=parameterToTransform(me._current_selection1.ggParameter);
		me._orientierung1.style[domTransition]='none';
		me._orientierung1.ggParameter.rx=426;me._orientierung1.ggParameter.ry=119;
		me._orientierung1.style[domTransform]=parameterToTransform(me._orientierung1.ggParameter);
		me._current_selection1.style[domTransition]='none';
		me._current_selection1.ggParameter.rx=432;me._current_selection1.ggParameter.ry=-2;
		me._current_selection1.style[domTransform]=parameterToTransform(me._current_selection1.ggParameter);
		me._orientierung1.style[domTransition]='none';
		me._orientierung1.ggParameter.rx=432;me._orientierung1.ggParameter.ry=-2;
		me._orientierung1.style[domTransform]=parameterToTransform(me._orientierung1.ggParameter);
		me._current_selectionu.style[domTransition]='none';
		me._current_selectionu.ggParameter.rx=338;me._current_selectionu.ggParameter.ry=90;
		me._current_selectionu.style[domTransform]=parameterToTransform(me._current_selectionu.ggParameter);
		me._orientierungu.style[domTransition]='none';
		me._orientierungu.ggParameter.rx=338;me._orientierungu.ggParameter.ry=90;
		me._orientierungu.style[domTransform]=parameterToTransform(me._orientierungu.ggParameter);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		var hs='';
		if (me._orientierung3.ggParameter) {
			hs+=parameterToTransform(me._orientierung3.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 180)) + 'deg) ';
		me._orientierung3.style[domTransform]=hs;
		var hs='';
		if (me._orientierung2.ggParameter) {
			hs+=parameterToTransform(me._orientierung2.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 180)) + 'deg) ';
		me._orientierung2.style[domTransform]=hs;
		var hs='';
		if (me._orientierung1.ggParameter) {
			hs+=parameterToTransform(me._orientierung1.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 180)) + 'deg) ';
		me._orientierung1.style[domTransform]=hs;
		var hs='';
		if (me._orientierunge.ggParameter) {
			hs+=parameterToTransform(me._orientierunge.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 180)) + 'deg) ';
		me._orientierunge.style[domTransform]=hs;
		var hs='';
		if (me._orientierungu.ggParameter) {
			hs+=parameterToTransform(me._orientierungu.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 180)) + 'deg) ';
		me._orientierungu.style[domTransform]=hs;
		var hs='';
		if (me._orientierungd.ggParameter) {
			hs+=parameterToTransform(me._orientierungd.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 180)) + 'deg) ';
		me._orientierungd.style[domTransform]=hs;
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='Room_Out_3_06') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_3_06";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_3_06.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_193=document.createElement('div');
			this._image_193.ggId="Image 1";
			this._image_193.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_193.ggVisible=true;
			this._image_193.className='ggskin ggskin_image';
			this._image_193.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_193.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_193.setAttribute('style',hs);
			this._image_193__img=document.createElement('img');
			this._image_193__img.className='ggskin ggskin_image';
			this._image_193__img.setAttribute('src',basePath + 'images/image_193.png');
			this._image_193__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_193__img.className='ggskin ggskin_image';
			this._image_193__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_193__img);
			this._image_193.appendChild(this._image_193__img);
			this._image_193.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_193.style[domTransition]='none';
				} else {
					me._image_193.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_193.ggParameter.sx=0.2;me._image_193.ggParameter.sy=0.2;
				me._image_193.style[domTransform]=parameterToTransform(me._image_193.ggParameter);
				flag=(me._text_293.style.visibility=='hidden');
				me._text_293.style[domTransition]='none';
				me._text_293.style.visibility=flag?'inherit':'hidden';
				me._text_293.ggVisible=flag;
			}
			this._image_193.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_193.style[domTransition]='none';
				} else {
					me._image_193.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_193.ggParameter.sx=0.1;me._image_193.ggParameter.sy=0.1;
				me._image_193.style[domTransform]=parameterToTransform(me._image_193.ggParameter);
				flag=(me._text_293.style.visibility=='hidden');
				me._text_293.style[domTransition]='none';
				me._text_293.style.visibility=flag?'inherit':'hidden';
				me._text_293.ggVisible=flag;
			}
			this.__div.appendChild(this._image_193);
			this._text_293=document.createElement('div');
			this._text_293__text=document.createElement('div');
			this._text_293.className='ggskin ggskin_textdiv';
			this._text_293.ggTextDiv=this._text_293__text;
			this._text_293.ggId="Text 2";
			this._text_293.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_293.ggVisible=false;
			this._text_293.className='ggskin ggskin_text';
			this._text_293.ggType='text';
			this._text_293.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_293.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_293__text.setAttribute('style',hs);
			this._text_293.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_293.appendChild(this._text_293__text);
			this.__div.appendChild(this._text_293);
		} else
		if (hotspot.skinid=='Room_Out_3_16') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_3_16";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_3_16.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_192=document.createElement('div');
			this._image_192.ggId="Image 1";
			this._image_192.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_192.ggVisible=true;
			this._image_192.className='ggskin ggskin_image';
			this._image_192.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_192.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_192.setAttribute('style',hs);
			this._image_192__img=document.createElement('img');
			this._image_192__img.className='ggskin ggskin_image';
			this._image_192__img.setAttribute('src',basePath + 'images/image_192.png');
			this._image_192__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_192__img.className='ggskin ggskin_image';
			this._image_192__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_192__img);
			this._image_192.appendChild(this._image_192__img);
			this._image_192.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_192.style[domTransition]='none';
				} else {
					me._image_192.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_192.ggParameter.sx=0.2;me._image_192.ggParameter.sy=0.2;
				me._image_192.style[domTransform]=parameterToTransform(me._image_192.ggParameter);
				flag=(me._text_292.style.visibility=='hidden');
				me._text_292.style[domTransition]='none';
				me._text_292.style.visibility=flag?'inherit':'hidden';
				me._text_292.ggVisible=flag;
			}
			this._image_192.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_192.style[domTransition]='none';
				} else {
					me._image_192.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_192.ggParameter.sx=0.1;me._image_192.ggParameter.sy=0.1;
				me._image_192.style[domTransform]=parameterToTransform(me._image_192.ggParameter);
				flag=(me._text_292.style.visibility=='hidden');
				me._text_292.style[domTransition]='none';
				me._text_292.style.visibility=flag?'inherit':'hidden';
				me._text_292.ggVisible=flag;
			}
			this.__div.appendChild(this._image_192);
			this._text_292=document.createElement('div');
			this._text_292__text=document.createElement('div');
			this._text_292.className='ggskin ggskin_textdiv';
			this._text_292.ggTextDiv=this._text_292__text;
			this._text_292.ggId="Text 2";
			this._text_292.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_292.ggVisible=false;
			this._text_292.className='ggskin ggskin_text';
			this._text_292.ggType='text';
			this._text_292.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_292.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_292__text.setAttribute('style',hs);
			this._text_292.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_292.appendChild(this._text_292__text);
			this.__div.appendChild(this._text_292);
		} else
		if (hotspot.skinid=='Room_In_3_16') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_3_16";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_3_16.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_191=document.createElement('div');
			this._image_191.ggId="Image 1";
			this._image_191.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_191.ggVisible=true;
			this._image_191.className='ggskin ggskin_image';
			this._image_191.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_191.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_191.setAttribute('style',hs);
			this._image_191__img=document.createElement('img');
			this._image_191__img.className='ggskin ggskin_image';
			this._image_191__img.setAttribute('src',basePath + 'images/image_191.png');
			this._image_191__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_191__img.className='ggskin ggskin_image';
			this._image_191__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_191__img);
			this._image_191.appendChild(this._image_191__img);
			this._image_191.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_191.style[domTransition]='none';
				} else {
					me._image_191.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_191.ggParameter.sx=0.2;me._image_191.ggParameter.sy=0.2;
				me._image_191.style[domTransform]=parameterToTransform(me._image_191.ggParameter);
				flag=(me._text_291.style.visibility=='hidden');
				me._text_291.style[domTransition]='none';
				me._text_291.style.visibility=flag?'inherit':'hidden';
				me._text_291.ggVisible=flag;
			}
			this._image_191.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_191.style[domTransition]='none';
				} else {
					me._image_191.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_191.ggParameter.sx=0.1;me._image_191.ggParameter.sy=0.1;
				me._image_191.style[domTransform]=parameterToTransform(me._image_191.ggParameter);
				flag=(me._text_291.style.visibility=='hidden');
				me._text_291.style[domTransition]='none';
				me._text_291.style.visibility=flag?'inherit':'hidden';
				me._text_291.ggVisible=flag;
			}
			this.__div.appendChild(this._image_191);
			this._text_291=document.createElement('div');
			this._text_291__text=document.createElement('div');
			this._text_291.className='ggskin ggskin_textdiv';
			this._text_291.ggTextDiv=this._text_291__text;
			this._text_291.ggId="Text 2";
			this._text_291.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_291.ggVisible=false;
			this._text_291.className='ggskin ggskin_text';
			this._text_291.ggType='text';
			this._text_291.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_291.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_291__text.setAttribute('style',hs);
			this._text_291.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_291.appendChild(this._text_291__text);
			this.__div.appendChild(this._text_291);
		} else
		if (hotspot.skinid=='Gang_3_16_To_Gang_3_13') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_3_16_To_Gang_3_13";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_3_13.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_190=document.createElement('div');
			this._image_190.ggId="Image 1";
			this._image_190.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_190.ggVisible=true;
			this._image_190.className='ggskin ggskin_image';
			this._image_190.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_190.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_190.setAttribute('style',hs);
			this._image_190__img=document.createElement('img');
			this._image_190__img.className='ggskin ggskin_image';
			this._image_190__img.setAttribute('src',basePath + 'images/image_190.png');
			this._image_190__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_190__img.className='ggskin ggskin_image';
			this._image_190__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_190__img);
			this._image_190.appendChild(this._image_190__img);
			this._image_190.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_190.style[domTransition]='none';
				} else {
					me._image_190.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_190.ggParameter.sx=0.2;me._image_190.ggParameter.sy=0.2;
				me._image_190.style[domTransform]=parameterToTransform(me._image_190.ggParameter);
				flag=(me._text_290.style.visibility=='hidden');
				me._text_290.style[domTransition]='none';
				me._text_290.style.visibility=flag?'inherit':'hidden';
				me._text_290.ggVisible=flag;
			}
			this._image_190.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_190.style[domTransition]='none';
				} else {
					me._image_190.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_190.ggParameter.sx=0.1;me._image_190.ggParameter.sy=0.1;
				me._image_190.style[domTransform]=parameterToTransform(me._image_190.ggParameter);
				flag=(me._text_290.style.visibility=='hidden');
				me._text_290.style[domTransition]='none';
				me._text_290.style.visibility=flag?'inherit':'hidden';
				me._text_290.ggVisible=flag;
			}
			this.__div.appendChild(this._image_190);
			this._text_290=document.createElement('div');
			this._text_290__text=document.createElement('div');
			this._text_290.className='ggskin ggskin_textdiv';
			this._text_290.ggTextDiv=this._text_290__text;
			this._text_290.ggId="Text 2";
			this._text_290.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_290.ggVisible=false;
			this._text_290.className='ggskin ggskin_text';
			this._text_290.ggType='text';
			this._text_290.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_290.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_290__text.setAttribute('style',hs);
			this._text_290.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_290.appendChild(this._text_290__text);
			this.__div.appendChild(this._text_290);
		} else
		if (hotspot.skinid=='Gang_3_13_To_Gang_3_16') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_3_13_To_Gang_3_16";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_3_16.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_189=document.createElement('div');
			this._image_189.ggId="Image 1";
			this._image_189.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_189.ggVisible=true;
			this._image_189.className='ggskin ggskin_image';
			this._image_189.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_189.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_189.setAttribute('style',hs);
			this._image_189__img=document.createElement('img');
			this._image_189__img.className='ggskin ggskin_image';
			this._image_189__img.setAttribute('src',basePath + 'images/image_189.png');
			this._image_189__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_189__img.className='ggskin ggskin_image';
			this._image_189__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_189__img);
			this._image_189.appendChild(this._image_189__img);
			this._image_189.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_189.style[domTransition]='none';
				} else {
					me._image_189.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_189.ggParameter.sx=0.2;me._image_189.ggParameter.sy=0.2;
				me._image_189.style[domTransform]=parameterToTransform(me._image_189.ggParameter);
				flag=(me._text_289.style.visibility=='hidden');
				me._text_289.style[domTransition]='none';
				me._text_289.style.visibility=flag?'inherit':'hidden';
				me._text_289.ggVisible=flag;
			}
			this._image_189.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_189.style[domTransition]='none';
				} else {
					me._image_189.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_189.ggParameter.sx=0.1;me._image_189.ggParameter.sy=0.1;
				me._image_189.style[domTransform]=parameterToTransform(me._image_189.ggParameter);
				flag=(me._text_289.style.visibility=='hidden');
				me._text_289.style[domTransition]='none';
				me._text_289.style.visibility=flag?'inherit':'hidden';
				me._text_289.ggVisible=flag;
			}
			this.__div.appendChild(this._image_189);
			this._text_289=document.createElement('div');
			this._text_289__text=document.createElement('div');
			this._text_289.className='ggskin ggskin_textdiv';
			this._text_289.ggTextDiv=this._text_289__text;
			this._text_289.ggId="Text 2";
			this._text_289.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_289.ggVisible=false;
			this._text_289.className='ggskin ggskin_text';
			this._text_289.ggType='text';
			this._text_289.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_289.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_289__text.setAttribute('style',hs);
			this._text_289.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_289.appendChild(this._text_289__text);
			this.__div.appendChild(this._text_289);
		} else
		if (hotspot.skinid=='Gang_3_06_To_Gang_3_13') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_3_06_To_Gang_3_13";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_3_13.onclick();
				me.player.openNext("Gang 3_13_out.xml","-270");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_188=document.createElement('div');
			this._image_188.ggId="Image 1";
			this._image_188.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_188.ggVisible=true;
			this._image_188.className='ggskin ggskin_image';
			this._image_188.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_188.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_188.setAttribute('style',hs);
			this._image_188__img=document.createElement('img');
			this._image_188__img.className='ggskin ggskin_image';
			this._image_188__img.setAttribute('src',basePath + 'images/image_188.png');
			this._image_188__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_188__img.className='ggskin ggskin_image';
			this._image_188__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_188__img);
			this._image_188.appendChild(this._image_188__img);
			this._image_188.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_188.style[domTransition]='none';
				} else {
					me._image_188.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_188.ggParameter.sx=0.2;me._image_188.ggParameter.sy=0.2;
				me._image_188.style[domTransform]=parameterToTransform(me._image_188.ggParameter);
				flag=(me._text_288.style.visibility=='hidden');
				me._text_288.style[domTransition]='none';
				me._text_288.style.visibility=flag?'inherit':'hidden';
				me._text_288.ggVisible=flag;
			}
			this._image_188.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_188.style[domTransition]='none';
				} else {
					me._image_188.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_188.ggParameter.sx=0.1;me._image_188.ggParameter.sy=0.1;
				me._image_188.style[domTransform]=parameterToTransform(me._image_188.ggParameter);
				flag=(me._text_288.style.visibility=='hidden');
				me._text_288.style[domTransition]='none';
				me._text_288.style.visibility=flag?'inherit':'hidden';
				me._text_288.ggVisible=flag;
			}
			this.__div.appendChild(this._image_188);
			this._text_288=document.createElement('div');
			this._text_288__text=document.createElement('div');
			this._text_288.className='ggskin ggskin_textdiv';
			this._text_288.ggTextDiv=this._text_288__text;
			this._text_288.ggId="Text 2";
			this._text_288.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_288.ggVisible=false;
			this._text_288.className='ggskin ggskin_text';
			this._text_288.ggType='text';
			this._text_288.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_288.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_288__text.setAttribute('style',hs);
			this._text_288.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_288.appendChild(this._text_288__text);
			this.__div.appendChild(this._text_288);
		} else
		if (hotspot.skinid=='Gang_3_13_To_Gang_3_06') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_3_13_To_Gang_3_06";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_3_06.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_187=document.createElement('div');
			this._image_187.ggId="Image 1";
			this._image_187.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_187.ggVisible=true;
			this._image_187.className='ggskin ggskin_image';
			this._image_187.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_187.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_187.setAttribute('style',hs);
			this._image_187__img=document.createElement('img');
			this._image_187__img.className='ggskin ggskin_image';
			this._image_187__img.setAttribute('src',basePath + 'images/image_187.png');
			this._image_187__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_187__img.className='ggskin ggskin_image';
			this._image_187__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_187__img);
			this._image_187.appendChild(this._image_187__img);
			this._image_187.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_187.style[domTransition]='none';
				} else {
					me._image_187.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_187.ggParameter.sx=0.2;me._image_187.ggParameter.sy=0.2;
				me._image_187.style[domTransform]=parameterToTransform(me._image_187.ggParameter);
				flag=(me._text_287.style.visibility=='hidden');
				me._text_287.style[domTransition]='none';
				me._text_287.style.visibility=flag?'inherit':'hidden';
				me._text_287.ggVisible=flag;
			}
			this._image_187.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_187.style[domTransition]='none';
				} else {
					me._image_187.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_187.ggParameter.sx=0.1;me._image_187.ggParameter.sy=0.1;
				me._image_187.style[domTransform]=parameterToTransform(me._image_187.ggParameter);
				flag=(me._text_287.style.visibility=='hidden');
				me._text_287.style[domTransition]='none';
				me._text_287.style.visibility=flag?'inherit':'hidden';
				me._text_287.ggVisible=flag;
			}
			this.__div.appendChild(this._image_187);
			this._text_287=document.createElement('div');
			this._text_287__text=document.createElement('div');
			this._text_287.className='ggskin ggskin_textdiv';
			this._text_287.ggTextDiv=this._text_287__text;
			this._text_287.ggId="Text 2";
			this._text_287.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_287.ggVisible=false;
			this._text_287.className='ggskin ggskin_text';
			this._text_287.ggType='text';
			this._text_287.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_287.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_287__text.setAttribute('style',hs);
			this._text_287.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_287.appendChild(this._text_287__text);
			this.__div.appendChild(this._text_287);
		} else
		if (hotspot.skinid=='Room_In_3_06') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_3_06";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_3_06.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_186=document.createElement('div');
			this._image_186.ggId="Image 1";
			this._image_186.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_186.ggVisible=true;
			this._image_186.className='ggskin ggskin_image';
			this._image_186.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_186.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_186.setAttribute('style',hs);
			this._image_186__img=document.createElement('img');
			this._image_186__img.className='ggskin ggskin_image';
			this._image_186__img.setAttribute('src',basePath + 'images/image_186.png');
			this._image_186__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_186__img.className='ggskin ggskin_image';
			this._image_186__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_186__img);
			this._image_186.appendChild(this._image_186__img);
			this._image_186.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_186.style[domTransition]='none';
				} else {
					me._image_186.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_186.ggParameter.sx=0.2;me._image_186.ggParameter.sy=0.2;
				me._image_186.style[domTransform]=parameterToTransform(me._image_186.ggParameter);
				flag=(me._text_286.style.visibility=='hidden');
				me._text_286.style[domTransition]='none';
				me._text_286.style.visibility=flag?'inherit':'hidden';
				me._text_286.ggVisible=flag;
			}
			this._image_186.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_186.style[domTransition]='none';
				} else {
					me._image_186.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_186.ggParameter.sx=0.1;me._image_186.ggParameter.sy=0.1;
				me._image_186.style[domTransform]=parameterToTransform(me._image_186.ggParameter);
				flag=(me._text_286.style.visibility=='hidden');
				me._text_286.style[domTransition]='none';
				me._text_286.style.visibility=flag?'inherit':'hidden';
				me._text_286.ggVisible=flag;
			}
			this.__div.appendChild(this._image_186);
			this._text_286=document.createElement('div');
			this._text_286__text=document.createElement('div');
			this._text_286.className='ggskin ggskin_textdiv';
			this._text_286.ggTextDiv=this._text_286__text;
			this._text_286.ggId="Text 2";
			this._text_286.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_286.ggVisible=false;
			this._text_286.className='ggskin ggskin_text';
			this._text_286.ggType='text';
			this._text_286.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_286.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_286__text.setAttribute('style',hs);
			this._text_286.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_286.appendChild(this._text_286__text);
			this.__div.appendChild(this._text_286);
		} else
		if (hotspot.skinid=='Room_Out_3_09') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_3_09";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_3_06.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_185=document.createElement('div');
			this._image_185.ggId="Image 1";
			this._image_185.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_185.ggVisible=true;
			this._image_185.className='ggskin ggskin_image';
			this._image_185.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_185.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_185.setAttribute('style',hs);
			this._image_185__img=document.createElement('img');
			this._image_185__img.className='ggskin ggskin_image';
			this._image_185__img.setAttribute('src',basePath + 'images/image_185.png');
			this._image_185__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_185__img.className='ggskin ggskin_image';
			this._image_185__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_185__img);
			this._image_185.appendChild(this._image_185__img);
			this._image_185.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_185.style[domTransition]='none';
				} else {
					me._image_185.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_185.ggParameter.sx=0.2;me._image_185.ggParameter.sy=0.2;
				me._image_185.style[domTransform]=parameterToTransform(me._image_185.ggParameter);
				flag=(me._text_285.style.visibility=='hidden');
				me._text_285.style[domTransition]='none';
				me._text_285.style.visibility=flag?'inherit':'hidden';
				me._text_285.ggVisible=flag;
			}
			this._image_185.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_185.style[domTransition]='none';
				} else {
					me._image_185.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_185.ggParameter.sx=0.1;me._image_185.ggParameter.sy=0.1;
				me._image_185.style[domTransform]=parameterToTransform(me._image_185.ggParameter);
				flag=(me._text_285.style.visibility=='hidden');
				me._text_285.style[domTransition]='none';
				me._text_285.style.visibility=flag?'inherit':'hidden';
				me._text_285.ggVisible=flag;
			}
			this.__div.appendChild(this._image_185);
			this._text_285=document.createElement('div');
			this._text_285__text=document.createElement('div');
			this._text_285.className='ggskin ggskin_textdiv';
			this._text_285.ggTextDiv=this._text_285__text;
			this._text_285.ggId="Text 2";
			this._text_285.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_285.ggVisible=false;
			this._text_285.className='ggskin ggskin_text';
			this._text_285.ggType='text';
			this._text_285.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_285.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_285__text.setAttribute('style',hs);
			this._text_285.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_285.appendChild(this._text_285__text);
			this.__div.appendChild(this._text_285);
		} else
		if (hotspot.skinid=='Room_In_3_09') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_3_09";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_3_09.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_184=document.createElement('div');
			this._image_184.ggId="Image 1";
			this._image_184.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_184.ggVisible=true;
			this._image_184.className='ggskin ggskin_image';
			this._image_184.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_184.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_184.setAttribute('style',hs);
			this._image_184__img=document.createElement('img');
			this._image_184__img.className='ggskin ggskin_image';
			this._image_184__img.setAttribute('src',basePath + 'images/image_184.png');
			this._image_184__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_184__img.className='ggskin ggskin_image';
			this._image_184__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_184__img);
			this._image_184.appendChild(this._image_184__img);
			this._image_184.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_184.style[domTransition]='none';
				} else {
					me._image_184.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_184.ggParameter.sx=0.2;me._image_184.ggParameter.sy=0.2;
				me._image_184.style[domTransform]=parameterToTransform(me._image_184.ggParameter);
				flag=(me._text_284.style.visibility=='hidden');
				me._text_284.style[domTransition]='none';
				me._text_284.style.visibility=flag?'inherit':'hidden';
				me._text_284.ggVisible=flag;
			}
			this._image_184.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_184.style[domTransition]='none';
				} else {
					me._image_184.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_184.ggParameter.sx=0.1;me._image_184.ggParameter.sy=0.1;
				me._image_184.style[domTransform]=parameterToTransform(me._image_184.ggParameter);
				flag=(me._text_284.style.visibility=='hidden');
				me._text_284.style[domTransition]='none';
				me._text_284.style.visibility=flag?'inherit':'hidden';
				me._text_284.ggVisible=flag;
			}
			this.__div.appendChild(this._image_184);
			this._text_284=document.createElement('div');
			this._text_284__text=document.createElement('div');
			this._text_284.className='ggskin ggskin_textdiv';
			this._text_284.ggTextDiv=this._text_284__text;
			this._text_284.ggId="Text 2";
			this._text_284.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_284.ggVisible=false;
			this._text_284.className='ggskin ggskin_text';
			this._text_284.ggType='text';
			this._text_284.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_284.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_284__text.setAttribute('style',hs);
			this._text_284.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_284.appendChild(this._text_284__text);
			this.__div.appendChild(this._text_284);
		} else
		if (hotspot.skinid=='Video_Physik') {
			this.__div=document.createElement('div');
			this.__div.ggId="Video_Physik";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_2_14.onclick();
				me.player.enterFullscreen();
				me.player.playSound("_main","");
				me.player.openUrl("ftp:\/\/w0171d83@w0171d83.kasserver.com\/maxner-mm.de\/Rundgang\/Videos\/MAH09836.MP4","");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_183=document.createElement('div');
			this._image_183.ggId="Image 1";
			this._image_183.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_183.ggVisible=true;
			this._image_183.className='ggskin ggskin_image';
			this._image_183.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_183.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_183.setAttribute('style',hs);
			this._image_183__img=document.createElement('img');
			this._image_183__img.className='ggskin ggskin_image';
			this._image_183__img.setAttribute('src',basePath + 'images/image_183.png');
			this._image_183__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_183__img.className='ggskin ggskin_image';
			this._image_183__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_183__img);
			this._image_183.appendChild(this._image_183__img);
			this._image_183.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_183.style[domTransition]='none';
				} else {
					me._image_183.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_183.ggParameter.sx=0.2;me._image_183.ggParameter.sy=0.2;
				me._image_183.style[domTransform]=parameterToTransform(me._image_183.ggParameter);
				flag=(me._text_283.style.visibility=='hidden');
				me._text_283.style[domTransition]='none';
				me._text_283.style.visibility=flag?'inherit':'hidden';
				me._text_283.ggVisible=flag;
			}
			this._image_183.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_183.style[domTransition]='none';
				} else {
					me._image_183.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_183.ggParameter.sx=0.1;me._image_183.ggParameter.sy=0.1;
				me._image_183.style[domTransform]=parameterToTransform(me._image_183.ggParameter);
				flag=(me._text_283.style.visibility=='hidden');
				me._text_283.style[domTransition]='none';
				me._text_283.style.visibility=flag?'inherit':'hidden';
				me._text_283.ggVisible=flag;
			}
			this.__div.appendChild(this._image_183);
			this._text_283=document.createElement('div');
			this._text_283__text=document.createElement('div');
			this._text_283.className='ggskin ggskin_textdiv';
			this._text_283.ggTextDiv=this._text_283__text;
			this._text_283.ggId="Text 2";
			this._text_283.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_283.ggVisible=false;
			this._text_283.className='ggskin ggskin_text';
			this._text_283.ggType='text';
			this._text_283.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_283.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #0000ff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_283__text.setAttribute('style',hs);
			this._text_283.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">Starte Pr\xe4setation<\/p>";
			this._text_283.appendChild(this._text_283__text);
			this.__div.appendChild(this._text_283);
		} else
		if (hotspot.skinid=='Room_In_2_14') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_2_14";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_2_14.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_182=document.createElement('div');
			this._image_182.ggId="Image 1";
			this._image_182.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_182.ggVisible=true;
			this._image_182.className='ggskin ggskin_image';
			this._image_182.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_182.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_182.setAttribute('style',hs);
			this._image_182__img=document.createElement('img');
			this._image_182__img.className='ggskin ggskin_image';
			this._image_182__img.setAttribute('src',basePath + 'images/image_182.png');
			this._image_182__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_182__img.className='ggskin ggskin_image';
			this._image_182__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_182__img);
			this._image_182.appendChild(this._image_182__img);
			this._image_182.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_182.style[domTransition]='none';
				} else {
					me._image_182.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_182.ggParameter.sx=0.2;me._image_182.ggParameter.sy=0.2;
				me._image_182.style[domTransform]=parameterToTransform(me._image_182.ggParameter);
				flag=(me._text_282.style.visibility=='hidden');
				me._text_282.style[domTransition]='none';
				me._text_282.style.visibility=flag?'inherit':'hidden';
				me._text_282.ggVisible=flag;
			}
			this._image_182.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_182.style[domTransition]='none';
				} else {
					me._image_182.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_182.ggParameter.sx=0.1;me._image_182.ggParameter.sy=0.1;
				me._image_182.style[domTransform]=parameterToTransform(me._image_182.ggParameter);
				flag=(me._text_282.style.visibility=='hidden');
				me._text_282.style[domTransition]='none';
				me._text_282.style.visibility=flag?'inherit':'hidden';
				me._text_282.ggVisible=flag;
			}
			this.__div.appendChild(this._image_182);
			this._text_282=document.createElement('div');
			this._text_282__text=document.createElement('div');
			this._text_282.className='ggskin ggskin_textdiv';
			this._text_282.ggTextDiv=this._text_282__text;
			this._text_282.ggId="Text 2";
			this._text_282.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_282.ggVisible=false;
			this._text_282.className='ggskin ggskin_text';
			this._text_282.ggType='text';
			this._text_282.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_282.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_282__text.setAttribute('style',hs);
			this._text_282.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_282.appendChild(this._text_282__text);
			this.__div.appendChild(this._text_282);
		} else
		if (hotspot.skinid=='Room_In_2_13') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_2_13";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_181=document.createElement('div');
			this._image_181.ggId="Image 1";
			this._image_181.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_181.ggVisible=true;
			this._image_181.className='ggskin ggskin_image';
			this._image_181.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_181.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_181.setAttribute('style',hs);
			this._image_181__img=document.createElement('img');
			this._image_181__img.className='ggskin ggskin_image';
			this._image_181__img.setAttribute('src',basePath + 'images/image_181.png');
			this._image_181__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_181__img.className='ggskin ggskin_image';
			this._image_181__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_181__img);
			this._image_181.appendChild(this._image_181__img);
			this._image_181.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_181.style[domTransition]='none';
				} else {
					me._image_181.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_181.ggParameter.sx=0.2;me._image_181.ggParameter.sy=0.2;
				me._image_181.style[domTransform]=parameterToTransform(me._image_181.ggParameter);
				flag=(me._text_281.style.visibility=='hidden');
				me._text_281.style[domTransition]='none';
				me._text_281.style.visibility=flag?'inherit':'hidden';
				me._text_281.ggVisible=flag;
			}
			this._image_181.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_181.style[domTransition]='none';
				} else {
					me._image_181.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_181.ggParameter.sx=0.1;me._image_181.ggParameter.sy=0.1;
				me._image_181.style[domTransform]=parameterToTransform(me._image_181.ggParameter);
				flag=(me._text_281.style.visibility=='hidden');
				me._text_281.style[domTransition]='none';
				me._text_281.style.visibility=flag?'inherit':'hidden';
				me._text_281.ggVisible=flag;
			}
			this.__div.appendChild(this._image_181);
			this._text_281=document.createElement('div');
			this._text_281__text=document.createElement('div');
			this._text_281.className='ggskin ggskin_textdiv';
			this._text_281.ggTextDiv=this._text_281__text;
			this._text_281.ggId="Text 2";
			this._text_281.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_281.ggVisible=false;
			this._text_281.className='ggskin ggskin_text';
			this._text_281.ggType='text';
			this._text_281.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_281.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_281__text.setAttribute('style',hs);
			this._text_281.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_281.appendChild(this._text_281__text);
			this.__div.appendChild(this._text_281);
		} else
		if (hotspot.skinid=='Room_In_2_11') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_2_11";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_2_11.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_180=document.createElement('div');
			this._image_180.ggId="Image 1";
			this._image_180.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_180.ggVisible=true;
			this._image_180.className='ggskin ggskin_image';
			this._image_180.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_180.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_180.setAttribute('style',hs);
			this._image_180__img=document.createElement('img');
			this._image_180__img.className='ggskin ggskin_image';
			this._image_180__img.setAttribute('src',basePath + 'images/image_180.png');
			this._image_180__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_180__img.className='ggskin ggskin_image';
			this._image_180__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_180__img);
			this._image_180.appendChild(this._image_180__img);
			this._image_180.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_180.style[domTransition]='none';
				} else {
					me._image_180.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_180.ggParameter.sx=0.2;me._image_180.ggParameter.sy=0.2;
				me._image_180.style[domTransform]=parameterToTransform(me._image_180.ggParameter);
				flag=(me._text_280.style.visibility=='hidden');
				me._text_280.style[domTransition]='none';
				me._text_280.style.visibility=flag?'inherit':'hidden';
				me._text_280.ggVisible=flag;
			}
			this._image_180.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_180.style[domTransition]='none';
				} else {
					me._image_180.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_180.ggParameter.sx=0.1;me._image_180.ggParameter.sy=0.1;
				me._image_180.style[domTransform]=parameterToTransform(me._image_180.ggParameter);
				flag=(me._text_280.style.visibility=='hidden');
				me._text_280.style[domTransition]='none';
				me._text_280.style.visibility=flag?'inherit':'hidden';
				me._text_280.ggVisible=flag;
			}
			this.__div.appendChild(this._image_180);
			this._text_280=document.createElement('div');
			this._text_280__text=document.createElement('div');
			this._text_280.className='ggskin ggskin_textdiv';
			this._text_280.ggTextDiv=this._text_280__text;
			this._text_280.ggId="Text 2";
			this._text_280.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_280.ggVisible=false;
			this._text_280.className='ggskin ggskin_text';
			this._text_280.ggType='text';
			this._text_280.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_280.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_280__text.setAttribute('style',hs);
			this._text_280.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_280.appendChild(this._text_280__text);
			this.__div.appendChild(this._text_280);
		} else
		if (hotspot.skinid=='Room_In_2_07') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_2_07";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_2_07.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_179=document.createElement('div');
			this._image_179.ggId="Image 1";
			this._image_179.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_179.ggVisible=true;
			this._image_179.className='ggskin ggskin_image';
			this._image_179.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_179.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_179.setAttribute('style',hs);
			this._image_179__img=document.createElement('img');
			this._image_179__img.className='ggskin ggskin_image';
			this._image_179__img.setAttribute('src',basePath + 'images/image_179.png');
			this._image_179__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_179__img.className='ggskin ggskin_image';
			this._image_179__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_179__img);
			this._image_179.appendChild(this._image_179__img);
			this._image_179.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_179.style[domTransition]='none';
				} else {
					me._image_179.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_179.ggParameter.sx=0.2;me._image_179.ggParameter.sy=0.2;
				me._image_179.style[domTransform]=parameterToTransform(me._image_179.ggParameter);
				flag=(me._text_279.style.visibility=='hidden');
				me._text_279.style[domTransition]='none';
				me._text_279.style.visibility=flag?'inherit':'hidden';
				me._text_279.ggVisible=flag;
			}
			this._image_179.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_179.style[domTransition]='none';
				} else {
					me._image_179.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_179.ggParameter.sx=0.1;me._image_179.ggParameter.sy=0.1;
				me._image_179.style[domTransform]=parameterToTransform(me._image_179.ggParameter);
				flag=(me._text_279.style.visibility=='hidden');
				me._text_279.style[domTransition]='none';
				me._text_279.style.visibility=flag?'inherit':'hidden';
				me._text_279.ggVisible=flag;
			}
			this.__div.appendChild(this._image_179);
			this._text_279=document.createElement('div');
			this._text_279__text=document.createElement('div');
			this._text_279.className='ggskin ggskin_textdiv';
			this._text_279.ggTextDiv=this._text_279__text;
			this._text_279.ggId="Text 2";
			this._text_279.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_279.ggVisible=false;
			this._text_279.className='ggskin ggskin_text';
			this._text_279.ggType='text';
			this._text_279.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_279.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_279__text.setAttribute('style',hs);
			this._text_279.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_279.appendChild(this._text_279__text);
			this.__div.appendChild(this._text_279);
		} else
		if (hotspot.skinid=='Room_In_2_08') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_2_08";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_2_08.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_178=document.createElement('div');
			this._image_178.ggId="Image 1";
			this._image_178.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_178.ggVisible=true;
			this._image_178.className='ggskin ggskin_image';
			this._image_178.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_178.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_178.setAttribute('style',hs);
			this._image_178__img=document.createElement('img');
			this._image_178__img.className='ggskin ggskin_image';
			this._image_178__img.setAttribute('src',basePath + 'images/image_178.png');
			this._image_178__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_178__img.className='ggskin ggskin_image';
			this._image_178__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_178__img);
			this._image_178.appendChild(this._image_178__img);
			this._image_178.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_178.style[domTransition]='none';
				} else {
					me._image_178.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_178.ggParameter.sx=0.2;me._image_178.ggParameter.sy=0.2;
				me._image_178.style[domTransform]=parameterToTransform(me._image_178.ggParameter);
				flag=(me._text_278.style.visibility=='hidden');
				me._text_278.style[domTransition]='none';
				me._text_278.style.visibility=flag?'inherit':'hidden';
				me._text_278.ggVisible=flag;
			}
			this._image_178.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_178.style[domTransition]='none';
				} else {
					me._image_178.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_178.ggParameter.sx=0.1;me._image_178.ggParameter.sy=0.1;
				me._image_178.style[domTransform]=parameterToTransform(me._image_178.ggParameter);
				flag=(me._text_278.style.visibility=='hidden');
				me._text_278.style[domTransition]='none';
				me._text_278.style.visibility=flag?'inherit':'hidden';
				me._text_278.ggVisible=flag;
			}
			this.__div.appendChild(this._image_178);
			this._text_278=document.createElement('div');
			this._text_278__text=document.createElement('div');
			this._text_278.className='ggskin ggskin_textdiv';
			this._text_278.ggTextDiv=this._text_278__text;
			this._text_278.ggId="Text 2";
			this._text_278.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_278.ggVisible=false;
			this._text_278.className='ggskin ggskin_text';
			this._text_278.ggType='text';
			this._text_278.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_278.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_278__text.setAttribute('style',hs);
			this._text_278.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_278.appendChild(this._text_278__text);
			this.__div.appendChild(this._text_278);
		} else
		if (hotspot.skinid=='Room_To_Room_2_13') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_To_Room_2_13";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_2_13.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_177=document.createElement('div');
			this._image_177.ggId="Image 1";
			this._image_177.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_177.ggVisible=true;
			this._image_177.className='ggskin ggskin_image';
			this._image_177.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_177.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_177.setAttribute('style',hs);
			this._image_177__img=document.createElement('img');
			this._image_177__img.className='ggskin ggskin_image';
			this._image_177__img.setAttribute('src',basePath + 'images/image_177.png');
			this._image_177__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_177__img.className='ggskin ggskin_image';
			this._image_177__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_177__img);
			this._image_177.appendChild(this._image_177__img);
			this._image_177.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_177.style[domTransition]='none';
				} else {
					me._image_177.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_177.ggParameter.sx=0.2;me._image_177.ggParameter.sy=0.2;
				me._image_177.style[domTransform]=parameterToTransform(me._image_177.ggParameter);
				flag=(me._text_277.style.visibility=='hidden');
				me._text_277.style[domTransition]='none';
				me._text_277.style.visibility=flag?'inherit':'hidden';
				me._text_277.ggVisible=flag;
			}
			this._image_177.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_177.style[domTransition]='none';
				} else {
					me._image_177.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_177.ggParameter.sx=0.1;me._image_177.ggParameter.sy=0.1;
				me._image_177.style[domTransform]=parameterToTransform(me._image_177.ggParameter);
				flag=(me._text_277.style.visibility=='hidden');
				me._text_277.style[domTransition]='none';
				me._text_277.style.visibility=flag?'inherit':'hidden';
				me._text_277.ggVisible=flag;
			}
			this.__div.appendChild(this._image_177);
			this._text_277=document.createElement('div');
			this._text_277__text=document.createElement('div');
			this._text_277.className='ggskin ggskin_textdiv';
			this._text_277.ggTextDiv=this._text_277__text;
			this._text_277.ggId="Text 2";
			this._text_277.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_277.ggVisible=false;
			this._text_277.className='ggskin ggskin_text';
			this._text_277.ggType='text';
			this._text_277.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_277.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_277__text.setAttribute('style',hs);
			this._text_277.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_277.appendChild(this._text_277__text);
			this.__div.appendChild(this._text_277);
		} else
		if (hotspot.skinid=='Room_Out_2_14') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_2_14";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_2_14.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_176=document.createElement('div');
			this._image_176.ggId="Image 1";
			this._image_176.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_176.ggVisible=true;
			this._image_176.className='ggskin ggskin_image';
			this._image_176.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_176.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_176.setAttribute('style',hs);
			this._image_176__img=document.createElement('img');
			this._image_176__img.className='ggskin ggskin_image';
			this._image_176__img.setAttribute('src',basePath + 'images/image_176.png');
			this._image_176__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_176__img.className='ggskin ggskin_image';
			this._image_176__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_176__img);
			this._image_176.appendChild(this._image_176__img);
			this._image_176.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_176.style[domTransition]='none';
				} else {
					me._image_176.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_176.ggParameter.sx=0.2;me._image_176.ggParameter.sy=0.2;
				me._image_176.style[domTransform]=parameterToTransform(me._image_176.ggParameter);
				flag=(me._text_276.style.visibility=='hidden');
				me._text_276.style[domTransition]='none';
				me._text_276.style.visibility=flag?'inherit':'hidden';
				me._text_276.ggVisible=flag;
			}
			this._image_176.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_176.style[domTransition]='none';
				} else {
					me._image_176.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_176.ggParameter.sx=0.1;me._image_176.ggParameter.sy=0.1;
				me._image_176.style[domTransform]=parameterToTransform(me._image_176.ggParameter);
				flag=(me._text_276.style.visibility=='hidden');
				me._text_276.style[domTransition]='none';
				me._text_276.style.visibility=flag?'inherit':'hidden';
				me._text_276.ggVisible=flag;
			}
			this.__div.appendChild(this._image_176);
			this._text_276=document.createElement('div');
			this._text_276__text=document.createElement('div');
			this._text_276.className='ggskin ggskin_textdiv';
			this._text_276.ggTextDiv=this._text_276__text;
			this._text_276.ggId="Text 2";
			this._text_276.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_276.ggVisible=false;
			this._text_276.className='ggskin ggskin_text';
			this._text_276.ggType='text';
			this._text_276.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_276.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_276__text.setAttribute('style',hs);
			this._text_276.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_276.appendChild(this._text_276__text);
			this.__div.appendChild(this._text_276);
		} else
		if (hotspot.skinid=='Room_Out_2_13') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_2_13";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_2_14.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_175=document.createElement('div');
			this._image_175.ggId="Image 1";
			this._image_175.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_175.ggVisible=true;
			this._image_175.className='ggskin ggskin_image';
			this._image_175.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_175.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_175.setAttribute('style',hs);
			this._image_175__img=document.createElement('img');
			this._image_175__img.className='ggskin ggskin_image';
			this._image_175__img.setAttribute('src',basePath + 'images/image_175.png');
			this._image_175__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_175__img.className='ggskin ggskin_image';
			this._image_175__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_175__img);
			this._image_175.appendChild(this._image_175__img);
			this._image_175.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_175.style[domTransition]='none';
				} else {
					me._image_175.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_175.ggParameter.sx=0.2;me._image_175.ggParameter.sy=0.2;
				me._image_175.style[domTransform]=parameterToTransform(me._image_175.ggParameter);
				flag=(me._text_275.style.visibility=='hidden');
				me._text_275.style[domTransition]='none';
				me._text_275.style.visibility=flag?'inherit':'hidden';
				me._text_275.ggVisible=flag;
			}
			this._image_175.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_175.style[domTransition]='none';
				} else {
					me._image_175.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_175.ggParameter.sx=0.1;me._image_175.ggParameter.sy=0.1;
				me._image_175.style[domTransform]=parameterToTransform(me._image_175.ggParameter);
				flag=(me._text_275.style.visibility=='hidden');
				me._text_275.style[domTransition]='none';
				me._text_275.style.visibility=flag?'inherit':'hidden';
				me._text_275.ggVisible=flag;
			}
			this.__div.appendChild(this._image_175);
			this._text_275=document.createElement('div');
			this._text_275__text=document.createElement('div');
			this._text_275.className='ggskin ggskin_textdiv';
			this._text_275.ggTextDiv=this._text_275__text;
			this._text_275.ggId="Text 2";
			this._text_275.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_275.ggVisible=false;
			this._text_275.className='ggskin ggskin_text';
			this._text_275.ggType='text';
			this._text_275.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_275.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_275__text.setAttribute('style',hs);
			this._text_275.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_275.appendChild(this._text_275__text);
			this.__div.appendChild(this._text_275);
		} else
		if (hotspot.skinid=='Room_To_Room_2_08') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_To_Room_2_08";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_2_08.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_174=document.createElement('div');
			this._image_174.ggId="Image 1";
			this._image_174.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_174.ggVisible=true;
			this._image_174.className='ggskin ggskin_image';
			this._image_174.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_174.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_174.setAttribute('style',hs);
			this._image_174__img=document.createElement('img');
			this._image_174__img.className='ggskin ggskin_image';
			this._image_174__img.setAttribute('src',basePath + 'images/image_174.png');
			this._image_174__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_174__img.className='ggskin ggskin_image';
			this._image_174__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_174__img);
			this._image_174.appendChild(this._image_174__img);
			this._image_174.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_174.style[domTransition]='none';
				} else {
					me._image_174.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_174.ggParameter.sx=0.2;me._image_174.ggParameter.sy=0.2;
				me._image_174.style[domTransform]=parameterToTransform(me._image_174.ggParameter);
				flag=(me._text_274.style.visibility=='hidden');
				me._text_274.style[domTransition]='none';
				me._text_274.style.visibility=flag?'inherit':'hidden';
				me._text_274.ggVisible=flag;
			}
			this._image_174.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_174.style[domTransition]='none';
				} else {
					me._image_174.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_174.ggParameter.sx=0.1;me._image_174.ggParameter.sy=0.1;
				me._image_174.style[domTransform]=parameterToTransform(me._image_174.ggParameter);
				flag=(me._text_274.style.visibility=='hidden');
				me._text_274.style[domTransition]='none';
				me._text_274.style.visibility=flag?'inherit':'hidden';
				me._text_274.ggVisible=flag;
			}
			this.__div.appendChild(this._image_174);
			this._text_274=document.createElement('div');
			this._text_274__text=document.createElement('div');
			this._text_274.className='ggskin ggskin_textdiv';
			this._text_274.ggTextDiv=this._text_274__text;
			this._text_274.ggId="Text 2";
			this._text_274.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_274.ggVisible=false;
			this._text_274.className='ggskin ggskin_text';
			this._text_274.ggType='text';
			this._text_274.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_274.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_274__text.setAttribute('style',hs);
			this._text_274.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_274.appendChild(this._text_274__text);
			this.__div.appendChild(this._text_274);
		} else
		if (hotspot.skinid=='Room_Out_2_07') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_2_07";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_2_06.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_173=document.createElement('div');
			this._image_173.ggId="Image 1";
			this._image_173.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_173.ggVisible=true;
			this._image_173.className='ggskin ggskin_image';
			this._image_173.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_173.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_173.setAttribute('style',hs);
			this._image_173__img=document.createElement('img');
			this._image_173__img.className='ggskin ggskin_image';
			this._image_173__img.setAttribute('src',basePath + 'images/image_173.png');
			this._image_173__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_173__img.className='ggskin ggskin_image';
			this._image_173__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_173__img);
			this._image_173.appendChild(this._image_173__img);
			this._image_173.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_173.style[domTransition]='none';
				} else {
					me._image_173.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_173.ggParameter.sx=0.2;me._image_173.ggParameter.sy=0.2;
				me._image_173.style[domTransform]=parameterToTransform(me._image_173.ggParameter);
				flag=(me._text_273.style.visibility=='hidden');
				me._text_273.style[domTransition]='none';
				me._text_273.style.visibility=flag?'inherit':'hidden';
				me._text_273.ggVisible=flag;
			}
			this._image_173.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_173.style[domTransition]='none';
				} else {
					me._image_173.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_173.ggParameter.sx=0.1;me._image_173.ggParameter.sy=0.1;
				me._image_173.style[domTransform]=parameterToTransform(me._image_173.ggParameter);
				flag=(me._text_273.style.visibility=='hidden');
				me._text_273.style[domTransition]='none';
				me._text_273.style.visibility=flag?'inherit':'hidden';
				me._text_273.ggVisible=flag;
			}
			this.__div.appendChild(this._image_173);
			this._text_273=document.createElement('div');
			this._text_273__text=document.createElement('div');
			this._text_273.className='ggskin ggskin_textdiv';
			this._text_273.ggTextDiv=this._text_273__text;
			this._text_273.ggId="Text 2";
			this._text_273.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_273.ggVisible=false;
			this._text_273.className='ggskin ggskin_text';
			this._text_273.ggType='text';
			this._text_273.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_273.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_273__text.setAttribute('style',hs);
			this._text_273.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_273.appendChild(this._text_273__text);
			this.__div.appendChild(this._text_273);
		} else
		if (hotspot.skinid=='Room_Out_2_08') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_2_08";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_2_06.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_172=document.createElement('div');
			this._image_172.ggId="Image 1";
			this._image_172.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_172.ggVisible=true;
			this._image_172.className='ggskin ggskin_image';
			this._image_172.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_172.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_172.setAttribute('style',hs);
			this._image_172__img=document.createElement('img');
			this._image_172__img.className='ggskin ggskin_image';
			this._image_172__img.setAttribute('src',basePath + 'images/image_172.png');
			this._image_172__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_172__img.className='ggskin ggskin_image';
			this._image_172__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_172__img);
			this._image_172.appendChild(this._image_172__img);
			this._image_172.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_172.style[domTransition]='none';
				} else {
					me._image_172.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_172.ggParameter.sx=0.2;me._image_172.ggParameter.sy=0.2;
				me._image_172.style[domTransform]=parameterToTransform(me._image_172.ggParameter);
				flag=(me._text_272.style.visibility=='hidden');
				me._text_272.style[domTransition]='none';
				me._text_272.style.visibility=flag?'inherit':'hidden';
				me._text_272.ggVisible=flag;
			}
			this._image_172.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_172.style[domTransition]='none';
				} else {
					me._image_172.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_172.ggParameter.sx=0.1;me._image_172.ggParameter.sy=0.1;
				me._image_172.style[domTransform]=parameterToTransform(me._image_172.ggParameter);
				flag=(me._text_272.style.visibility=='hidden');
				me._text_272.style[domTransition]='none';
				me._text_272.style.visibility=flag?'inherit':'hidden';
				me._text_272.ggVisible=flag;
			}
			this.__div.appendChild(this._image_172);
			this._text_272=document.createElement('div');
			this._text_272__text=document.createElement('div');
			this._text_272.className='ggskin ggskin_textdiv';
			this._text_272.ggTextDiv=this._text_272__text;
			this._text_272.ggId="Text 2";
			this._text_272.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_272.ggVisible=false;
			this._text_272.className='ggskin ggskin_text';
			this._text_272.ggType='text';
			this._text_272.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_272.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_272__text.setAttribute('style',hs);
			this._text_272.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_272.appendChild(this._text_272__text);
			this.__div.appendChild(this._text_272);
		} else
		if (hotspot.skinid=='Room_Out_2_11') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_2_11";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_2_14.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_171=document.createElement('div');
			this._image_171.ggId="Image 1";
			this._image_171.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_171.ggVisible=true;
			this._image_171.className='ggskin ggskin_image';
			this._image_171.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_171.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_171.setAttribute('style',hs);
			this._image_171__img=document.createElement('img');
			this._image_171__img.className='ggskin ggskin_image';
			this._image_171__img.setAttribute('src',basePath + 'images/image_171.png');
			this._image_171__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_171__img.className='ggskin ggskin_image';
			this._image_171__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_171__img);
			this._image_171.appendChild(this._image_171__img);
			this._image_171.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_171.style[domTransition]='none';
				} else {
					me._image_171.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_171.ggParameter.sx=0.3;me._image_171.ggParameter.sy=0.3;
				me._image_171.style[domTransform]=parameterToTransform(me._image_171.ggParameter);
			}
			this._image_171.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_171.style[domTransition]='none';
				} else {
					me._image_171.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_171.ggParameter.sx=0.2;me._image_171.ggParameter.sy=0.2;
				me._image_171.style[domTransform]=parameterToTransform(me._image_171.ggParameter);
			}
			this.__div.appendChild(this._image_171);
			this._text_271=document.createElement('div');
			this._text_271__text=document.createElement('div');
			this._text_271.className='ggskin ggskin_textdiv';
			this._text_271.ggTextDiv=this._text_271__text;
			this._text_271.ggId="Text 2";
			this._text_271.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_271.ggVisible=false;
			this._text_271.className='ggskin ggskin_text';
			this._text_271.ggType='text';
			this._text_271.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_271.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_271__text.setAttribute('style',hs);
			this._text_271.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_271.appendChild(this._text_271__text);
			this.__div.appendChild(this._text_271);
		} else
		if (hotspot.skinid=='Gang_2_06_To_Gang_2_Treppe') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_2_06_To_Gang_2_Treppe";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_2_treppe.onclick();
				me.player.openNext("Gang 2_Treppe_out.xml","180");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_170=document.createElement('div');
			this._image_170.ggId="Image 1";
			this._image_170.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_170.ggVisible=true;
			this._image_170.className='ggskin ggskin_image';
			this._image_170.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_170.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_170.setAttribute('style',hs);
			this._image_170__img=document.createElement('img');
			this._image_170__img.className='ggskin ggskin_image';
			this._image_170__img.setAttribute('src',basePath + 'images/image_170.png');
			this._image_170__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_170__img.className='ggskin ggskin_image';
			this._image_170__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_170__img);
			this._image_170.appendChild(this._image_170__img);
			this._image_170.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_170.style[domTransition]='none';
				} else {
					me._image_170.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_170.ggParameter.sx=0.2;me._image_170.ggParameter.sy=0.2;
				me._image_170.style[domTransform]=parameterToTransform(me._image_170.ggParameter);
				flag=(me._text_270.style.visibility=='hidden');
				me._text_270.style[domTransition]='none';
				me._text_270.style.visibility=flag?'inherit':'hidden';
				me._text_270.ggVisible=flag;
			}
			this._image_170.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_170.style[domTransition]='none';
				} else {
					me._image_170.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_170.ggParameter.sx=0.1;me._image_170.ggParameter.sy=0.1;
				me._image_170.style[domTransform]=parameterToTransform(me._image_170.ggParameter);
				flag=(me._text_270.style.visibility=='hidden');
				me._text_270.style[domTransition]='none';
				me._text_270.style.visibility=flag?'inherit':'hidden';
				me._text_270.ggVisible=flag;
			}
			this.__div.appendChild(this._image_170);
			this._text_270=document.createElement('div');
			this._text_270__text=document.createElement('div');
			this._text_270.className='ggskin ggskin_textdiv';
			this._text_270.ggTextDiv=this._text_270__text;
			this._text_270.ggId="Text 2";
			this._text_270.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_270.ggVisible=false;
			this._text_270.className='ggskin ggskin_text';
			this._text_270.ggType='text';
			this._text_270.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_270.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_270__text.setAttribute('style',hs);
			this._text_270.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_270.appendChild(this._text_270__text);
			this.__div.appendChild(this._text_270);
		} else
		if (hotspot.skinid=='Gang_2_14_To_Gang_Treppe') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_2_14_To_Gang_Treppe";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_2_treppe.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_169=document.createElement('div');
			this._image_169.ggId="Image 1";
			this._image_169.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_169.ggVisible=true;
			this._image_169.className='ggskin ggskin_image';
			this._image_169.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_169.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_169.setAttribute('style',hs);
			this._image_169__img=document.createElement('img');
			this._image_169__img.className='ggskin ggskin_image';
			this._image_169__img.setAttribute('src',basePath + 'images/image_169.png');
			this._image_169__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_169__img.className='ggskin ggskin_image';
			this._image_169__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_169__img);
			this._image_169.appendChild(this._image_169__img);
			this._image_169.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_169.style[domTransition]='none';
				} else {
					me._image_169.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_169.ggParameter.sx=0.2;me._image_169.ggParameter.sy=0.2;
				me._image_169.style[domTransform]=parameterToTransform(me._image_169.ggParameter);
				flag=(me._text_269.style.visibility=='hidden');
				me._text_269.style[domTransition]='none';
				me._text_269.style.visibility=flag?'inherit':'hidden';
				me._text_269.ggVisible=flag;
			}
			this._image_169.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_169.style[domTransition]='none';
				} else {
					me._image_169.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_169.ggParameter.sx=0.1;me._image_169.ggParameter.sy=0.1;
				me._image_169.style[domTransform]=parameterToTransform(me._image_169.ggParameter);
				flag=(me._text_269.style.visibility=='hidden');
				me._text_269.style[domTransition]='none';
				me._text_269.style.visibility=flag?'inherit':'hidden';
				me._text_269.ggVisible=flag;
			}
			this.__div.appendChild(this._image_169);
			this._text_269=document.createElement('div');
			this._text_269__text=document.createElement('div');
			this._text_269.className='ggskin ggskin_textdiv';
			this._text_269.ggTextDiv=this._text_269__text;
			this._text_269.ggId="Text 2";
			this._text_269.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_269.ggVisible=false;
			this._text_269.className='ggskin ggskin_text';
			this._text_269.ggType='text';
			this._text_269.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_269.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_269__text.setAttribute('style',hs);
			this._text_269.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_269.appendChild(this._text_269__text);
			this.__div.appendChild(this._text_269);
		} else
		if (hotspot.skinid=='Room_2_08_To_Room_2_07') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_2_08_To_Room_2_07";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_2_07.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_168=document.createElement('div');
			this._image_168.ggId="Image 1";
			this._image_168.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_168.ggVisible=true;
			this._image_168.className='ggskin ggskin_image';
			this._image_168.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_168.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_168.setAttribute('style',hs);
			this._image_168__img=document.createElement('img');
			this._image_168__img.className='ggskin ggskin_image';
			this._image_168__img.setAttribute('src',basePath + 'images/image_168.png');
			this._image_168__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_168__img.className='ggskin ggskin_image';
			this._image_168__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_168__img);
			this._image_168.appendChild(this._image_168__img);
			this._image_168.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_168.style[domTransition]='none';
				} else {
					me._image_168.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_168.ggParameter.sx=0.2;me._image_168.ggParameter.sy=0.2;
				me._image_168.style[domTransform]=parameterToTransform(me._image_168.ggParameter);
				flag=(me._text_268.style.visibility=='hidden');
				me._text_268.style[domTransition]='none';
				me._text_268.style.visibility=flag?'inherit':'hidden';
				me._text_268.ggVisible=flag;
			}
			this._image_168.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_168.style[domTransition]='none';
				} else {
					me._image_168.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_168.ggParameter.sx=0.1;me._image_168.ggParameter.sy=0.1;
				me._image_168.style[domTransform]=parameterToTransform(me._image_168.ggParameter);
				flag=(me._text_268.style.visibility=='hidden');
				me._text_268.style[domTransition]='none';
				me._text_268.style.visibility=flag?'inherit':'hidden';
				me._text_268.ggVisible=flag;
			}
			this.__div.appendChild(this._image_168);
			this._text_268=document.createElement('div');
			this._text_268__text=document.createElement('div');
			this._text_268.className='ggskin ggskin_textdiv';
			this._text_268.ggTextDiv=this._text_268__text;
			this._text_268.ggId="Text 2";
			this._text_268.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_268.ggVisible=false;
			this._text_268.className='ggskin ggskin_text';
			this._text_268.ggType='text';
			this._text_268.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_268.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_268__text.setAttribute('style',hs);
			this._text_268.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_268.appendChild(this._text_268__text);
			this.__div.appendChild(this._text_268);
		} else
		if (hotspot.skinid=='Room_2_13_To_Room_2_14') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_2_13_To_Room_2_14";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_2_14.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_167=document.createElement('div');
			this._image_167.ggId="Image 1";
			this._image_167.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_167.ggVisible=true;
			this._image_167.className='ggskin ggskin_image';
			this._image_167.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_167.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_167.setAttribute('style',hs);
			this._image_167__img=document.createElement('img');
			this._image_167__img.className='ggskin ggskin_image';
			this._image_167__img.setAttribute('src',basePath + 'images/image_167.png');
			this._image_167__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_167__img.className='ggskin ggskin_image';
			this._image_167__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_167__img);
			this._image_167.appendChild(this._image_167__img);
			this._image_167.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_167.style[domTransition]='none';
				} else {
					me._image_167.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_167.ggParameter.sx=0.2;me._image_167.ggParameter.sy=0.2;
				me._image_167.style[domTransform]=parameterToTransform(me._image_167.ggParameter);
				flag=(me._text_267.style.visibility=='hidden');
				me._text_267.style[domTransition]='none';
				me._text_267.style.visibility=flag?'inherit':'hidden';
				me._text_267.ggVisible=flag;
			}
			this._image_167.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_167.style[domTransition]='none';
				} else {
					me._image_167.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_167.ggParameter.sx=0.1;me._image_167.ggParameter.sy=0.1;
				me._image_167.style[domTransform]=parameterToTransform(me._image_167.ggParameter);
				flag=(me._text_267.style.visibility=='hidden');
				me._text_267.style[domTransition]='none';
				me._text_267.style.visibility=flag?'inherit':'hidden';
				me._text_267.ggVisible=flag;
			}
			this.__div.appendChild(this._image_167);
			this._text_267=document.createElement('div');
			this._text_267__text=document.createElement('div');
			this._text_267.className='ggskin ggskin_textdiv';
			this._text_267.ggTextDiv=this._text_267__text;
			this._text_267.ggId="Text 2";
			this._text_267.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_267.ggVisible=false;
			this._text_267.className='ggskin ggskin_text';
			this._text_267.ggType='text';
			this._text_267.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_267.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_267__text.setAttribute('style',hs);
			this._text_267.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_267.appendChild(this._text_267__text);
			this.__div.appendChild(this._text_267);
		} else
		if (hotspot.skinid=='Gang_2_Treppe_To_Gang_2_14') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_2_Treppe_To_Gang_2_14";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_2_14.onclick();
				me.player.openNext("Gang 2_14_out.xml","180");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_166=document.createElement('div');
			this._image_166.ggId="Image 1";
			this._image_166.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_166.ggVisible=true;
			this._image_166.className='ggskin ggskin_image';
			this._image_166.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_166.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_166.setAttribute('style',hs);
			this._image_166__img=document.createElement('img');
			this._image_166__img.className='ggskin ggskin_image';
			this._image_166__img.setAttribute('src',basePath + 'images/image_166.png');
			this._image_166__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_166__img.className='ggskin ggskin_image';
			this._image_166__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_166__img);
			this._image_166.appendChild(this._image_166__img);
			this._image_166.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_166.style[domTransition]='none';
				} else {
					me._image_166.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_166.ggParameter.sx=0.2;me._image_166.ggParameter.sy=0.2;
				me._image_166.style[domTransform]=parameterToTransform(me._image_166.ggParameter);
				flag=(me._text_266.style.visibility=='hidden');
				me._text_266.style[domTransition]='none';
				me._text_266.style.visibility=flag?'inherit':'hidden';
				me._text_266.ggVisible=flag;
			}
			this._image_166.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_166.style[domTransition]='none';
				} else {
					me._image_166.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_166.ggParameter.sx=0.1;me._image_166.ggParameter.sy=0.1;
				me._image_166.style[domTransform]=parameterToTransform(me._image_166.ggParameter);
				flag=(me._text_266.style.visibility=='hidden');
				me._text_266.style[domTransition]='none';
				me._text_266.style.visibility=flag?'inherit':'hidden';
				me._text_266.ggVisible=flag;
			}
			this.__div.appendChild(this._image_166);
			this._text_266=document.createElement('div');
			this._text_266__text=document.createElement('div');
			this._text_266.className='ggskin ggskin_textdiv';
			this._text_266.ggTextDiv=this._text_266__text;
			this._text_266.ggId="Text 2";
			this._text_266.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_266.ggVisible=false;
			this._text_266.className='ggskin ggskin_text';
			this._text_266.ggType='text';
			this._text_266.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_266.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_266__text.setAttribute('style',hs);
			this._text_266.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_266.appendChild(this._text_266__text);
			this.__div.appendChild(this._text_266);
		} else
		if (hotspot.skinid=='Gang_2_Treppe_To_Gang_2_06') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_2_Treppe_To_Gang_2_06";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_2_06.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_165=document.createElement('div');
			this._image_165.ggId="Image 1";
			this._image_165.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_165.ggVisible=true;
			this._image_165.className='ggskin ggskin_image';
			this._image_165.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_165.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_165.setAttribute('style',hs);
			this._image_165__img=document.createElement('img');
			this._image_165__img.className='ggskin ggskin_image';
			this._image_165__img.setAttribute('src',basePath + 'images/image_165.png');
			this._image_165__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_165__img.className='ggskin ggskin_image';
			this._image_165__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_165__img);
			this._image_165.appendChild(this._image_165__img);
			this._image_165.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_165.style[domTransition]='none';
				} else {
					me._image_165.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_165.ggParameter.sx=0.2;me._image_165.ggParameter.sy=0.2;
				me._image_165.style[domTransform]=parameterToTransform(me._image_165.ggParameter);
				flag=(me._text_265.style.visibility=='hidden');
				me._text_265.style[domTransition]='none';
				me._text_265.style.visibility=flag?'inherit':'hidden';
				me._text_265.ggVisible=flag;
			}
			this._image_165.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_165.style[domTransition]='none';
				} else {
					me._image_165.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_165.ggParameter.sx=0.1;me._image_165.ggParameter.sy=0.1;
				me._image_165.style[domTransform]=parameterToTransform(me._image_165.ggParameter);
				flag=(me._text_265.style.visibility=='hidden');
				me._text_265.style[domTransition]='none';
				me._text_265.style.visibility=flag?'inherit':'hidden';
				me._text_265.ggVisible=flag;
			}
			this.__div.appendChild(this._image_165);
			this._text_265=document.createElement('div');
			this._text_265__text=document.createElement('div');
			this._text_265.className='ggskin ggskin_textdiv';
			this._text_265.ggTextDiv=this._text_265__text;
			this._text_265.ggId="Text 2";
			this._text_265.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_265.ggVisible=false;
			this._text_265.className='ggskin ggskin_text';
			this._text_265.ggType='text';
			this._text_265.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_265.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_265__text.setAttribute('style',hs);
			this._text_265.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_265.appendChild(this._text_265__text);
			this.__div.appendChild(this._text_265);
		} else
		if (hotspot.skinid=='Room_Out_1_28') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_1_28";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_1_24.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_164=document.createElement('div');
			this._image_164.ggId="Image 1";
			this._image_164.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_164.ggVisible=true;
			this._image_164.className='ggskin ggskin_image';
			this._image_164.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_164.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_164.setAttribute('style',hs);
			this._image_164__img=document.createElement('img');
			this._image_164__img.className='ggskin ggskin_image';
			this._image_164__img.setAttribute('src',basePath + 'images/image_164.png');
			this._image_164__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_164__img.className='ggskin ggskin_image';
			this._image_164__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_164__img);
			this._image_164.appendChild(this._image_164__img);
			this._image_164.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_164.style[domTransition]='none';
				} else {
					me._image_164.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_164.ggParameter.sx=0.2;me._image_164.ggParameter.sy=0.2;
				me._image_164.style[domTransform]=parameterToTransform(me._image_164.ggParameter);
				flag=(me._text_264.style.visibility=='hidden');
				me._text_264.style[domTransition]='none';
				me._text_264.style.visibility=flag?'inherit':'hidden';
				me._text_264.ggVisible=flag;
			}
			this._image_164.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_164.style[domTransition]='none';
				} else {
					me._image_164.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_164.ggParameter.sx=0.1;me._image_164.ggParameter.sy=0.1;
				me._image_164.style[domTransform]=parameterToTransform(me._image_164.ggParameter);
				flag=(me._text_264.style.visibility=='hidden');
				me._text_264.style[domTransition]='none';
				me._text_264.style.visibility=flag?'inherit':'hidden';
				me._text_264.ggVisible=flag;
			}
			this.__div.appendChild(this._image_164);
			this._text_264=document.createElement('div');
			this._text_264__text=document.createElement('div');
			this._text_264.className='ggskin ggskin_textdiv';
			this._text_264.ggTextDiv=this._text_264__text;
			this._text_264.ggId="Text 2";
			this._text_264.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_264.ggVisible=false;
			this._text_264.className='ggskin ggskin_text';
			this._text_264.ggType='text';
			this._text_264.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_264.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_264__text.setAttribute('style',hs);
			this._text_264.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_264.appendChild(this._text_264__text);
			this.__div.appendChild(this._text_264);
		} else
		if (hotspot.skinid=='Room_In_1_28') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_1_28";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_1_28.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_163=document.createElement('div');
			this._image_163.ggId="Image 1";
			this._image_163.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_163.ggVisible=true;
			this._image_163.className='ggskin ggskin_image';
			this._image_163.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_163.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_163.setAttribute('style',hs);
			this._image_163__img=document.createElement('img');
			this._image_163__img.className='ggskin ggskin_image';
			this._image_163__img.setAttribute('src',basePath + 'images/image_163.png');
			this._image_163__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_163__img.className='ggskin ggskin_image';
			this._image_163__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_163__img);
			this._image_163.appendChild(this._image_163__img);
			this._image_163.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_163.style[domTransition]='none';
				} else {
					me._image_163.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_163.ggParameter.sx=0.2;me._image_163.ggParameter.sy=0.2;
				me._image_163.style[domTransform]=parameterToTransform(me._image_163.ggParameter);
				flag=(me._text_263.style.visibility=='hidden');
				me._text_263.style[domTransition]='none';
				me._text_263.style.visibility=flag?'inherit':'hidden';
				me._text_263.ggVisible=flag;
			}
			this._image_163.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_163.style[domTransition]='none';
				} else {
					me._image_163.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_163.ggParameter.sx=0.1;me._image_163.ggParameter.sy=0.1;
				me._image_163.style[domTransform]=parameterToTransform(me._image_163.ggParameter);
				flag=(me._text_263.style.visibility=='hidden');
				me._text_263.style[domTransition]='none';
				me._text_263.style.visibility=flag?'inherit':'hidden';
				me._text_263.ggVisible=flag;
			}
			this.__div.appendChild(this._image_163);
			this._text_263=document.createElement('div');
			this._text_263__text=document.createElement('div');
			this._text_263.className='ggskin ggskin_textdiv';
			this._text_263.ggTextDiv=this._text_263__text;
			this._text_263.ggId="Text 2";
			this._text_263.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_263.ggVisible=false;
			this._text_263.className='ggskin ggskin_text';
			this._text_263.ggType='text';
			this._text_263.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_263.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_263__text.setAttribute('style',hs);
			this._text_263.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_263.appendChild(this._text_263__text);
			this.__div.appendChild(this._text_263);
		} else
		if (hotspot.skinid=='Gang_1_24_To_Gang_Bibliothek') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_1_24_To_Gang_Bibliothek";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_1_25.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_162=document.createElement('div');
			this._image_162.ggId="Image 1";
			this._image_162.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_162.ggVisible=true;
			this._image_162.className='ggskin ggskin_image';
			this._image_162.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_162.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_162.setAttribute('style',hs);
			this._image_162__img=document.createElement('img');
			this._image_162__img.className='ggskin ggskin_image';
			this._image_162__img.setAttribute('src',basePath + 'images/image_162.png');
			this._image_162__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_162__img.className='ggskin ggskin_image';
			this._image_162__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_162__img);
			this._image_162.appendChild(this._image_162__img);
			this._image_162.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_162.style[domTransition]='none';
				} else {
					me._image_162.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_162.ggParameter.sx=0.2;me._image_162.ggParameter.sy=0.2;
				me._image_162.style[domTransform]=parameterToTransform(me._image_162.ggParameter);
				flag=(me._text_262.style.visibility=='hidden');
				me._text_262.style[domTransition]='none';
				me._text_262.style.visibility=flag?'inherit':'hidden';
				me._text_262.ggVisible=flag;
			}
			this._image_162.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_162.style[domTransition]='none';
				} else {
					me._image_162.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_162.ggParameter.sx=0.1;me._image_162.ggParameter.sy=0.1;
				me._image_162.style[domTransform]=parameterToTransform(me._image_162.ggParameter);
				flag=(me._text_262.style.visibility=='hidden');
				me._text_262.style[domTransition]='none';
				me._text_262.style.visibility=flag?'inherit':'hidden';
				me._text_262.ggVisible=flag;
			}
			this.__div.appendChild(this._image_162);
			this._text_262=document.createElement('div');
			this._text_262__text=document.createElement('div');
			this._text_262.className='ggskin ggskin_textdiv';
			this._text_262.ggTextDiv=this._text_262__text;
			this._text_262.ggId="Text 2";
			this._text_262.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_262.ggVisible=false;
			this._text_262.className='ggskin ggskin_text';
			this._text_262.ggType='text';
			this._text_262.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_262.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_262__text.setAttribute('style',hs);
			this._text_262.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_262.appendChild(this._text_262__text);
			this.__div.appendChild(this._text_262);
		} else
		if (hotspot.skinid=='Room_In_1_08') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_1_08";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_1_08.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_161=document.createElement('div');
			this._image_161.ggId="Image 1";
			this._image_161.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_161.ggVisible=true;
			this._image_161.className='ggskin ggskin_image';
			this._image_161.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_161.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_161.setAttribute('style',hs);
			this._image_161__img=document.createElement('img');
			this._image_161__img.className='ggskin ggskin_image';
			this._image_161__img.setAttribute('src',basePath + 'images/image_161.png');
			this._image_161__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_161__img.className='ggskin ggskin_image';
			this._image_161__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_161__img);
			this._image_161.appendChild(this._image_161__img);
			this._image_161.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_161.style[domTransition]='none';
				} else {
					me._image_161.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_161.ggParameter.sx=0.2;me._image_161.ggParameter.sy=0.2;
				me._image_161.style[domTransform]=parameterToTransform(me._image_161.ggParameter);
				flag=(me._text_261.style.visibility=='hidden');
				me._text_261.style[domTransition]='none';
				me._text_261.style.visibility=flag?'inherit':'hidden';
				me._text_261.ggVisible=flag;
			}
			this._image_161.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_161.style[domTransition]='none';
				} else {
					me._image_161.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_161.ggParameter.sx=0.1;me._image_161.ggParameter.sy=0.1;
				me._image_161.style[domTransform]=parameterToTransform(me._image_161.ggParameter);
				flag=(me._text_261.style.visibility=='hidden');
				me._text_261.style[domTransition]='none';
				me._text_261.style.visibility=flag?'inherit':'hidden';
				me._text_261.ggVisible=flag;
			}
			this.__div.appendChild(this._image_161);
			this._text_261=document.createElement('div');
			this._text_261__text=document.createElement('div');
			this._text_261.className='ggskin ggskin_textdiv';
			this._text_261.ggTextDiv=this._text_261__text;
			this._text_261.ggId="Text 2";
			this._text_261.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_261.ggVisible=false;
			this._text_261.className='ggskin ggskin_text';
			this._text_261.ggType='text';
			this._text_261.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_261.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_261__text.setAttribute('style',hs);
			this._text_261.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_261.appendChild(this._text_261__text);
			this.__div.appendChild(this._text_261);
		} else
		if (hotspot.skinid=='Gang_Bibliothek_To_Gang_1_25') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_Bibliothek_To_Gang_1_25";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_1_25.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_160=document.createElement('div');
			this._image_160.ggId="Image 1";
			this._image_160.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_160.ggVisible=true;
			this._image_160.className='ggskin ggskin_image';
			this._image_160.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_160.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_160.setAttribute('style',hs);
			this._image_160__img=document.createElement('img');
			this._image_160__img.className='ggskin ggskin_image';
			this._image_160__img.setAttribute('src',basePath + 'images/image_160.png');
			this._image_160__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_160__img.className='ggskin ggskin_image';
			this._image_160__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_160__img);
			this._image_160.appendChild(this._image_160__img);
			this._image_160.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_160.style[domTransition]='none';
				} else {
					me._image_160.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_160.ggParameter.sx=0.2;me._image_160.ggParameter.sy=0.2;
				me._image_160.style[domTransform]=parameterToTransform(me._image_160.ggParameter);
				flag=(me._text_260.style.visibility=='hidden');
				me._text_260.style[domTransition]='none';
				me._text_260.style.visibility=flag?'inherit':'hidden';
				me._text_260.ggVisible=flag;
			}
			this._image_160.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_160.style[domTransition]='none';
				} else {
					me._image_160.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_160.ggParameter.sx=0.1;me._image_160.ggParameter.sy=0.1;
				me._image_160.style[domTransform]=parameterToTransform(me._image_160.ggParameter);
				flag=(me._text_260.style.visibility=='hidden');
				me._text_260.style[domTransition]='none';
				me._text_260.style.visibility=flag?'inherit':'hidden';
				me._text_260.ggVisible=flag;
			}
			this.__div.appendChild(this._image_160);
			this._text_260=document.createElement('div');
			this._text_260__text=document.createElement('div');
			this._text_260.className='ggskin ggskin_textdiv';
			this._text_260.ggTextDiv=this._text_260__text;
			this._text_260.ggId="Text 2";
			this._text_260.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_260.ggVisible=false;
			this._text_260.className='ggskin ggskin_text';
			this._text_260.ggType='text';
			this._text_260.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_260.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_260__text.setAttribute('style',hs);
			this._text_260.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_260.appendChild(this._text_260__text);
			this.__div.appendChild(this._text_260);
		} else
		if (hotspot.skinid=='Room_Out_1_08') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_1_08";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._bibliothek.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_159=document.createElement('div');
			this._image_159.ggId="Image 1";
			this._image_159.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_159.ggVisible=true;
			this._image_159.className='ggskin ggskin_image';
			this._image_159.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_159.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_159.setAttribute('style',hs);
			this._image_159__img=document.createElement('img');
			this._image_159__img.className='ggskin ggskin_image';
			this._image_159__img.setAttribute('src',basePath + 'images/image_159.png');
			this._image_159__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_159__img.className='ggskin ggskin_image';
			this._image_159__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_159__img);
			this._image_159.appendChild(this._image_159__img);
			this._image_159.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_159.style[domTransition]='none';
				} else {
					me._image_159.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_159.ggParameter.sx=0.2;me._image_159.ggParameter.sy=0.2;
				me._image_159.style[domTransform]=parameterToTransform(me._image_159.ggParameter);
				flag=(me._text_259.style.visibility=='hidden');
				me._text_259.style[domTransition]='none';
				me._text_259.style.visibility=flag?'inherit':'hidden';
				me._text_259.ggVisible=flag;
			}
			this._image_159.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_159.style[domTransition]='none';
				} else {
					me._image_159.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_159.ggParameter.sx=0.1;me._image_159.ggParameter.sy=0.1;
				me._image_159.style[domTransform]=parameterToTransform(me._image_159.ggParameter);
				flag=(me._text_259.style.visibility=='hidden');
				me._text_259.style[domTransition]='none';
				me._text_259.style.visibility=flag?'inherit':'hidden';
				me._text_259.ggVisible=flag;
			}
			this.__div.appendChild(this._image_159);
			this._text_259=document.createElement('div');
			this._text_259__text=document.createElement('div');
			this._text_259.className='ggskin ggskin_textdiv';
			this._text_259.ggTextDiv=this._text_259__text;
			this._text_259.ggId="Text 2";
			this._text_259.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_259.ggVisible=false;
			this._text_259.className='ggskin ggskin_text';
			this._text_259.ggType='text';
			this._text_259.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_259.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_259__text.setAttribute('style',hs);
			this._text_259.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_259.appendChild(this._text_259__text);
			this.__div.appendChild(this._text_259);
		} else
		if (hotspot.skinid=='Room_Out_1_31') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_1_31";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_1_24.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_158=document.createElement('div');
			this._image_158.ggId="Image 1";
			this._image_158.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_158.ggVisible=true;
			this._image_158.className='ggskin ggskin_image';
			this._image_158.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_158.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_158.setAttribute('style',hs);
			this._image_158__img=document.createElement('img');
			this._image_158__img.className='ggskin ggskin_image';
			this._image_158__img.setAttribute('src',basePath + 'images/image_158.png');
			this._image_158__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_158__img.className='ggskin ggskin_image';
			this._image_158__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_158__img);
			this._image_158.appendChild(this._image_158__img);
			this._image_158.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_158.style[domTransition]='none';
				} else {
					me._image_158.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_158.ggParameter.sx=0.2;me._image_158.ggParameter.sy=0.2;
				me._image_158.style[domTransform]=parameterToTransform(me._image_158.ggParameter);
				flag=(me._text_258.style.visibility=='hidden');
				me._text_258.style[domTransition]='none';
				me._text_258.style.visibility=flag?'inherit':'hidden';
				me._text_258.ggVisible=flag;
			}
			this._image_158.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_158.style[domTransition]='none';
				} else {
					me._image_158.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_158.ggParameter.sx=0.1;me._image_158.ggParameter.sy=0.1;
				me._image_158.style[domTransform]=parameterToTransform(me._image_158.ggParameter);
				flag=(me._text_258.style.visibility=='hidden');
				me._text_258.style[domTransition]='none';
				me._text_258.style.visibility=flag?'inherit':'hidden';
				me._text_258.ggVisible=flag;
			}
			this.__div.appendChild(this._image_158);
			this._text_258=document.createElement('div');
			this._text_258__text=document.createElement('div');
			this._text_258.className='ggskin ggskin_textdiv';
			this._text_258.ggTextDiv=this._text_258__text;
			this._text_258.ggId="Text 2";
			this._text_258.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_258.ggVisible=false;
			this._text_258.className='ggskin ggskin_text';
			this._text_258.ggType='text';
			this._text_258.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_258.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_258__text.setAttribute('style',hs);
			this._text_258.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_258.appendChild(this._text_258__text);
			this.__div.appendChild(this._text_258);
		} else
		if (hotspot.skinid=='Room_In_1_31') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_1_31";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_1_31.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_157=document.createElement('div');
			this._image_157.ggId="Image 1";
			this._image_157.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_157.ggVisible=true;
			this._image_157.className='ggskin ggskin_image';
			this._image_157.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_157.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_157.setAttribute('style',hs);
			this._image_157__img=document.createElement('img');
			this._image_157__img.className='ggskin ggskin_image';
			this._image_157__img.setAttribute('src',basePath + 'images/image_157.png');
			this._image_157__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_157__img.className='ggskin ggskin_image';
			this._image_157__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_157__img);
			this._image_157.appendChild(this._image_157__img);
			this._image_157.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_157.style[domTransition]='none';
				} else {
					me._image_157.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_157.ggParameter.sx=0.2;me._image_157.ggParameter.sy=0.2;
				me._image_157.style[domTransform]=parameterToTransform(me._image_157.ggParameter);
				flag=(me._text_257.style.visibility=='hidden');
				me._text_257.style[domTransition]='none';
				me._text_257.style.visibility=flag?'inherit':'hidden';
				me._text_257.ggVisible=flag;
			}
			this._image_157.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_157.style[domTransition]='none';
				} else {
					me._image_157.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_157.ggParameter.sx=0.1;me._image_157.ggParameter.sy=0.1;
				me._image_157.style[domTransform]=parameterToTransform(me._image_157.ggParameter);
				flag=(me._text_257.style.visibility=='hidden');
				me._text_257.style[domTransition]='none';
				me._text_257.style.visibility=flag?'inherit':'hidden';
				me._text_257.ggVisible=flag;
			}
			this.__div.appendChild(this._image_157);
			this._text_257=document.createElement('div');
			this._text_257__text=document.createElement('div');
			this._text_257.className='ggskin ggskin_textdiv';
			this._text_257.ggTextDiv=this._text_257__text;
			this._text_257.ggId="Text 2";
			this._text_257.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_257.ggVisible=false;
			this._text_257.className='ggskin ggskin_text';
			this._text_257.ggType='text';
			this._text_257.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_257.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_257__text.setAttribute('style',hs);
			this._text_257.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_257.appendChild(this._text_257__text);
			this.__div.appendChild(this._text_257);
		} else
		if (hotspot.skinid=='Gang_1_Treppe_To_Stock_2') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_1_Treppe_To_Stock_2";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._up_2.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_156=document.createElement('div');
			this._image_156.ggId="Image 1";
			this._image_156.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_156.ggVisible=true;
			this._image_156.className='ggskin ggskin_image';
			this._image_156.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_156.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_156.setAttribute('style',hs);
			this._image_156__img=document.createElement('img');
			this._image_156__img.className='ggskin ggskin_image';
			this._image_156__img.setAttribute('src',basePath + 'images/image_156.png');
			this._image_156__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_156__img.className='ggskin ggskin_image';
			this._image_156__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_156__img);
			this._image_156.appendChild(this._image_156__img);
			this._image_156.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_156.style[domTransition]='none';
				} else {
					me._image_156.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_156.ggParameter.sx=0.2;me._image_156.ggParameter.sy=0.2;
				me._image_156.style[domTransform]=parameterToTransform(me._image_156.ggParameter);
				flag=(me._text_256.style.visibility=='hidden');
				me._text_256.style[domTransition]='none';
				me._text_256.style.visibility=flag?'inherit':'hidden';
				me._text_256.ggVisible=flag;
			}
			this._image_156.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_156.style[domTransition]='none';
				} else {
					me._image_156.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_156.ggParameter.sx=0.1;me._image_156.ggParameter.sy=0.1;
				me._image_156.style[domTransform]=parameterToTransform(me._image_156.ggParameter);
				flag=(me._text_256.style.visibility=='hidden');
				me._text_256.style[domTransition]='none';
				me._text_256.style.visibility=flag?'inherit':'hidden';
				me._text_256.ggVisible=flag;
			}
			this.__div.appendChild(this._image_156);
			this._text_256=document.createElement('div');
			this._text_256__text=document.createElement('div');
			this._text_256.className='ggskin ggskin_textdiv';
			this._text_256.ggTextDiv=this._text_256__text;
			this._text_256.ggId="Text 2";
			this._text_256.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_256.ggVisible=false;
			this._text_256.className='ggskin ggskin_text';
			this._text_256.ggType='text';
			this._text_256.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_256.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_256__text.setAttribute('style',hs);
			this._text_256.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_256.appendChild(this._text_256__text);
			this.__div.appendChild(this._text_256);
		} else
		if (hotspot.skinid=='Gang_1_Treppe_To_Gang_1_D') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_1_Treppe_To_Gang_1_D";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_1_d.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_155=document.createElement('div');
			this._image_155.ggId="Image 1";
			this._image_155.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_155.ggVisible=true;
			this._image_155.className='ggskin ggskin_image';
			this._image_155.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_155.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_155.setAttribute('style',hs);
			this._image_155__img=document.createElement('img');
			this._image_155__img.className='ggskin ggskin_image';
			this._image_155__img.setAttribute('src',basePath + 'images/image_155.png');
			this._image_155__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_155__img.className='ggskin ggskin_image';
			this._image_155__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_155__img);
			this._image_155.appendChild(this._image_155__img);
			this._image_155.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_155.style[domTransition]='none';
				} else {
					me._image_155.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_155.ggParameter.sx=0.2;me._image_155.ggParameter.sy=0.2;
				me._image_155.style[domTransform]=parameterToTransform(me._image_155.ggParameter);
				flag=(me._text_255.style.visibility=='hidden');
				me._text_255.style[domTransition]='none';
				me._text_255.style.visibility=flag?'inherit':'hidden';
				me._text_255.ggVisible=flag;
			}
			this._image_155.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_155.style[domTransition]='none';
				} else {
					me._image_155.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_155.ggParameter.sx=0.1;me._image_155.ggParameter.sy=0.1;
				me._image_155.style[domTransform]=parameterToTransform(me._image_155.ggParameter);
				flag=(me._text_255.style.visibility=='hidden');
				me._text_255.style[domTransition]='none';
				me._text_255.style.visibility=flag?'inherit':'hidden';
				me._text_255.ggVisible=flag;
			}
			this.__div.appendChild(this._image_155);
			this._text_255=document.createElement('div');
			this._text_255__text=document.createElement('div');
			this._text_255.className='ggskin ggskin_textdiv';
			this._text_255.ggTextDiv=this._text_255__text;
			this._text_255.ggId="Text 2";
			this._text_255.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_255.ggVisible=false;
			this._text_255.className='ggskin ggskin_text';
			this._text_255.ggType='text';
			this._text_255.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_255.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_255__text.setAttribute('style',hs);
			this._text_255.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_255.appendChild(this._text_255__text);
			this.__div.appendChild(this._text_255);
		} else
		if (hotspot.skinid=='Gang_1_Treppe_To_Gang_1_25') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_1_Treppe_To_Gang_1_25";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_1_25.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_154=document.createElement('div');
			this._image_154.ggId="Image 1";
			this._image_154.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_154.ggVisible=true;
			this._image_154.className='ggskin ggskin_image';
			this._image_154.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_154.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_154.setAttribute('style',hs);
			this._image_154__img=document.createElement('img');
			this._image_154__img.className='ggskin ggskin_image';
			this._image_154__img.setAttribute('src',basePath + 'images/image_154.png');
			this._image_154__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_154__img.className='ggskin ggskin_image';
			this._image_154__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_154__img);
			this._image_154.appendChild(this._image_154__img);
			this._image_154.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_154.style[domTransition]='none';
				} else {
					me._image_154.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_154.ggParameter.sx=0.2;me._image_154.ggParameter.sy=0.2;
				me._image_154.style[domTransform]=parameterToTransform(me._image_154.ggParameter);
				flag=(me._text_254.style.visibility=='hidden');
				me._text_254.style[domTransition]='none';
				me._text_254.style.visibility=flag?'inherit':'hidden';
				me._text_254.ggVisible=flag;
			}
			this._image_154.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_154.style[domTransition]='none';
				} else {
					me._image_154.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_154.ggParameter.sx=0.1;me._image_154.ggParameter.sy=0.1;
				me._image_154.style[domTransform]=parameterToTransform(me._image_154.ggParameter);
				flag=(me._text_254.style.visibility=='hidden');
				me._text_254.style[domTransition]='none';
				me._text_254.style.visibility=flag?'inherit':'hidden';
				me._text_254.ggVisible=flag;
			}
			this.__div.appendChild(this._image_154);
			this._text_254=document.createElement('div');
			this._text_254__text=document.createElement('div');
			this._text_254.className='ggskin ggskin_textdiv';
			this._text_254.ggTextDiv=this._text_254__text;
			this._text_254.ggId="Text 2";
			this._text_254.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_254.ggVisible=false;
			this._text_254.className='ggskin ggskin_text';
			this._text_254.ggType='text';
			this._text_254.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_254.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_254__text.setAttribute('style',hs);
			this._text_254.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_254.appendChild(this._text_254__text);
			this.__div.appendChild(this._text_254);
		} else
		if (hotspot.skinid=='Gang_1_25_To_Gang_1_24') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_1_25_To_Gang_1_24";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_1_24.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_153=document.createElement('div');
			this._image_153.ggId="Image 1";
			this._image_153.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_153.ggVisible=true;
			this._image_153.className='ggskin ggskin_image';
			this._image_153.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_153.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_153.setAttribute('style',hs);
			this._image_153__img=document.createElement('img');
			this._image_153__img.className='ggskin ggskin_image';
			this._image_153__img.setAttribute('src',basePath + 'images/image_153.png');
			this._image_153__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_153__img.className='ggskin ggskin_image';
			this._image_153__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_153__img);
			this._image_153.appendChild(this._image_153__img);
			this._image_153.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_153.style[domTransition]='none';
				} else {
					me._image_153.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_153.ggParameter.sx=0.2;me._image_153.ggParameter.sy=0.2;
				me._image_153.style[domTransform]=parameterToTransform(me._image_153.ggParameter);
				flag=(me._text_253.style.visibility=='hidden');
				me._text_253.style[domTransition]='none';
				me._text_253.style.visibility=flag?'inherit':'hidden';
				me._text_253.ggVisible=flag;
			}
			this._image_153.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_153.style[domTransition]='none';
				} else {
					me._image_153.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_153.ggParameter.sx=0.1;me._image_153.ggParameter.sy=0.1;
				me._image_153.style[domTransform]=parameterToTransform(me._image_153.ggParameter);
				flag=(me._text_253.style.visibility=='hidden');
				me._text_253.style[domTransition]='none';
				me._text_253.style.visibility=flag?'inherit':'hidden';
				me._text_253.ggVisible=flag;
			}
			this.__div.appendChild(this._image_153);
			this._text_253=document.createElement('div');
			this._text_253__text=document.createElement('div');
			this._text_253.className='ggskin ggskin_textdiv';
			this._text_253.ggTextDiv=this._text_253__text;
			this._text_253.ggId="Text 2";
			this._text_253.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_253.ggVisible=false;
			this._text_253.className='ggskin ggskin_text';
			this._text_253.ggType='text';
			this._text_253.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_253.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_253__text.setAttribute('style',hs);
			this._text_253.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_253.appendChild(this._text_253__text);
			this.__div.appendChild(this._text_253);
		} else
		if (hotspot.skinid=='Gang_1_25_To_Gang_1_Treppe') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_1_25_To_Gang_1_Treppe";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_1_treppe.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_152=document.createElement('div');
			this._image_152.ggId="Image 1";
			this._image_152.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_152.ggVisible=true;
			this._image_152.className='ggskin ggskin_image';
			this._image_152.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_152.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_152.setAttribute('style',hs);
			this._image_152__img=document.createElement('img');
			this._image_152__img.className='ggskin ggskin_image';
			this._image_152__img.setAttribute('src',basePath + 'images/image_152.png');
			this._image_152__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_152__img.className='ggskin ggskin_image';
			this._image_152__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_152__img);
			this._image_152.appendChild(this._image_152__img);
			this._image_152.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_152.style[domTransition]='none';
				} else {
					me._image_152.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_152.ggParameter.sx=0.2;me._image_152.ggParameter.sy=0.2;
				me._image_152.style[domTransform]=parameterToTransform(me._image_152.ggParameter);
				flag=(me._text_252.style.visibility=='hidden');
				me._text_252.style[domTransition]='none';
				me._text_252.style.visibility=flag?'inherit':'hidden';
				me._text_252.ggVisible=flag;
			}
			this._image_152.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_152.style[domTransition]='none';
				} else {
					me._image_152.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_152.ggParameter.sx=0.1;me._image_152.ggParameter.sy=0.1;
				me._image_152.style[domTransform]=parameterToTransform(me._image_152.ggParameter);
				flag=(me._text_252.style.visibility=='hidden');
				me._text_252.style[domTransition]='none';
				me._text_252.style.visibility=flag?'inherit':'hidden';
				me._text_252.ggVisible=flag;
			}
			this.__div.appendChild(this._image_152);
			this._text_252=document.createElement('div');
			this._text_252__text=document.createElement('div');
			this._text_252.className='ggskin ggskin_textdiv';
			this._text_252.ggTextDiv=this._text_252__text;
			this._text_252.ggId="Text 2";
			this._text_252.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_252.ggVisible=false;
			this._text_252.className='ggskin ggskin_text';
			this._text_252.ggType='text';
			this._text_252.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_252.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_252__text.setAttribute('style',hs);
			this._text_252.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_252.appendChild(this._text_252__text);
			this.__div.appendChild(this._text_252);
		} else
		if (hotspot.skinid=='Gang_1_25_To_Bibliothek') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_1_25_To_Bibliothek";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._bibliothek.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_151=document.createElement('div');
			this._image_151.ggId="Image 1";
			this._image_151.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_151.ggVisible=true;
			this._image_151.className='ggskin ggskin_image';
			this._image_151.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_151.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_151.setAttribute('style',hs);
			this._image_151__img=document.createElement('img');
			this._image_151__img.className='ggskin ggskin_image';
			this._image_151__img.setAttribute('src',basePath + 'images/image_151.png');
			this._image_151__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_151__img.className='ggskin ggskin_image';
			this._image_151__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_151__img);
			this._image_151.appendChild(this._image_151__img);
			this._image_151.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_151.style[domTransition]='none';
				} else {
					me._image_151.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_151.ggParameter.sx=0.2;me._image_151.ggParameter.sy=0.2;
				me._image_151.style[domTransform]=parameterToTransform(me._image_151.ggParameter);
				flag=(me._text_251.style.visibility=='hidden');
				me._text_251.style[domTransition]='none';
				me._text_251.style.visibility=flag?'inherit':'hidden';
				me._text_251.ggVisible=flag;
			}
			this._image_151.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_151.style[domTransition]='none';
				} else {
					me._image_151.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_151.ggParameter.sx=0.1;me._image_151.ggParameter.sy=0.1;
				me._image_151.style[domTransform]=parameterToTransform(me._image_151.ggParameter);
				flag=(me._text_251.style.visibility=='hidden');
				me._text_251.style[domTransition]='none';
				me._text_251.style.visibility=flag?'inherit':'hidden';
				me._text_251.ggVisible=flag;
			}
			this.__div.appendChild(this._image_151);
			this._text_251=document.createElement('div');
			this._text_251__text=document.createElement('div');
			this._text_251.className='ggskin ggskin_textdiv';
			this._text_251.ggTextDiv=this._text_251__text;
			this._text_251.ggId="Text 2";
			this._text_251.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_251.ggVisible=false;
			this._text_251.className='ggskin ggskin_text';
			this._text_251.ggType='text';
			this._text_251.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_251.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_251__text.setAttribute('style',hs);
			this._text_251.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_251.appendChild(this._text_251__text);
			this.__div.appendChild(this._text_251);
		} else
		if (hotspot.skinid=='Gang_1_15_To_Bibliothek') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_1_15_To_Bibliothek";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._bibliothek.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_150=document.createElement('div');
			this._image_150.ggId="Image 1";
			this._image_150.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_150.ggVisible=true;
			this._image_150.className='ggskin ggskin_image';
			this._image_150.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_150.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_150.setAttribute('style',hs);
			this._image_150__img=document.createElement('img');
			this._image_150__img.className='ggskin ggskin_image';
			this._image_150__img.setAttribute('src',basePath + 'images/image_150.png');
			this._image_150__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_150__img.className='ggskin ggskin_image';
			this._image_150__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_150__img);
			this._image_150.appendChild(this._image_150__img);
			this._image_150.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_150.style[domTransition]='none';
				} else {
					me._image_150.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_150.ggParameter.sx=0.2;me._image_150.ggParameter.sy=0.2;
				me._image_150.style[domTransform]=parameterToTransform(me._image_150.ggParameter);
				flag=(me._text_250.style.visibility=='hidden');
				me._text_250.style[domTransition]='none';
				me._text_250.style.visibility=flag?'inherit':'hidden';
				me._text_250.ggVisible=flag;
			}
			this._image_150.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_150.style[domTransition]='none';
				} else {
					me._image_150.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_150.ggParameter.sx=0.1;me._image_150.ggParameter.sy=0.1;
				me._image_150.style[domTransform]=parameterToTransform(me._image_150.ggParameter);
				flag=(me._text_250.style.visibility=='hidden');
				me._text_250.style[domTransition]='none';
				me._text_250.style.visibility=flag?'inherit':'hidden';
				me._text_250.ggVisible=flag;
			}
			this.__div.appendChild(this._image_150);
			this._text_250=document.createElement('div');
			this._text_250__text=document.createElement('div');
			this._text_250.className='ggskin ggskin_textdiv';
			this._text_250.ggTextDiv=this._text_250__text;
			this._text_250.ggId="Text 2";
			this._text_250.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_250.ggVisible=false;
			this._text_250.className='ggskin ggskin_text';
			this._text_250.ggType='text';
			this._text_250.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_250.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_250__text.setAttribute('style',hs);
			this._text_250.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_250.appendChild(this._text_250__text);
			this.__div.appendChild(this._text_250);
		} else
		if (hotspot.skinid=='Gang_1_15_To_Gang_1_25') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_1_15_To_Gang_1_25";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_1_25.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_149=document.createElement('div');
			this._image_149.ggId="Image 1";
			this._image_149.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_149.ggVisible=true;
			this._image_149.className='ggskin ggskin_image';
			this._image_149.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_149.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_149.setAttribute('style',hs);
			this._image_149__img=document.createElement('img');
			this._image_149__img.className='ggskin ggskin_image';
			this._image_149__img.setAttribute('src',basePath + 'images/image_149.png');
			this._image_149__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_149__img.className='ggskin ggskin_image';
			this._image_149__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_149__img);
			this._image_149.appendChild(this._image_149__img);
			this._image_149.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_149.style[domTransition]='none';
				} else {
					me._image_149.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_149.ggParameter.sx=0.2;me._image_149.ggParameter.sy=0.2;
				me._image_149.style[domTransform]=parameterToTransform(me._image_149.ggParameter);
				flag=(me._text_249.style.visibility=='hidden');
				me._text_249.style[domTransition]='none';
				me._text_249.style.visibility=flag?'inherit':'hidden';
				me._text_249.ggVisible=flag;
			}
			this._image_149.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_149.style[domTransition]='none';
				} else {
					me._image_149.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_149.ggParameter.sx=0.1;me._image_149.ggParameter.sy=0.1;
				me._image_149.style[domTransform]=parameterToTransform(me._image_149.ggParameter);
				flag=(me._text_249.style.visibility=='hidden');
				me._text_249.style[domTransition]='none';
				me._text_249.style.visibility=flag?'inherit':'hidden';
				me._text_249.ggVisible=flag;
			}
			this.__div.appendChild(this._image_149);
			this._text_249=document.createElement('div');
			this._text_249__text=document.createElement('div');
			this._text_249.className='ggskin ggskin_textdiv';
			this._text_249.ggTextDiv=this._text_249__text;
			this._text_249.ggId="Text 2";
			this._text_249.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_249.ggVisible=false;
			this._text_249.className='ggskin ggskin_text';
			this._text_249.ggType='text';
			this._text_249.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_249.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_249__text.setAttribute('style',hs);
			this._text_249.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_249.appendChild(this._text_249__text);
			this.__div.appendChild(this._text_249);
		} else
		if (hotspot.skinid=='Bibliothek_To_Gang_1_15') {
			this.__div=document.createElement('div');
			this.__div.ggId="Bibliothek_To_Gang_1_15";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_1_15.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_148=document.createElement('div');
			this._image_148.ggId="Image 1";
			this._image_148.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_148.ggVisible=true;
			this._image_148.className='ggskin ggskin_image';
			this._image_148.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_148.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_148.setAttribute('style',hs);
			this._image_148__img=document.createElement('img');
			this._image_148__img.className='ggskin ggskin_image';
			this._image_148__img.setAttribute('src',basePath + 'images/image_148.png');
			this._image_148__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_148__img.className='ggskin ggskin_image';
			this._image_148__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_148__img);
			this._image_148.appendChild(this._image_148__img);
			this._image_148.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_148.style[domTransition]='none';
				} else {
					me._image_148.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_148.ggParameter.sx=0.2;me._image_148.ggParameter.sy=0.2;
				me._image_148.style[domTransform]=parameterToTransform(me._image_148.ggParameter);
				flag=(me._text_248.style.visibility=='hidden');
				me._text_248.style[domTransition]='none';
				me._text_248.style.visibility=flag?'inherit':'hidden';
				me._text_248.ggVisible=flag;
			}
			this._image_148.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_148.style[domTransition]='none';
				} else {
					me._image_148.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_148.ggParameter.sx=0.1;me._image_148.ggParameter.sy=0.1;
				me._image_148.style[domTransform]=parameterToTransform(me._image_148.ggParameter);
				flag=(me._text_248.style.visibility=='hidden');
				me._text_248.style[domTransition]='none';
				me._text_248.style.visibility=flag?'inherit':'hidden';
				me._text_248.ggVisible=flag;
			}
			this.__div.appendChild(this._image_148);
			this._text_248=document.createElement('div');
			this._text_248__text=document.createElement('div');
			this._text_248.className='ggskin ggskin_textdiv';
			this._text_248.ggTextDiv=this._text_248__text;
			this._text_248.ggId="Text 2";
			this._text_248.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_248.ggVisible=false;
			this._text_248.className='ggskin ggskin_text';
			this._text_248.ggType='text';
			this._text_248.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_248.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_248__text.setAttribute('style',hs);
			this._text_248.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_248.appendChild(this._text_248__text);
			this.__div.appendChild(this._text_248);
		} else
		if (hotspot.skinid=='Gang_1_25_To_Gang_1_15') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_1_25_To_Gang_1_15";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_1_15.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_147=document.createElement('div');
			this._image_147.ggId="Image 1";
			this._image_147.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_147.ggVisible=true;
			this._image_147.className='ggskin ggskin_image';
			this._image_147.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_147.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_147.setAttribute('style',hs);
			this._image_147__img=document.createElement('img');
			this._image_147__img.className='ggskin ggskin_image';
			this._image_147__img.setAttribute('src',basePath + 'images/image_147.png');
			this._image_147__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_147__img.className='ggskin ggskin_image';
			this._image_147__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_147__img);
			this._image_147.appendChild(this._image_147__img);
			this._image_147.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_147.style[domTransition]='none';
				} else {
					me._image_147.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_147.ggParameter.sx=0.2;me._image_147.ggParameter.sy=0.2;
				me._image_147.style[domTransform]=parameterToTransform(me._image_147.ggParameter);
				flag=(me._text_247.style.visibility=='hidden');
				me._text_247.style[domTransition]='none';
				me._text_247.style.visibility=flag?'inherit':'hidden';
				me._text_247.ggVisible=flag;
			}
			this._image_147.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_147.style[domTransition]='none';
				} else {
					me._image_147.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_147.ggParameter.sx=0.1;me._image_147.ggParameter.sy=0.1;
				me._image_147.style[domTransform]=parameterToTransform(me._image_147.ggParameter);
				flag=(me._text_247.style.visibility=='hidden');
				me._text_247.style[domTransition]='none';
				me._text_247.style.visibility=flag?'inherit':'hidden';
				me._text_247.ggVisible=flag;
			}
			this.__div.appendChild(this._image_147);
			this._text_247=document.createElement('div');
			this._text_247__text=document.createElement('div');
			this._text_247.className='ggskin ggskin_textdiv';
			this._text_247.ggTextDiv=this._text_247__text;
			this._text_247.ggId="Text 2";
			this._text_247.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_247.ggVisible=false;
			this._text_247.className='ggskin ggskin_text';
			this._text_247.ggType='text';
			this._text_247.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_247.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_247__text.setAttribute('style',hs);
			this._text_247.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_247.appendChild(this._text_247__text);
			this.__div.appendChild(this._text_247);
		} else
		if (hotspot.skinid=='Room_In_1_08_2') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_1_08_2";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_1_08.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_146=document.createElement('div');
			this._image_146.ggId="Image 1";
			this._image_146.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_146.ggVisible=true;
			this._image_146.className='ggskin ggskin_image';
			this._image_146.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_146.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_146.setAttribute('style',hs);
			this._image_146__img=document.createElement('img');
			this._image_146__img.className='ggskin ggskin_image';
			this._image_146__img.setAttribute('src',basePath + 'images/image_146.png');
			this._image_146__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_146__img.className='ggskin ggskin_image';
			this._image_146__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_146__img);
			this._image_146.appendChild(this._image_146__img);
			this._image_146.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_146.style[domTransition]='none';
				} else {
					me._image_146.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_146.ggParameter.sx=0.2;me._image_146.ggParameter.sy=0.2;
				me._image_146.style[domTransform]=parameterToTransform(me._image_146.ggParameter);
				flag=(me._text_246.style.visibility=='hidden');
				me._text_246.style[domTransition]='none';
				me._text_246.style.visibility=flag?'inherit':'hidden';
				me._text_246.ggVisible=flag;
			}
			this._image_146.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_146.style[domTransition]='none';
				} else {
					me._image_146.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_146.ggParameter.sx=0.1;me._image_146.ggParameter.sy=0.1;
				me._image_146.style[domTransform]=parameterToTransform(me._image_146.ggParameter);
				flag=(me._text_246.style.visibility=='hidden');
				me._text_246.style[domTransition]='none';
				me._text_246.style.visibility=flag?'inherit':'hidden';
				me._text_246.ggVisible=flag;
			}
			this.__div.appendChild(this._image_146);
			this._text_246=document.createElement('div');
			this._text_246__text=document.createElement('div');
			this._text_246.className='ggskin ggskin_textdiv';
			this._text_246.ggTextDiv=this._text_246__text;
			this._text_246.ggId="Text 2";
			this._text_246.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_246.ggVisible=false;
			this._text_246.className='ggskin ggskin_text';
			this._text_246.ggType='text';
			this._text_246.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_246.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_246__text.setAttribute('style',hs);
			this._text_246.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_246.appendChild(this._text_246__text);
			this.__div.appendChild(this._text_246);
		} else
		if (hotspot.skinid=='Gang_1_D_To_Gang_1_Treppe') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_1_D_To_Gang_1_Treppe";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_1_treppe.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_145=document.createElement('div');
			this._image_145.ggId="Image 1";
			this._image_145.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_145.ggVisible=true;
			this._image_145.className='ggskin ggskin_image';
			this._image_145.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_145.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_145.setAttribute('style',hs);
			this._image_145__img=document.createElement('img');
			this._image_145__img.className='ggskin ggskin_image';
			this._image_145__img.setAttribute('src',basePath + 'images/image_145.png');
			this._image_145__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_145__img.className='ggskin ggskin_image';
			this._image_145__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_145__img);
			this._image_145.appendChild(this._image_145__img);
			this._image_145.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_145.style[domTransition]='none';
				} else {
					me._image_145.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_145.ggParameter.sx=0.2;me._image_145.ggParameter.sy=0.2;
				me._image_145.style[domTransform]=parameterToTransform(me._image_145.ggParameter);
				flag=(me._text_245.style.visibility=='hidden');
				me._text_245.style[domTransition]='none';
				me._text_245.style.visibility=flag?'inherit':'hidden';
				me._text_245.ggVisible=flag;
			}
			this._image_145.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_145.style[domTransition]='none';
				} else {
					me._image_145.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_145.ggParameter.sx=0.1;me._image_145.ggParameter.sy=0.1;
				me._image_145.style[domTransform]=parameterToTransform(me._image_145.ggParameter);
				flag=(me._text_245.style.visibility=='hidden');
				me._text_245.style[domTransition]='none';
				me._text_245.style.visibility=flag?'inherit':'hidden';
				me._text_245.ggVisible=flag;
			}
			this.__div.appendChild(this._image_145);
			this._text_245=document.createElement('div');
			this._text_245__text=document.createElement('div');
			this._text_245.className='ggskin ggskin_textdiv';
			this._text_245.ggTextDiv=this._text_245__text;
			this._text_245.ggId="Text 2";
			this._text_245.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_245.ggVisible=false;
			this._text_245.className='ggskin ggskin_text';
			this._text_245.ggType='text';
			this._text_245.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_245.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_245__text.setAttribute('style',hs);
			this._text_245.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_245.appendChild(this._text_245__text);
			this.__div.appendChild(this._text_245);
		} else
		if (hotspot.skinid=='Gang_1_48_To_Gang_1_15') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_1_48_To_Gang_1_15";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_1_15.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_144=document.createElement('div');
			this._image_144.ggId="Image 1";
			this._image_144.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_144.ggVisible=true;
			this._image_144.className='ggskin ggskin_image';
			this._image_144.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_144.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_144.setAttribute('style',hs);
			this._image_144__img=document.createElement('img');
			this._image_144__img.className='ggskin ggskin_image';
			this._image_144__img.setAttribute('src',basePath + 'images/image_144.png');
			this._image_144__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_144__img.className='ggskin ggskin_image';
			this._image_144__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_144__img);
			this._image_144.appendChild(this._image_144__img);
			this._image_144.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_144.style[domTransition]='none';
				} else {
					me._image_144.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_144.ggParameter.sx=0.2;me._image_144.ggParameter.sy=0.2;
				me._image_144.style[domTransform]=parameterToTransform(me._image_144.ggParameter);
				flag=(me._text_244.style.visibility=='hidden');
				me._text_244.style[domTransition]='none';
				me._text_244.style.visibility=flag?'inherit':'hidden';
				me._text_244.ggVisible=flag;
			}
			this._image_144.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_144.style[domTransition]='none';
				} else {
					me._image_144.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_144.ggParameter.sx=0.1;me._image_144.ggParameter.sy=0.1;
				me._image_144.style[domTransform]=parameterToTransform(me._image_144.ggParameter);
				flag=(me._text_244.style.visibility=='hidden');
				me._text_244.style[domTransition]='none';
				me._text_244.style.visibility=flag?'inherit':'hidden';
				me._text_244.ggVisible=flag;
			}
			this.__div.appendChild(this._image_144);
			this._text_244=document.createElement('div');
			this._text_244__text=document.createElement('div');
			this._text_244.className='ggskin ggskin_textdiv';
			this._text_244.ggTextDiv=this._text_244__text;
			this._text_244.ggId="Text 2";
			this._text_244.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_244.ggVisible=false;
			this._text_244.className='ggskin ggskin_text';
			this._text_244.ggType='text';
			this._text_244.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_244.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_244__text.setAttribute('style',hs);
			this._text_244.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_244.appendChild(this._text_244__text);
			this.__div.appendChild(this._text_244);
		} else
		if (hotspot.skinid=='Gang_1_15_To_Gang_1_48') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_1_15_To_Gang_1_48";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -429px;';
			hs+='top:  -60px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_1_48.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_143=document.createElement('div');
			this._image_143.ggId="Image 1";
			this._image_143.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_143.ggVisible=true;
			this._image_143.className='ggskin ggskin_image';
			this._image_143.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_143.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_143.setAttribute('style',hs);
			this._image_143__img=document.createElement('img');
			this._image_143__img.className='ggskin ggskin_image';
			this._image_143__img.setAttribute('src',basePath + 'images/image_143.png');
			this._image_143__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_143__img.className='ggskin ggskin_image';
			this._image_143__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_143__img);
			this._image_143.appendChild(this._image_143__img);
			this._image_143.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_143.style[domTransition]='none';
				} else {
					me._image_143.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_143.ggParameter.sx=0.2;me._image_143.ggParameter.sy=0.2;
				me._image_143.style[domTransform]=parameterToTransform(me._image_143.ggParameter);
				flag=(me._text_243.style.visibility=='hidden');
				me._text_243.style[domTransition]='none';
				me._text_243.style.visibility=flag?'inherit':'hidden';
				me._text_243.ggVisible=flag;
			}
			this._image_143.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_143.style[domTransition]='none';
				} else {
					me._image_143.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_143.ggParameter.sx=0.1;me._image_143.ggParameter.sy=0.1;
				me._image_143.style[domTransform]=parameterToTransform(me._image_143.ggParameter);
				flag=(me._text_243.style.visibility=='hidden');
				me._text_243.style[domTransition]='none';
				me._text_243.style.visibility=flag?'inherit':'hidden';
				me._text_243.ggVisible=flag;
			}
			this.__div.appendChild(this._image_143);
			this._text_243=document.createElement('div');
			this._text_243__text=document.createElement('div');
			this._text_243.className='ggskin ggskin_textdiv';
			this._text_243.ggTextDiv=this._text_243__text;
			this._text_243.ggId="Text 2";
			this._text_243.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_243.ggVisible=false;
			this._text_243.className='ggskin ggskin_text';
			this._text_243.ggType='text';
			this._text_243.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_243.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_243__text.setAttribute('style',hs);
			this._text_243.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_243.appendChild(this._text_243__text);
			this.__div.appendChild(this._text_243);
		} else
		if (hotspot.skinid=='Room_In_OGS') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_OGS";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._ogs.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_142=document.createElement('div');
			this._image_142.ggId="Image 1";
			this._image_142.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_142.ggVisible=true;
			this._image_142.className='ggskin ggskin_image';
			this._image_142.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_142.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_142.setAttribute('style',hs);
			this._image_142__img=document.createElement('img');
			this._image_142__img.className='ggskin ggskin_image';
			this._image_142__img.setAttribute('src',basePath + 'images/image_142.png');
			this._image_142__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_142__img.className='ggskin ggskin_image';
			this._image_142__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_142__img);
			this._image_142.appendChild(this._image_142__img);
			this._image_142.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_142.style[domTransition]='none';
				} else {
					me._image_142.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_142.ggParameter.sx=0.2;me._image_142.ggParameter.sy=0.2;
				me._image_142.style[domTransform]=parameterToTransform(me._image_142.ggParameter);
				flag=(me._text_242.style.visibility=='hidden');
				me._text_242.style[domTransition]='none';
				me._text_242.style.visibility=flag?'inherit':'hidden';
				me._text_242.ggVisible=flag;
			}
			this._image_142.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_142.style[domTransition]='none';
				} else {
					me._image_142.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_142.ggParameter.sx=0.1;me._image_142.ggParameter.sy=0.1;
				me._image_142.style[domTransform]=parameterToTransform(me._image_142.ggParameter);
				flag=(me._text_242.style.visibility=='hidden');
				me._text_242.style[domTransition]='none';
				me._text_242.style.visibility=flag?'inherit':'hidden';
				me._text_242.ggVisible=flag;
			}
			this.__div.appendChild(this._image_142);
			this._text_242=document.createElement('div');
			this._text_242__text=document.createElement('div');
			this._text_242.className='ggskin ggskin_textdiv';
			this._text_242.ggTextDiv=this._text_242__text;
			this._text_242.ggId="Text 2";
			this._text_242.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_242.ggVisible=false;
			this._text_242.className='ggskin ggskin_text';
			this._text_242.ggType='text';
			this._text_242.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_242.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_242__text.setAttribute('style',hs);
			this._text_242.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_242.appendChild(this._text_242__text);
			this.__div.appendChild(this._text_242);
		} else
		if (hotspot.skinid=='Room_Out_OGS') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_OGS";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._aula.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_141=document.createElement('div');
			this._image_141.ggId="Image 1";
			this._image_141.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_141.ggVisible=true;
			this._image_141.className='ggskin ggskin_image';
			this._image_141.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_141.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_141.setAttribute('style',hs);
			this._image_141__img=document.createElement('img');
			this._image_141__img.className='ggskin ggskin_image';
			this._image_141__img.setAttribute('src',basePath + 'images/image_141.png');
			this._image_141__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_141__img.className='ggskin ggskin_image';
			this._image_141__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_141__img);
			this._image_141.appendChild(this._image_141__img);
			this._image_141.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_141.style[domTransition]='none';
				} else {
					me._image_141.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_141.ggParameter.sx=0.2;me._image_141.ggParameter.sy=0.2;
				me._image_141.style[domTransform]=parameterToTransform(me._image_141.ggParameter);
				flag=(me._text_241.style.visibility=='hidden');
				me._text_241.style[domTransition]='none';
				me._text_241.style.visibility=flag?'inherit':'hidden';
				me._text_241.ggVisible=flag;
			}
			this._image_141.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_141.style[domTransition]='none';
				} else {
					me._image_141.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_141.ggParameter.sx=0.1;me._image_141.ggParameter.sy=0.1;
				me._image_141.style[domTransform]=parameterToTransform(me._image_141.ggParameter);
				flag=(me._text_241.style.visibility=='hidden');
				me._text_241.style[domTransition]='none';
				me._text_241.style.visibility=flag?'inherit':'hidden';
				me._text_241.ggVisible=flag;
			}
			this.__div.appendChild(this._image_141);
			this._text_241=document.createElement('div');
			this._text_241__text=document.createElement('div');
			this._text_241.className='ggskin ggskin_textdiv';
			this._text_241.ggTextDiv=this._text_241__text;
			this._text_241.ggId="Text 2";
			this._text_241.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_241.ggVisible=false;
			this._text_241.className='ggskin ggskin_text';
			this._text_241.ggType='text';
			this._text_241.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_241.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_241__text.setAttribute('style',hs);
			this._text_241.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_241.appendChild(this._text_241__text);
			this.__div.appendChild(this._text_241);
		} else
		if (hotspot.skinid=='Room_Out_Turnhalle') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_Turnhalle";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._aula.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_140=document.createElement('div');
			this._image_140.ggId="Image 1";
			this._image_140.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_140.ggVisible=true;
			this._image_140.className='ggskin ggskin_image';
			this._image_140.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_140.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_140.setAttribute('style',hs);
			this._image_140__img=document.createElement('img');
			this._image_140__img.className='ggskin ggskin_image';
			this._image_140__img.setAttribute('src',basePath + 'images/image_140.png');
			this._image_140__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_140__img.className='ggskin ggskin_image';
			this._image_140__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_140__img);
			this._image_140.appendChild(this._image_140__img);
			this._image_140.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_140.style[domTransition]='none';
				} else {
					me._image_140.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_140.ggParameter.sx=0.2;me._image_140.ggParameter.sy=0.2;
				me._image_140.style[domTransform]=parameterToTransform(me._image_140.ggParameter);
				flag=(me._text_240.style.visibility=='hidden');
				me._text_240.style[domTransition]='none';
				me._text_240.style.visibility=flag?'inherit':'hidden';
				me._text_240.ggVisible=flag;
			}
			this._image_140.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_140.style[domTransition]='none';
				} else {
					me._image_140.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_140.ggParameter.sx=0.1;me._image_140.ggParameter.sy=0.1;
				me._image_140.style[domTransform]=parameterToTransform(me._image_140.ggParameter);
				flag=(me._text_240.style.visibility=='hidden');
				me._text_240.style[domTransition]='none';
				me._text_240.style.visibility=flag?'inherit':'hidden';
				me._text_240.ggVisible=flag;
			}
			this.__div.appendChild(this._image_140);
			this._text_240=document.createElement('div');
			this._text_240__text=document.createElement('div');
			this._text_240.className='ggskin ggskin_textdiv';
			this._text_240.ggTextDiv=this._text_240__text;
			this._text_240.ggId="Text 2";
			this._text_240.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_240.ggVisible=false;
			this._text_240.className='ggskin ggskin_text';
			this._text_240.ggType='text';
			this._text_240.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_240.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_240__text.setAttribute('style',hs);
			this._text_240.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_240.appendChild(this._text_240__text);
			this.__div.appendChild(this._text_240);
		} else
		if (hotspot.skinid=='Gang_Aula_To_Gang_0_24') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_Aula_To_Gang_0_24";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_0_24.onclick();
				me.player.openNext("Gang 0_24_out.xml","264");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_139=document.createElement('div');
			this._image_139.ggId="Image 1";
			this._image_139.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_139.ggVisible=true;
			this._image_139.className='ggskin ggskin_image';
			this._image_139.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_139.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_139.setAttribute('style',hs);
			this._image_139__img=document.createElement('img');
			this._image_139__img.className='ggskin ggskin_image';
			this._image_139__img.setAttribute('src',basePath + 'images/image_139.png');
			this._image_139__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_139__img.className='ggskin ggskin_image';
			this._image_139__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_139__img);
			this._image_139.appendChild(this._image_139__img);
			this._image_139.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_139.style[domTransition]='none';
				} else {
					me._image_139.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_139.ggParameter.sx=0.2;me._image_139.ggParameter.sy=0.2;
				me._image_139.style[domTransform]=parameterToTransform(me._image_139.ggParameter);
				flag=(me._text_239.style.visibility=='hidden');
				me._text_239.style[domTransition]='none';
				me._text_239.style.visibility=flag?'inherit':'hidden';
				me._text_239.ggVisible=flag;
			}
			this._image_139.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_139.style[domTransition]='none';
				} else {
					me._image_139.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_139.ggParameter.sx=0.1;me._image_139.ggParameter.sy=0.1;
				me._image_139.style[domTransform]=parameterToTransform(me._image_139.ggParameter);
				flag=(me._text_239.style.visibility=='hidden');
				me._text_239.style[domTransition]='none';
				me._text_239.style.visibility=flag?'inherit':'hidden';
				me._text_239.ggVisible=flag;
			}
			this.__div.appendChild(this._image_139);
			this._text_239=document.createElement('div');
			this._text_239__text=document.createElement('div');
			this._text_239.className='ggskin ggskin_textdiv';
			this._text_239.ggTextDiv=this._text_239__text;
			this._text_239.ggId="Text 2";
			this._text_239.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_239.ggVisible=false;
			this._text_239.className='ggskin ggskin_text';
			this._text_239.ggType='text';
			this._text_239.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_239.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_239__text.setAttribute('style',hs);
			this._text_239.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_239.appendChild(this._text_239__text);
			this.__div.appendChild(this._text_239);
		} else
		if (hotspot.skinid=='Gang_0_24_To_Gang_Aula') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_0_24_To_Gang_Aula";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._aula.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_138=document.createElement('div');
			this._image_138.ggId="Image 1";
			this._image_138.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_138.ggVisible=true;
			this._image_138.className='ggskin ggskin_image';
			this._image_138.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_138.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_138.setAttribute('style',hs);
			this._image_138__img=document.createElement('img');
			this._image_138__img.className='ggskin ggskin_image';
			this._image_138__img.setAttribute('src',basePath + 'images/image_138.png');
			this._image_138__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_138__img.className='ggskin ggskin_image';
			this._image_138__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_138__img);
			this._image_138.appendChild(this._image_138__img);
			this._image_138.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_138.style[domTransition]='none';
				} else {
					me._image_138.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_138.ggParameter.sx=0.2;me._image_138.ggParameter.sy=0.2;
				me._image_138.style[domTransform]=parameterToTransform(me._image_138.ggParameter);
				flag=(me._text_238.style.visibility=='hidden');
				me._text_238.style[domTransition]='none';
				me._text_238.style.visibility=flag?'inherit':'hidden';
				me._text_238.ggVisible=flag;
			}
			this._image_138.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_138.style[domTransition]='none';
				} else {
					me._image_138.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_138.ggParameter.sx=0.1;me._image_138.ggParameter.sy=0.1;
				me._image_138.style[domTransform]=parameterToTransform(me._image_138.ggParameter);
				flag=(me._text_238.style.visibility=='hidden');
				me._text_238.style[domTransition]='none';
				me._text_238.style.visibility=flag?'inherit':'hidden';
				me._text_238.ggVisible=flag;
			}
			this.__div.appendChild(this._image_138);
			this._text_238=document.createElement('div');
			this._text_238__text=document.createElement('div');
			this._text_238.className='ggskin ggskin_textdiv';
			this._text_238.ggTextDiv=this._text_238__text;
			this._text_238.ggId="Text 2";
			this._text_238.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_238.ggVisible=false;
			this._text_238.className='ggskin ggskin_text';
			this._text_238.ggType='text';
			this._text_238.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_238.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_238__text.setAttribute('style',hs);
			this._text_238.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_238.appendChild(this._text_238__text);
			this.__div.appendChild(this._text_238);
		} else
		if (hotspot.skinid=='Room_Out_0_24') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_0_24";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_0_24.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_137=document.createElement('div');
			this._image_137.ggId="Image 1";
			this._image_137.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_137.ggVisible=true;
			this._image_137.className='ggskin ggskin_image';
			this._image_137.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_137.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_137.setAttribute('style',hs);
			this._image_137__img=document.createElement('img');
			this._image_137__img.className='ggskin ggskin_image';
			this._image_137__img.setAttribute('src',basePath + 'images/image_137.png');
			this._image_137__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_137__img.className='ggskin ggskin_image';
			this._image_137__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_137__img);
			this._image_137.appendChild(this._image_137__img);
			this._image_137.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_137.style[domTransition]='none';
				} else {
					me._image_137.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_137.ggParameter.sx=0.2;me._image_137.ggParameter.sy=0.2;
				me._image_137.style[domTransform]=parameterToTransform(me._image_137.ggParameter);
				flag=(me._text_237.style.visibility=='hidden');
				me._text_237.style[domTransition]='none';
				me._text_237.style.visibility=flag?'inherit':'hidden';
				me._text_237.ggVisible=flag;
			}
			this._image_137.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_137.style[domTransition]='none';
				} else {
					me._image_137.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_137.ggParameter.sx=0.1;me._image_137.ggParameter.sy=0.1;
				me._image_137.style[domTransform]=parameterToTransform(me._image_137.ggParameter);
				flag=(me._text_237.style.visibility=='hidden');
				me._text_237.style[domTransition]='none';
				me._text_237.style.visibility=flag?'inherit':'hidden';
				me._text_237.ggVisible=flag;
			}
			this.__div.appendChild(this._image_137);
			this._text_237=document.createElement('div');
			this._text_237__text=document.createElement('div');
			this._text_237.className='ggskin ggskin_textdiv';
			this._text_237.ggTextDiv=this._text_237__text;
			this._text_237.ggId="Text 2";
			this._text_237.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_237.ggVisible=false;
			this._text_237.className='ggskin ggskin_text';
			this._text_237.ggType='text';
			this._text_237.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_237.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_237__text.setAttribute('style',hs);
			this._text_237.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_237.appendChild(this._text_237__text);
			this.__div.appendChild(this._text_237);
		} else
		if (hotspot.skinid=='Room_In_0_24') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_0_24";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_0_24.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_136=document.createElement('div');
			this._image_136.ggId="Image 1";
			this._image_136.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_136.ggVisible=true;
			this._image_136.className='ggskin ggskin_image';
			this._image_136.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_136.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_136.setAttribute('style',hs);
			this._image_136__img=document.createElement('img');
			this._image_136__img.className='ggskin ggskin_image';
			this._image_136__img.setAttribute('src',basePath + 'images/image_136.png');
			this._image_136__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_136__img.className='ggskin ggskin_image';
			this._image_136__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_136__img);
			this._image_136.appendChild(this._image_136__img);
			this._image_136.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_136.style[domTransition]='none';
				} else {
					me._image_136.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_136.ggParameter.sx=0.2;me._image_136.ggParameter.sy=0.2;
				me._image_136.style[domTransform]=parameterToTransform(me._image_136.ggParameter);
				flag=(me._text_236.style.visibility=='hidden');
				me._text_236.style[domTransition]='none';
				me._text_236.style.visibility=flag?'inherit':'hidden';
				me._text_236.ggVisible=flag;
			}
			this._image_136.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_136.style[domTransition]='none';
				} else {
					me._image_136.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_136.ggParameter.sx=0.1;me._image_136.ggParameter.sy=0.1;
				me._image_136.style[domTransform]=parameterToTransform(me._image_136.ggParameter);
				flag=(me._text_236.style.visibility=='hidden');
				me._text_236.style[domTransition]='none';
				me._text_236.style.visibility=flag?'inherit':'hidden';
				me._text_236.ggVisible=flag;
			}
			this.__div.appendChild(this._image_136);
			this._text_236=document.createElement('div');
			this._text_236__text=document.createElement('div');
			this._text_236.className='ggskin ggskin_textdiv';
			this._text_236.ggTextDiv=this._text_236__text;
			this._text_236.ggId="Text 2";
			this._text_236.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_236.ggVisible=false;
			this._text_236.className='ggskin ggskin_text';
			this._text_236.ggType='text';
			this._text_236.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_236.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_236__text.setAttribute('style',hs);
			this._text_236.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_236.appendChild(this._text_236__text);
			this.__div.appendChild(this._text_236);
		} else
		if (hotspot.skinid=='Gang_Aula_To_Gang_Turnhalle') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_Aula_To_Gang_Turnhalle";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._turnhalle.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_135=document.createElement('div');
			this._image_135.ggId="Image 1";
			this._image_135.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_135.ggVisible=true;
			this._image_135.className='ggskin ggskin_image';
			this._image_135.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_135.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_135.setAttribute('style',hs);
			this._image_135__img=document.createElement('img');
			this._image_135__img.className='ggskin ggskin_image';
			this._image_135__img.setAttribute('src',basePath + 'images/image_135.png');
			this._image_135__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_135__img.className='ggskin ggskin_image';
			this._image_135__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_135__img);
			this._image_135.appendChild(this._image_135__img);
			this._image_135.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_135.style[domTransition]='none';
				} else {
					me._image_135.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_135.ggParameter.sx=0.2;me._image_135.ggParameter.sy=0.2;
				me._image_135.style[domTransform]=parameterToTransform(me._image_135.ggParameter);
				flag=(me._text_235.style.visibility=='hidden');
				me._text_235.style[domTransition]='none';
				me._text_235.style.visibility=flag?'inherit':'hidden';
				me._text_235.ggVisible=flag;
			}
			this._image_135.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_135.style[domTransition]='none';
				} else {
					me._image_135.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_135.ggParameter.sx=0.1;me._image_135.ggParameter.sy=0.1;
				me._image_135.style[domTransform]=parameterToTransform(me._image_135.ggParameter);
				flag=(me._text_235.style.visibility=='hidden');
				me._text_235.style[domTransition]='none';
				me._text_235.style.visibility=flag?'inherit':'hidden';
				me._text_235.ggVisible=flag;
			}
			this.__div.appendChild(this._image_135);
			this._text_235=document.createElement('div');
			this._text_235__text=document.createElement('div');
			this._text_235.className='ggskin ggskin_textdiv';
			this._text_235.ggTextDiv=this._text_235__text;
			this._text_235.ggId="Text 2";
			this._text_235.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_235.ggVisible=false;
			this._text_235.className='ggskin ggskin_text';
			this._text_235.ggType='text';
			this._text_235.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_235.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_235__text.setAttribute('style',hs);
			this._text_235.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_235.appendChild(this._text_235__text);
			this.__div.appendChild(this._text_235);
		} else
		if (hotspot.skinid=='Mensa_To_Aula') {
			this.__div=document.createElement('div');
			this.__div.ggId="Mensa_To_Aula";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._aula.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_134=document.createElement('div');
			this._image_134.ggId="Image 1";
			this._image_134.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_134.ggVisible=true;
			this._image_134.className='ggskin ggskin_image';
			this._image_134.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_134.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_134.setAttribute('style',hs);
			this._image_134__img=document.createElement('img');
			this._image_134__img.className='ggskin ggskin_image';
			this._image_134__img.setAttribute('src',basePath + 'images/image_134.png');
			this._image_134__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_134__img.className='ggskin ggskin_image';
			this._image_134__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_134__img);
			this._image_134.appendChild(this._image_134__img);
			this._image_134.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_134.style[domTransition]='none';
				} else {
					me._image_134.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_134.ggParameter.sx=0.2;me._image_134.ggParameter.sy=0.2;
				me._image_134.style[domTransform]=parameterToTransform(me._image_134.ggParameter);
				flag=(me._text_234.style.visibility=='hidden');
				me._text_234.style[domTransition]='none';
				me._text_234.style.visibility=flag?'inherit':'hidden';
				me._text_234.ggVisible=flag;
			}
			this._image_134.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_134.style[domTransition]='none';
				} else {
					me._image_134.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_134.ggParameter.sx=0.1;me._image_134.ggParameter.sy=0.1;
				me._image_134.style[domTransform]=parameterToTransform(me._image_134.ggParameter);
				flag=(me._text_234.style.visibility=='hidden');
				me._text_234.style[domTransition]='none';
				me._text_234.style.visibility=flag?'inherit':'hidden';
				me._text_234.ggVisible=flag;
			}
			this.__div.appendChild(this._image_134);
			this._text_234=document.createElement('div');
			this._text_234__text=document.createElement('div');
			this._text_234.className='ggskin ggskin_textdiv';
			this._text_234.ggTextDiv=this._text_234__text;
			this._text_234.ggId="Text 2";
			this._text_234.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_234.ggVisible=false;
			this._text_234.className='ggskin ggskin_text';
			this._text_234.ggType='text';
			this._text_234.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_234.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_234__text.setAttribute('style',hs);
			this._text_234.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_234.appendChild(this._text_234__text);
			this.__div.appendChild(this._text_234);
		} else
		if (hotspot.skinid=='Aula_To_Mensa') {
			this.__div=document.createElement('div');
			this.__div.ggId="Aula_To_Mensa";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._mensa.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_133=document.createElement('div');
			this._image_133.ggId="Image 1";
			this._image_133.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_133.ggVisible=true;
			this._image_133.className='ggskin ggskin_image';
			this._image_133.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_133.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_133.setAttribute('style',hs);
			this._image_133__img=document.createElement('img');
			this._image_133__img.className='ggskin ggskin_image';
			this._image_133__img.setAttribute('src',basePath + 'images/image_133.png');
			this._image_133__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_133__img.className='ggskin ggskin_image';
			this._image_133__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_133__img);
			this._image_133.appendChild(this._image_133__img);
			this._image_133.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_133.style[domTransition]='none';
				} else {
					me._image_133.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_133.ggParameter.sx=0.2;me._image_133.ggParameter.sy=0.2;
				me._image_133.style[domTransform]=parameterToTransform(me._image_133.ggParameter);
				flag=(me._text_233.style.visibility=='hidden');
				me._text_233.style[domTransition]='none';
				me._text_233.style.visibility=flag?'inherit':'hidden';
				me._text_233.ggVisible=flag;
			}
			this._image_133.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_133.style[domTransition]='none';
				} else {
					me._image_133.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_133.ggParameter.sx=0.1;me._image_133.ggParameter.sy=0.1;
				me._image_133.style[domTransform]=parameterToTransform(me._image_133.ggParameter);
				flag=(me._text_233.style.visibility=='hidden');
				me._text_233.style[domTransition]='none';
				me._text_233.style.visibility=flag?'inherit':'hidden';
				me._text_233.ggVisible=flag;
			}
			this.__div.appendChild(this._image_133);
			this._text_233=document.createElement('div');
			this._text_233__text=document.createElement('div');
			this._text_233.className='ggskin ggskin_textdiv';
			this._text_233.ggTextDiv=this._text_233__text;
			this._text_233.ggId="Text 2";
			this._text_233.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_233.ggVisible=false;
			this._text_233.className='ggskin ggskin_text';
			this._text_233.ggType='text';
			this._text_233.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_233.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_233__text.setAttribute('style',hs);
			this._text_233.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_233.appendChild(this._text_233__text);
			this.__div.appendChild(this._text_233);
		} else
		if (hotspot.skinid=='Room_Out_SMV') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_SMV";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._aula.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_131=document.createElement('div');
			this._image_131.ggId="Image 1";
			this._image_131.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_131.ggVisible=true;
			this._image_131.className='ggskin ggskin_image';
			this._image_131.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_131.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_131.setAttribute('style',hs);
			this._image_131__img=document.createElement('img');
			this._image_131__img.className='ggskin ggskin_image';
			this._image_131__img.setAttribute('src',basePath + 'images/image_131.png');
			this._image_131__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_131__img.className='ggskin ggskin_image';
			this._image_131__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_131__img);
			this._image_131.appendChild(this._image_131__img);
			this._image_131.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_131.style[domTransition]='none';
				} else {
					me._image_131.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_131.ggParameter.sx=0.2;me._image_131.ggParameter.sy=0.2;
				me._image_131.style[domTransform]=parameterToTransform(me._image_131.ggParameter);
				flag=(me._text_231.style.visibility=='hidden');
				me._text_231.style[domTransition]='none';
				me._text_231.style.visibility=flag?'inherit':'hidden';
				me._text_231.ggVisible=flag;
			}
			this._image_131.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_131.style[domTransition]='none';
				} else {
					me._image_131.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_131.ggParameter.sx=0.1;me._image_131.ggParameter.sy=0.1;
				me._image_131.style[domTransform]=parameterToTransform(me._image_131.ggParameter);
				flag=(me._text_231.style.visibility=='hidden');
				me._text_231.style[domTransition]='none';
				me._text_231.style.visibility=flag?'inherit':'hidden';
				me._text_231.ggVisible=flag;
			}
			this.__div.appendChild(this._image_131);
			this._text_231=document.createElement('div');
			this._text_231__text=document.createElement('div');
			this._text_231.className='ggskin ggskin_textdiv';
			this._text_231.ggTextDiv=this._text_231__text;
			this._text_231.ggId="Text 2";
			this._text_231.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_231.ggVisible=false;
			this._text_231.className='ggskin ggskin_text';
			this._text_231.ggType='text';
			this._text_231.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_231.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_231__text.setAttribute('style',hs);
			this._text_231.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_231.appendChild(this._text_231__text);
			this.__div.appendChild(this._text_231);
		} else
		if (hotspot.skinid=='Room_In_SMV') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_SMV";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._smv.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_130=document.createElement('div');
			this._image_130.ggId="Image 1";
			this._image_130.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_130.ggVisible=true;
			this._image_130.className='ggskin ggskin_image';
			this._image_130.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_130.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_130.setAttribute('style',hs);
			this._image_130__img=document.createElement('img');
			this._image_130__img.className='ggskin ggskin_image';
			this._image_130__img.setAttribute('src',basePath + 'images/image_130.png');
			this._image_130__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_130__img.className='ggskin ggskin_image';
			this._image_130__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_130__img);
			this._image_130.appendChild(this._image_130__img);
			this._image_130.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_130.style[domTransition]='none';
				} else {
					me._image_130.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_130.ggParameter.sx=0.2;me._image_130.ggParameter.sy=0.2;
				me._image_130.style[domTransform]=parameterToTransform(me._image_130.ggParameter);
				flag=(me._text_230.style.visibility=='hidden');
				me._text_230.style[domTransition]='none';
				me._text_230.style.visibility=flag?'inherit':'hidden';
				me._text_230.ggVisible=flag;
			}
			this._image_130.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_130.style[domTransition]='none';
				} else {
					me._image_130.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_130.ggParameter.sx=0.1;me._image_130.ggParameter.sy=0.1;
				me._image_130.style[domTransform]=parameterToTransform(me._image_130.ggParameter);
				flag=(me._text_230.style.visibility=='hidden');
				me._text_230.style[domTransition]='none';
				me._text_230.style.visibility=flag?'inherit':'hidden';
				me._text_230.ggVisible=flag;
			}
			this.__div.appendChild(this._image_130);
			this._text_230=document.createElement('div');
			this._text_230__text=document.createElement('div');
			this._text_230.className='ggskin ggskin_textdiv';
			this._text_230.ggTextDiv=this._text_230__text;
			this._text_230.ggId="Text 2";
			this._text_230.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_230.ggVisible=false;
			this._text_230.className='ggskin ggskin_text';
			this._text_230.ggType='text';
			this._text_230.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_230.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_230__text.setAttribute('style',hs);
			this._text_230.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_230.appendChild(this._text_230__text);
			this.__div.appendChild(this._text_230);
		} else
		if (hotspot.skinid=='Aula_To_D_Haupteingang') {
			this.__div=document.createElement('div');
			this.__div.ggId="Aula_To_D_Haupteingang";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._button_draussen.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_129=document.createElement('div');
			this._image_129.ggId="Image 1";
			this._image_129.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_129.ggVisible=true;
			this._image_129.className='ggskin ggskin_image';
			this._image_129.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_129.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_129.setAttribute('style',hs);
			this._image_129__img=document.createElement('img');
			this._image_129__img.className='ggskin ggskin_image';
			this._image_129__img.setAttribute('src',basePath + 'images/image_129.png');
			this._image_129__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_129__img.className='ggskin ggskin_image';
			this._image_129__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_129__img);
			this._image_129.appendChild(this._image_129__img);
			this._image_129.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_129.style[domTransition]='none';
				} else {
					me._image_129.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_129.ggParameter.sx=0.2;me._image_129.ggParameter.sy=0.2;
				me._image_129.style[domTransform]=parameterToTransform(me._image_129.ggParameter);
				flag=(me._text_229.style.visibility=='hidden');
				me._text_229.style[domTransition]='none';
				me._text_229.style.visibility=flag?'inherit':'hidden';
				me._text_229.ggVisible=flag;
			}
			this._image_129.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_129.style[domTransition]='none';
				} else {
					me._image_129.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_129.ggParameter.sx=0.1;me._image_129.ggParameter.sy=0.1;
				me._image_129.style[domTransform]=parameterToTransform(me._image_129.ggParameter);
				flag=(me._text_229.style.visibility=='hidden');
				me._text_229.style[domTransition]='none';
				me._text_229.style.visibility=flag?'inherit':'hidden';
				me._text_229.ggVisible=flag;
			}
			this.__div.appendChild(this._image_129);
			this._text_229=document.createElement('div');
			this._text_229__text=document.createElement('div');
			this._text_229.className='ggskin ggskin_textdiv';
			this._text_229.ggTextDiv=this._text_229__text;
			this._text_229.ggId="Text 2";
			this._text_229.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_229.ggVisible=false;
			this._text_229.className='ggskin ggskin_text';
			this._text_229.ggType='text';
			this._text_229.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_229.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_229__text.setAttribute('style',hs);
			this._text_229.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_229.appendChild(this._text_229__text);
			this.__div.appendChild(this._text_229);
		} else
		if (hotspot.skinid=='Room_Out_0_13') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_0_13";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._aula.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_128=document.createElement('div');
			this._image_128.ggId="Image 1";
			this._image_128.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_128.ggVisible=true;
			this._image_128.className='ggskin ggskin_image';
			this._image_128.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_128.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_128.setAttribute('style',hs);
			this._image_128__img=document.createElement('img');
			this._image_128__img.className='ggskin ggskin_image';
			this._image_128__img.setAttribute('src',basePath + 'images/image_128.png');
			this._image_128__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_128__img.className='ggskin ggskin_image';
			this._image_128__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_128__img);
			this._image_128.appendChild(this._image_128__img);
			this._image_128.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_128.style[domTransition]='none';
				} else {
					me._image_128.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_128.ggParameter.sx=0.2;me._image_128.ggParameter.sy=0.2;
				me._image_128.style[domTransform]=parameterToTransform(me._image_128.ggParameter);
				flag=(me._text_228.style.visibility=='hidden');
				me._text_228.style[domTransition]='none';
				me._text_228.style.visibility=flag?'inherit':'hidden';
				me._text_228.ggVisible=flag;
			}
			this._image_128.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_128.style[domTransition]='none';
				} else {
					me._image_128.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_128.ggParameter.sx=0.1;me._image_128.ggParameter.sy=0.1;
				me._image_128.style[domTransform]=parameterToTransform(me._image_128.ggParameter);
				flag=(me._text_228.style.visibility=='hidden');
				me._text_228.style[domTransition]='none';
				me._text_228.style.visibility=flag?'inherit':'hidden';
				me._text_228.ggVisible=flag;
			}
			this.__div.appendChild(this._image_128);
			this._text_228=document.createElement('div');
			this._text_228__text=document.createElement('div');
			this._text_228.className='ggskin ggskin_textdiv';
			this._text_228.ggTextDiv=this._text_228__text;
			this._text_228.ggId="Text 2";
			this._text_228.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_228.ggVisible=false;
			this._text_228.className='ggskin ggskin_text';
			this._text_228.ggType='text';
			this._text_228.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_228.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_228__text.setAttribute('style',hs);
			this._text_228.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_228.appendChild(this._text_228__text);
			this.__div.appendChild(this._text_228);
		} else
		if (hotspot.skinid=='Room_In_0_13') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_0_13";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_0_13.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_127=document.createElement('div');
			this._image_127.ggId="Image 1";
			this._image_127.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_127.ggVisible=true;
			this._image_127.className='ggskin ggskin_image';
			this._image_127.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_127.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_127.setAttribute('style',hs);
			this._image_127__img=document.createElement('img');
			this._image_127__img.className='ggskin ggskin_image';
			this._image_127__img.setAttribute('src',basePath + 'images/image_127.png');
			this._image_127__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_127__img.className='ggskin ggskin_image';
			this._image_127__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_127__img);
			this._image_127.appendChild(this._image_127__img);
			this._image_127.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_127.style[domTransition]='none';
				} else {
					me._image_127.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_127.ggParameter.sx=0.2;me._image_127.ggParameter.sy=0.2;
				me._image_127.style[domTransform]=parameterToTransform(me._image_127.ggParameter);
				flag=(me._text_227.style.visibility=='hidden');
				me._text_227.style[domTransition]='none';
				me._text_227.style.visibility=flag?'inherit':'hidden';
				me._text_227.ggVisible=flag;
			}
			this._image_127.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_127.style[domTransition]='none';
				} else {
					me._image_127.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_127.ggParameter.sx=0.1;me._image_127.ggParameter.sy=0.1;
				me._image_127.style[domTransform]=parameterToTransform(me._image_127.ggParameter);
				flag=(me._text_227.style.visibility=='hidden');
				me._text_227.style[domTransition]='none';
				me._text_227.style.visibility=flag?'inherit':'hidden';
				me._text_227.ggVisible=flag;
			}
			this.__div.appendChild(this._image_127);
			this._text_227=document.createElement('div');
			this._text_227__text=document.createElement('div');
			this._text_227.className='ggskin ggskin_textdiv';
			this._text_227.ggTextDiv=this._text_227__text;
			this._text_227.ggId="Text 2";
			this._text_227.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_227.ggVisible=false;
			this._text_227.className='ggskin ggskin_text';
			this._text_227.ggType='text';
			this._text_227.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_227.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_227__text.setAttribute('style',hs);
			this._text_227.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_227.appendChild(this._text_227__text);
			this.__div.appendChild(this._text_227);
		} else
		if (hotspot.skinid=='EggieScheinwerfer') {
			this.__div=document.createElement('div');
			this.__div.ggId="EggieScheinwerfer";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:0.6,sy:0.6 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			this.__div.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(278 + w/2) + 'px';
					h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(640 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: 278px;';
			hs+='top:  640px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__div.ggParameter) + ';';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_2=document.createElement('div');
			this._image_2.ggId="Image 2";
			this._image_2.ggParameter={ rx:0,ry:0,a:0,sx:0.04,sy:0.04 };
			this._image_2.ggVisible=true;
			this._image_2.className='ggskin ggskin_image';
			this._image_2.ggType='image';
			this._image_2.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				if (this.parentNode) {
					w=this.parentNode.offsetWidth;
					this.style.left=Math.floor(-87 + w/2) + 'px';
					h=this.parentNode.offsetHeight;
					this.style.top=Math.floor(-86 + h/2) + 'px';
				}
			}
			hs ='position:absolute;';
			hs+='left: -87px;';
			hs+='top:  -86px;';
			hs+='width: 173px;';
			hs+='height: 184px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_2.ggParameter) + ';';
			hs+='opacity: 0.95;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._image_2.setAttribute('style',hs);
			this._image_2__img=document.createElement('img');
			this._image_2__img.className='ggskin ggskin_image';
			this._image_2__img.setAttribute('src',basePath + 'images/image_2.png');
			this._image_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_2__img.className='ggskin ggskin_image';
			this._image_2__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_2__img);
			this._image_2.appendChild(this._image_2__img);
			this._image_2.onclick=function () {
				me.player.changeFovLog(-1,true);
			}
			this._image_2.onmouseover=function () {
				me._image_2.style[domTransition]='none';
				me._image_2.ggParameter.sx=0.0001;me._image_2.ggParameter.sy=0.0001;
				me._image_2.style[domTransform]=parameterToTransform(me._image_2.ggParameter);
			}
			this._image_2.onmouseout=function () {
				me._image_2.style[domTransition]='none';
				me._image_2.ggParameter.sx=0.04;me._image_2.ggParameter.sy=0.04;
				me._image_2.style[domTransform]=parameterToTransform(me._image_2.ggParameter);
			}
			this.__div.appendChild(this._image_2);
			this.ggUse3d=true;
			this.gg3dDistance=91;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				var hs='';
				if (me._image_2.ggParameter) {
					hs+=parameterToTransform(me._image_2.ggParameter) + ' ';
				}
				hs+='rotate(' + (-1.0*(0.6 * me.player.getPanN() + -6)) + 'deg) ';
				me._image_2.style[domTransform]=hs;
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='EggiePapierflieger') {
			this.__div=document.createElement('div');
			this.__div.ggId="EggiePapierflieger";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 215px;';
			hs+='top:  722px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_3=document.createElement('div');
			this._image_3.ggId="Image 3";
			this._image_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_3.ggVisible=true;
			this._image_3.className='ggskin ggskin_image';
			this._image_3.ggType='image';
			hs ='position:absolute;';
			hs+='left: -546px;';
			hs+='top:  -394px;';
			hs+='width: 1009px;';
			hs+='height: 923px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this._image_3.setAttribute('style',hs);
			this._image_3__img=document.createElement('img');
			this._image_3__img.className='ggskin ggskin_image';
			this._image_3__img.setAttribute('src',basePath + 'images/image_3.png');
			this._image_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_3__img.className='ggskin ggskin_image';
			this._image_3__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_3__img);
			this._image_3.appendChild(this._image_3__img);
			this.__div.appendChild(this._image_3);
			this._text_226=document.createElement('div');
			this._text_226__text=document.createElement('div');
			this._text_226.className='ggskin ggskin_textdiv';
			this._text_226.ggTextDiv=this._text_226__text;
			this._text_226.ggId="Text 2";
			this._text_226.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_226.ggVisible=false;
			this._text_226.className='ggskin ggskin_text';
			this._text_226.ggType='text';
			this._text_226.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: 91px;';
			hs+='top:  -122px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_226.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_226__text.setAttribute('style',hs);
			this._text_226.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_226.appendChild(this._text_226__text);
			this.__div.appendChild(this._text_226);
			this.ggUse3d=true;
			this.gg3dDistance=10000;
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				var hs='';
				if (me._image_3.ggParameter) {
					hs+=parameterToTransform(me._image_3.ggParameter) + ' ';
				}
				hs+='translate(' + (-50 * me.player.getTilt() + 0) + 'px,0px) ';
				me._image_3.style[domTransform]=hs;
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='Buehne_To_Aula') {
			this.__div=document.createElement('div');
			this.__div.ggId="Buehne_To_Aula";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._aula.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_126=document.createElement('div');
			this._image_126.ggId="Image 1";
			this._image_126.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_126.ggVisible=true;
			this._image_126.className='ggskin ggskin_image';
			this._image_126.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_126.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_126.setAttribute('style',hs);
			this._image_126__img=document.createElement('img');
			this._image_126__img.className='ggskin ggskin_image';
			this._image_126__img.setAttribute('src',basePath + 'images/image_126.png');
			this._image_126__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_126__img.className='ggskin ggskin_image';
			this._image_126__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_126__img);
			this._image_126.appendChild(this._image_126__img);
			this._image_126.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_126.style[domTransition]='none';
				} else {
					me._image_126.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_126.ggParameter.sx=0.2;me._image_126.ggParameter.sy=0.2;
				me._image_126.style[domTransform]=parameterToTransform(me._image_126.ggParameter);
				flag=(me._text_225.style.visibility=='hidden');
				me._text_225.style[domTransition]='none';
				me._text_225.style.visibility=flag?'inherit':'hidden';
				me._text_225.ggVisible=flag;
			}
			this._image_126.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_126.style[domTransition]='none';
				} else {
					me._image_126.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_126.ggParameter.sx=0.1;me._image_126.ggParameter.sy=0.1;
				me._image_126.style[domTransform]=parameterToTransform(me._image_126.ggParameter);
				flag=(me._text_225.style.visibility=='hidden');
				me._text_225.style[domTransition]='none';
				me._text_225.style.visibility=flag?'inherit':'hidden';
				me._text_225.ggVisible=flag;
			}
			this.__div.appendChild(this._image_126);
			this._text_225=document.createElement('div');
			this._text_225__text=document.createElement('div');
			this._text_225.className='ggskin ggskin_textdiv';
			this._text_225.ggTextDiv=this._text_225__text;
			this._text_225.ggId="Text 2";
			this._text_225.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_225.ggVisible=false;
			this._text_225.className='ggskin ggskin_text';
			this._text_225.ggType='text';
			this._text_225.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_225.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_225__text.setAttribute('style',hs);
			this._text_225.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_225.appendChild(this._text_225__text);
			this.__div.appendChild(this._text_225);
		} else
		if (hotspot.skinid=='Aula_To_Buehne') {
			this.__div=document.createElement('div');
			this.__div.ggId="Aula_To_Buehne";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: 268px;';
			hs+='top:  -17px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._buehne.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_125=document.createElement('div');
			this._image_125.ggId="Image 1";
			this._image_125.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_125.ggVisible=true;
			this._image_125.className='ggskin ggskin_image';
			this._image_125.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_125.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_125.setAttribute('style',hs);
			this._image_125__img=document.createElement('img');
			this._image_125__img.className='ggskin ggskin_image';
			this._image_125__img.setAttribute('src',basePath + 'images/image_125.png');
			this._image_125__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_125__img.className='ggskin ggskin_image';
			this._image_125__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_125__img);
			this._image_125.appendChild(this._image_125__img);
			this._image_125.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_125.style[domTransition]='none';
				} else {
					me._image_125.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_125.ggParameter.sx=0.2;me._image_125.ggParameter.sy=0.2;
				me._image_125.style[domTransform]=parameterToTransform(me._image_125.ggParameter);
				flag=(me._text_224.style.visibility=='hidden');
				me._text_224.style[domTransition]='none';
				me._text_224.style.visibility=flag?'inherit':'hidden';
				me._text_224.ggVisible=flag;
			}
			this._image_125.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_125.style[domTransition]='none';
				} else {
					me._image_125.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_125.ggParameter.sx=0.1;me._image_125.ggParameter.sy=0.1;
				me._image_125.style[domTransform]=parameterToTransform(me._image_125.ggParameter);
				flag=(me._text_224.style.visibility=='hidden');
				me._text_224.style[domTransition]='none';
				me._text_224.style.visibility=flag?'inherit':'hidden';
				me._text_224.ggVisible=flag;
			}
			this.__div.appendChild(this._image_125);
			this._text_224=document.createElement('div');
			this._text_224__text=document.createElement('div');
			this._text_224.className='ggskin ggskin_textdiv';
			this._text_224.ggTextDiv=this._text_224__text;
			this._text_224.ggId="Text 2";
			this._text_224.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_224.ggVisible=false;
			this._text_224.className='ggskin ggskin_text';
			this._text_224.ggType='text';
			this._text_224.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_224.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_224__text.setAttribute('style',hs);
			this._text_224.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_224.appendChild(this._text_224__text);
			this.__div.appendChild(this._text_224);
		} else
		if (hotspot.skinid=='Room_Out_U_26') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_U_26";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_u_27.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_124=document.createElement('div');
			this._image_124.ggId="Image 1";
			this._image_124.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_124.ggVisible=true;
			this._image_124.className='ggskin ggskin_image';
			this._image_124.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_124.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_124.setAttribute('style',hs);
			this._image_124__img=document.createElement('img');
			this._image_124__img.className='ggskin ggskin_image';
			this._image_124__img.setAttribute('src',basePath + 'images/image_124.png');
			this._image_124__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_124__img.className='ggskin ggskin_image';
			this._image_124__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_124__img);
			this._image_124.appendChild(this._image_124__img);
			this._image_124.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_124.style[domTransition]='none';
				} else {
					me._image_124.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_124.ggParameter.sx=0.2;me._image_124.ggParameter.sy=0.2;
				me._image_124.style[domTransform]=parameterToTransform(me._image_124.ggParameter);
				flag=(me._text_223.style.visibility=='hidden');
				me._text_223.style[domTransition]='none';
				me._text_223.style.visibility=flag?'inherit':'hidden';
				me._text_223.ggVisible=flag;
			}
			this._image_124.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_124.style[domTransition]='none';
				} else {
					me._image_124.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_124.ggParameter.sx=0.1;me._image_124.ggParameter.sy=0.1;
				me._image_124.style[domTransform]=parameterToTransform(me._image_124.ggParameter);
				flag=(me._text_223.style.visibility=='hidden');
				me._text_223.style[domTransition]='none';
				me._text_223.style.visibility=flag?'inherit':'hidden';
				me._text_223.ggVisible=flag;
			}
			this.__div.appendChild(this._image_124);
			this._text_223=document.createElement('div');
			this._text_223__text=document.createElement('div');
			this._text_223.className='ggskin ggskin_textdiv';
			this._text_223.ggTextDiv=this._text_223__text;
			this._text_223.ggId="Text 2";
			this._text_223.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_223.ggVisible=false;
			this._text_223.className='ggskin ggskin_text';
			this._text_223.ggType='text';
			this._text_223.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_223.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_223__text.setAttribute('style',hs);
			this._text_223.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_223.appendChild(this._text_223__text);
			this.__div.appendChild(this._text_223);
		} else
		if (hotspot.skinid=='Room_In_U_26') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_U_26";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_u_26.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_123=document.createElement('div');
			this._image_123.ggId="Image 1";
			this._image_123.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_123.ggVisible=true;
			this._image_123.className='ggskin ggskin_image';
			this._image_123.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_123.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_123.setAttribute('style',hs);
			this._image_123__img=document.createElement('img');
			this._image_123__img.className='ggskin ggskin_image';
			this._image_123__img.setAttribute('src',basePath + 'images/image_123.png');
			this._image_123__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_123__img.className='ggskin ggskin_image';
			this._image_123__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_123__img);
			this._image_123.appendChild(this._image_123__img);
			this._image_123.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_123.style[domTransition]='none';
				} else {
					me._image_123.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_123.ggParameter.sx=0.2;me._image_123.ggParameter.sy=0.2;
				me._image_123.style[domTransform]=parameterToTransform(me._image_123.ggParameter);
				flag=(me._text_222.style.visibility=='hidden');
				me._text_222.style[domTransition]='none';
				me._text_222.style.visibility=flag?'inherit':'hidden';
				me._text_222.ggVisible=flag;
			}
			this._image_123.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_123.style[domTransition]='none';
				} else {
					me._image_123.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_123.ggParameter.sx=0.1;me._image_123.ggParameter.sy=0.1;
				me._image_123.style[domTransform]=parameterToTransform(me._image_123.ggParameter);
				flag=(me._text_222.style.visibility=='hidden');
				me._text_222.style[domTransition]='none';
				me._text_222.style.visibility=flag?'inherit':'hidden';
				me._text_222.ggVisible=flag;
			}
			this.__div.appendChild(this._image_123);
			this._text_222=document.createElement('div');
			this._text_222__text=document.createElement('div');
			this._text_222.className='ggskin ggskin_textdiv';
			this._text_222.ggTextDiv=this._text_222__text;
			this._text_222.ggId="Text 2";
			this._text_222.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_222.ggVisible=false;
			this._text_222.className='ggskin ggskin_text';
			this._text_222.ggType='text';
			this._text_222.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_222.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_222__text.setAttribute('style',hs);
			this._text_222.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_222.appendChild(this._text_222__text);
			this.__div.appendChild(this._text_222);
		} else
		if (hotspot.skinid=='Gang_U_10_To_Gang_U_21') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_U_10_To_Gang_U_21";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_u_21.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_122=document.createElement('div');
			this._image_122.ggId="Image 1";
			this._image_122.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_122.ggVisible=true;
			this._image_122.className='ggskin ggskin_image';
			this._image_122.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_122.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_122.setAttribute('style',hs);
			this._image_122__img=document.createElement('img');
			this._image_122__img.className='ggskin ggskin_image';
			this._image_122__img.setAttribute('src',basePath + 'images/image_122.png');
			this._image_122__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_122__img.className='ggskin ggskin_image';
			this._image_122__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_122__img);
			this._image_122.appendChild(this._image_122__img);
			this._image_122.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_122.style[domTransition]='none';
				} else {
					me._image_122.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_122.ggParameter.sx=0.2;me._image_122.ggParameter.sy=0.2;
				me._image_122.style[domTransform]=parameterToTransform(me._image_122.ggParameter);
				flag=(me._text_221.style.visibility=='hidden');
				me._text_221.style[domTransition]='none';
				me._text_221.style.visibility=flag?'inherit':'hidden';
				me._text_221.ggVisible=flag;
			}
			this._image_122.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_122.style[domTransition]='none';
				} else {
					me._image_122.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_122.ggParameter.sx=0.1;me._image_122.ggParameter.sy=0.1;
				me._image_122.style[domTransform]=parameterToTransform(me._image_122.ggParameter);
				flag=(me._text_221.style.visibility=='hidden');
				me._text_221.style[domTransition]='none';
				me._text_221.style.visibility=flag?'inherit':'hidden';
				me._text_221.ggVisible=flag;
			}
			this.__div.appendChild(this._image_122);
			this._text_221=document.createElement('div');
			this._text_221__text=document.createElement('div');
			this._text_221.className='ggskin ggskin_textdiv';
			this._text_221.ggTextDiv=this._text_221__text;
			this._text_221.ggId="Text 2";
			this._text_221.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_221.ggVisible=false;
			this._text_221.className='ggskin ggskin_text';
			this._text_221.ggType='text';
			this._text_221.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_221.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_221__text.setAttribute('style',hs);
			this._text_221.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_221.appendChild(this._text_221__text);
			this.__div.appendChild(this._text_221);
		} else
		if (hotspot.skinid=='Gang_U_21_To_Gang_U_10') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_U_21_To_Gang_U_10";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_u_10.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_121=document.createElement('div');
			this._image_121.ggId="Image 1";
			this._image_121.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_121.ggVisible=true;
			this._image_121.className='ggskin ggskin_image';
			this._image_121.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_121.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_121.setAttribute('style',hs);
			this._image_121__img=document.createElement('img');
			this._image_121__img.className='ggskin ggskin_image';
			this._image_121__img.setAttribute('src',basePath + 'images/image_121.png');
			this._image_121__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_121__img.className='ggskin ggskin_image';
			this._image_121__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_121__img);
			this._image_121.appendChild(this._image_121__img);
			this._image_121.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_121.style[domTransition]='none';
				} else {
					me._image_121.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_121.ggParameter.sx=0.2;me._image_121.ggParameter.sy=0.2;
				me._image_121.style[domTransform]=parameterToTransform(me._image_121.ggParameter);
				flag=(me._text_220.style.visibility=='hidden');
				me._text_220.style[domTransition]='none';
				me._text_220.style.visibility=flag?'inherit':'hidden';
				me._text_220.ggVisible=flag;
			}
			this._image_121.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_121.style[domTransition]='none';
				} else {
					me._image_121.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_121.ggParameter.sx=0.1;me._image_121.ggParameter.sy=0.1;
				me._image_121.style[domTransform]=parameterToTransform(me._image_121.ggParameter);
				flag=(me._text_220.style.visibility=='hidden');
				me._text_220.style[domTransition]='none';
				me._text_220.style.visibility=flag?'inherit':'hidden';
				me._text_220.ggVisible=flag;
			}
			this.__div.appendChild(this._image_121);
			this._text_220=document.createElement('div');
			this._text_220__text=document.createElement('div');
			this._text_220.className='ggskin ggskin_textdiv';
			this._text_220.ggTextDiv=this._text_220__text;
			this._text_220.ggId="Text 2";
			this._text_220.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_220.ggVisible=false;
			this._text_220.className='ggskin ggskin_text';
			this._text_220.ggType='text';
			this._text_220.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_220.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_220__text.setAttribute('style',hs);
			this._text_220.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_220.appendChild(this._text_220__text);
			this.__div.appendChild(this._text_220);
		} else
		if (hotspot.skinid=='Gang_U_27_To_Gang_U_21') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_U_27_To_Gang_U_21";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_u_21.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_120=document.createElement('div');
			this._image_120.ggId="Image 1";
			this._image_120.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_120.ggVisible=true;
			this._image_120.className='ggskin ggskin_image';
			this._image_120.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_120.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_120.setAttribute('style',hs);
			this._image_120__img=document.createElement('img');
			this._image_120__img.className='ggskin ggskin_image';
			this._image_120__img.setAttribute('src',basePath + 'images/image_120.png');
			this._image_120__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_120__img.className='ggskin ggskin_image';
			this._image_120__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_120__img);
			this._image_120.appendChild(this._image_120__img);
			this._image_120.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_120.style[domTransition]='none';
				} else {
					me._image_120.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_120.ggParameter.sx=0.2;me._image_120.ggParameter.sy=0.2;
				me._image_120.style[domTransform]=parameterToTransform(me._image_120.ggParameter);
				flag=(me._text_219.style.visibility=='hidden');
				me._text_219.style[domTransition]='none';
				me._text_219.style.visibility=flag?'inherit':'hidden';
				me._text_219.ggVisible=flag;
			}
			this._image_120.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_120.style[domTransition]='none';
				} else {
					me._image_120.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_120.ggParameter.sx=0.1;me._image_120.ggParameter.sy=0.1;
				me._image_120.style[domTransform]=parameterToTransform(me._image_120.ggParameter);
				flag=(me._text_219.style.visibility=='hidden');
				me._text_219.style[domTransition]='none';
				me._text_219.style.visibility=flag?'inherit':'hidden';
				me._text_219.ggVisible=flag;
			}
			this.__div.appendChild(this._image_120);
			this._text_219=document.createElement('div');
			this._text_219__text=document.createElement('div');
			this._text_219.className='ggskin ggskin_textdiv';
			this._text_219.ggTextDiv=this._text_219__text;
			this._text_219.ggId="Text 2";
			this._text_219.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_219.ggVisible=false;
			this._text_219.className='ggskin ggskin_text';
			this._text_219.ggType='text';
			this._text_219.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_219.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_219__text.setAttribute('style',hs);
			this._text_219.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_219.appendChild(this._text_219__text);
			this.__div.appendChild(this._text_219);
		} else
		if (hotspot.skinid=='Gang_U_21_To_Gang_27') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_U_21_To_Gang_27";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_u_27.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_119=document.createElement('div');
			this._image_119.ggId="Image 1";
			this._image_119.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_119.ggVisible=true;
			this._image_119.className='ggskin ggskin_image';
			this._image_119.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_119.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_119.setAttribute('style',hs);
			this._image_119__img=document.createElement('img');
			this._image_119__img.className='ggskin ggskin_image';
			this._image_119__img.setAttribute('src',basePath + 'images/image_119.png');
			this._image_119__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_119__img.className='ggskin ggskin_image';
			this._image_119__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_119__img);
			this._image_119.appendChild(this._image_119__img);
			this._image_119.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_119.style[domTransition]='none';
				} else {
					me._image_119.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_119.ggParameter.sx=0.2;me._image_119.ggParameter.sy=0.2;
				me._image_119.style[domTransform]=parameterToTransform(me._image_119.ggParameter);
				flag=(me.skin._text_293.style.visibility=='hidden');
				me.skin._text_293.style[domTransition]='none';
				me.skin._text_293.style.visibility=flag?'inherit':'hidden';
				me.skin._text_293.ggVisible=flag;
			}
			this._image_119.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_119.style[domTransition]='none';
				} else {
					me._image_119.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_119.ggParameter.sx=0.1;me._image_119.ggParameter.sy=0.1;
				me._image_119.style[domTransform]=parameterToTransform(me._image_119.ggParameter);
				flag=(me.skin._text_293.style.visibility=='hidden');
				me.skin._text_293.style[domTransition]='none';
				me.skin._text_293.style.visibility=flag?'inherit':'hidden';
				me.skin._text_293.ggVisible=flag;
			}
			this.__div.appendChild(this._image_119);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				var hs='';
				if (me.__div.ggParameter) {
					hs+=parameterToTransform(me.__div.ggParameter) + ' ';
				}
				hs+='rotate(' + (-1.0*(180 * me.player.getPanNorth() + 0)) + 'deg) ';
				me.__div.style[domTransform]=hs;
			}
			this.hotspotTimerEvent();
		} else
		if (hotspot.skinid=='Room_Out_U_23') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_U_23";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_u_27.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_118=document.createElement('div');
			this._image_118.ggId="Image 1";
			this._image_118.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_118.ggVisible=true;
			this._image_118.className='ggskin ggskin_image';
			this._image_118.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_118.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_118.setAttribute('style',hs);
			this._image_118__img=document.createElement('img');
			this._image_118__img.className='ggskin ggskin_image';
			this._image_118__img.setAttribute('src',basePath + 'images/image_118.png');
			this._image_118__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_118__img.className='ggskin ggskin_image';
			this._image_118__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_118__img);
			this._image_118.appendChild(this._image_118__img);
			this._image_118.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_118.style[domTransition]='none';
				} else {
					me._image_118.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_118.ggParameter.sx=0.2;me._image_118.ggParameter.sy=0.2;
				me._image_118.style[domTransform]=parameterToTransform(me._image_118.ggParameter);
				flag=(me._text_218.style.visibility=='hidden');
				me._text_218.style[domTransition]='none';
				me._text_218.style.visibility=flag?'inherit':'hidden';
				me._text_218.ggVisible=flag;
			}
			this._image_118.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_118.style[domTransition]='none';
				} else {
					me._image_118.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_118.ggParameter.sx=0.1;me._image_118.ggParameter.sy=0.1;
				me._image_118.style[domTransform]=parameterToTransform(me._image_118.ggParameter);
				flag=(me._text_218.style.visibility=='hidden');
				me._text_218.style[domTransition]='none';
				me._text_218.style.visibility=flag?'inherit':'hidden';
				me._text_218.ggVisible=flag;
			}
			this.__div.appendChild(this._image_118);
			this._text_218=document.createElement('div');
			this._text_218__text=document.createElement('div');
			this._text_218.className='ggskin ggskin_textdiv';
			this._text_218.ggTextDiv=this._text_218__text;
			this._text_218.ggId="Text 2";
			this._text_218.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_218.ggVisible=false;
			this._text_218.className='ggskin ggskin_text';
			this._text_218.ggType='text';
			this._text_218.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_218.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_218__text.setAttribute('style',hs);
			this._text_218.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_218.appendChild(this._text_218__text);
			this.__div.appendChild(this._text_218);
		} else
		if (hotspot.skinid=='Room_In_U_23') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_U_23";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_u_23.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_117=document.createElement('div');
			this._image_117.ggId="Image 1";
			this._image_117.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_117.ggVisible=true;
			this._image_117.className='ggskin ggskin_image';
			this._image_117.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_117.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_117.setAttribute('style',hs);
			this._image_117__img=document.createElement('img');
			this._image_117__img.className='ggskin ggskin_image';
			this._image_117__img.setAttribute('src',basePath + 'images/image_117.png');
			this._image_117__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_117__img.className='ggskin ggskin_image';
			this._image_117__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_117__img);
			this._image_117.appendChild(this._image_117__img);
			this._image_117.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_117.style[domTransition]='none';
				} else {
					me._image_117.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_117.ggParameter.sx=0.2;me._image_117.ggParameter.sy=0.2;
				me._image_117.style[domTransform]=parameterToTransform(me._image_117.ggParameter);
				flag=(me._text_217.style.visibility=='hidden');
				me._text_217.style[domTransition]='none';
				me._text_217.style.visibility=flag?'inherit':'hidden';
				me._text_217.ggVisible=flag;
			}
			this._image_117.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_117.style[domTransition]='none';
				} else {
					me._image_117.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_117.ggParameter.sx=0.1;me._image_117.ggParameter.sy=0.1;
				me._image_117.style[domTransform]=parameterToTransform(me._image_117.ggParameter);
				flag=(me._text_217.style.visibility=='hidden');
				me._text_217.style[domTransition]='none';
				me._text_217.style.visibility=flag?'inherit':'hidden';
				me._text_217.ggVisible=flag;
			}
			this.__div.appendChild(this._image_117);
			this._text_217=document.createElement('div');
			this._text_217__text=document.createElement('div');
			this._text_217.className='ggskin ggskin_textdiv';
			this._text_217.ggTextDiv=this._text_217__text;
			this._text_217.ggId="Text 2";
			this._text_217.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_217.ggVisible=false;
			this._text_217.className='ggskin ggskin_text';
			this._text_217.ggType='text';
			this._text_217.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_217.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_217__text.setAttribute('style',hs);
			this._text_217.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_217.appendChild(this._text_217__text);
			this.__div.appendChild(this._text_217);
		} else
		if (hotspot.skinid=='Room_Out_U_22') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_U_22";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_u_21.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_116=document.createElement('div');
			this._image_116.ggId="Image 1";
			this._image_116.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_116.ggVisible=true;
			this._image_116.className='ggskin ggskin_image';
			this._image_116.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_116.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_116.setAttribute('style',hs);
			this._image_116__img=document.createElement('img');
			this._image_116__img.className='ggskin ggskin_image';
			this._image_116__img.setAttribute('src',basePath + 'images/image_116.png');
			this._image_116__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_116__img.className='ggskin ggskin_image';
			this._image_116__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_116__img);
			this._image_116.appendChild(this._image_116__img);
			this._image_116.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_116.style[domTransition]='none';
				} else {
					me._image_116.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_116.ggParameter.sx=0.2;me._image_116.ggParameter.sy=0.2;
				me._image_116.style[domTransform]=parameterToTransform(me._image_116.ggParameter);
				flag=(me._text_216.style.visibility=='hidden');
				me._text_216.style[domTransition]='none';
				me._text_216.style.visibility=flag?'inherit':'hidden';
				me._text_216.ggVisible=flag;
			}
			this._image_116.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_116.style[domTransition]='none';
				} else {
					me._image_116.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_116.ggParameter.sx=0.1;me._image_116.ggParameter.sy=0.1;
				me._image_116.style[domTransform]=parameterToTransform(me._image_116.ggParameter);
				flag=(me._text_216.style.visibility=='hidden');
				me._text_216.style[domTransition]='none';
				me._text_216.style.visibility=flag?'inherit':'hidden';
				me._text_216.ggVisible=flag;
			}
			this.__div.appendChild(this._image_116);
			this._text_216=document.createElement('div');
			this._text_216__text=document.createElement('div');
			this._text_216.className='ggskin ggskin_textdiv';
			this._text_216.ggTextDiv=this._text_216__text;
			this._text_216.ggId="Text 2";
			this._text_216.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_216.ggVisible=false;
			this._text_216.className='ggskin ggskin_text';
			this._text_216.ggType='text';
			this._text_216.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_216.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_216__text.setAttribute('style',hs);
			this._text_216.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_216.appendChild(this._text_216__text);
			this.__div.appendChild(this._text_216);
		} else
		if (hotspot.skinid=='Room_In_U_22') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_U_22";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_u_22.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_115=document.createElement('div');
			this._image_115.ggId="Image 1";
			this._image_115.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_115.ggVisible=true;
			this._image_115.className='ggskin ggskin_image';
			this._image_115.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_115.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_115.setAttribute('style',hs);
			this._image_115__img=document.createElement('img');
			this._image_115__img.className='ggskin ggskin_image';
			this._image_115__img.setAttribute('src',basePath + 'images/image_115.png');
			this._image_115__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_115__img.className='ggskin ggskin_image';
			this._image_115__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_115__img);
			this._image_115.appendChild(this._image_115__img);
			this._image_115.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_115.style[domTransition]='none';
				} else {
					me._image_115.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_115.ggParameter.sx=0.2;me._image_115.ggParameter.sy=0.2;
				me._image_115.style[domTransform]=parameterToTransform(me._image_115.ggParameter);
				flag=(me._text_215.style.visibility=='hidden');
				me._text_215.style[domTransition]='none';
				me._text_215.style.visibility=flag?'inherit':'hidden';
				me._text_215.ggVisible=flag;
			}
			this._image_115.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_115.style[domTransition]='none';
				} else {
					me._image_115.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_115.ggParameter.sx=0.1;me._image_115.ggParameter.sy=0.1;
				me._image_115.style[domTransform]=parameterToTransform(me._image_115.ggParameter);
				flag=(me._text_215.style.visibility=='hidden');
				me._text_215.style[domTransition]='none';
				me._text_215.style.visibility=flag?'inherit':'hidden';
				me._text_215.ggVisible=flag;
			}
			this.__div.appendChild(this._image_115);
			this._text_215=document.createElement('div');
			this._text_215__text=document.createElement('div');
			this._text_215.className='ggskin ggskin_textdiv';
			this._text_215.ggTextDiv=this._text_215__text;
			this._text_215.ggId="Text 2";
			this._text_215.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_215.ggVisible=false;
			this._text_215.className='ggskin ggskin_text';
			this._text_215.ggType='text';
			this._text_215.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_215.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_215__text.setAttribute('style',hs);
			this._text_215.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_215.appendChild(this._text_215__text);
			this.__div.appendChild(this._text_215);
		} else
		if (hotspot.skinid=='Room_Out_U_11') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_Out_U_11";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._gang_u_10.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_114=document.createElement('div');
			this._image_114.ggId="Image 1";
			this._image_114.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_114.ggVisible=true;
			this._image_114.className='ggskin ggskin_image';
			this._image_114.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_114.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_114.setAttribute('style',hs);
			this._image_114__img=document.createElement('img');
			this._image_114__img.className='ggskin ggskin_image';
			this._image_114__img.setAttribute('src',basePath + 'images/image_114.png');
			this._image_114__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_114__img.className='ggskin ggskin_image';
			this._image_114__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_114__img);
			this._image_114.appendChild(this._image_114__img);
			this._image_114.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_114.style[domTransition]='none';
				} else {
					me._image_114.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_114.ggParameter.sx=0.2;me._image_114.ggParameter.sy=0.2;
				me._image_114.style[domTransform]=parameterToTransform(me._image_114.ggParameter);
				flag=(me._text_214.style.visibility=='hidden');
				me._text_214.style[domTransition]='none';
				me._text_214.style.visibility=flag?'inherit':'hidden';
				me._text_214.ggVisible=flag;
			}
			this._image_114.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_114.style[domTransition]='none';
				} else {
					me._image_114.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_114.ggParameter.sx=0.1;me._image_114.ggParameter.sy=0.1;
				me._image_114.style[domTransform]=parameterToTransform(me._image_114.ggParameter);
				flag=(me._text_214.style.visibility=='hidden');
				me._text_214.style[domTransition]='none';
				me._text_214.style.visibility=flag?'inherit':'hidden';
				me._text_214.ggVisible=flag;
			}
			this.__div.appendChild(this._image_114);
			this._text_214=document.createElement('div');
			this._text_214__text=document.createElement('div');
			this._text_214.className='ggskin ggskin_textdiv';
			this._text_214.ggTextDiv=this._text_214__text;
			this._text_214.ggId="Text 2";
			this._text_214.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_214.ggVisible=false;
			this._text_214.className='ggskin ggskin_text';
			this._text_214.ggType='text';
			this._text_214.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_214.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_214__text.setAttribute('style',hs);
			this._text_214.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_214.appendChild(this._text_214__text);
			this.__div.appendChild(this._text_214);
		} else
		if (hotspot.skinid=='Room_In_U_11') {
			this.__div=document.createElement('div');
			this.__div.ggId="Room_In_U_11";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._room_u_11.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_113=document.createElement('div');
			this._image_113.ggId="Image 1";
			this._image_113.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_113.ggVisible=true;
			this._image_113.className='ggskin ggskin_image';
			this._image_113.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_113.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_113.setAttribute('style',hs);
			this._image_113__img=document.createElement('img');
			this._image_113__img.className='ggskin ggskin_image';
			this._image_113__img.setAttribute('src',basePath + 'images/image_113.png');
			this._image_113__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_113__img.className='ggskin ggskin_image';
			this._image_113__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_113__img);
			this._image_113.appendChild(this._image_113__img);
			this._image_113.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_113.style[domTransition]='none';
				} else {
					me._image_113.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_113.ggParameter.sx=0.2;me._image_113.ggParameter.sy=0.2;
				me._image_113.style[domTransform]=parameterToTransform(me._image_113.ggParameter);
				flag=(me._text_213.style.visibility=='hidden');
				me._text_213.style[domTransition]='none';
				me._text_213.style.visibility=flag?'inherit':'hidden';
				me._text_213.ggVisible=flag;
			}
			this._image_113.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_113.style[domTransition]='none';
				} else {
					me._image_113.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_113.ggParameter.sx=0.1;me._image_113.ggParameter.sy=0.1;
				me._image_113.style[domTransform]=parameterToTransform(me._image_113.ggParameter);
				flag=(me._text_213.style.visibility=='hidden');
				me._text_213.style[domTransition]='none';
				me._text_213.style.visibility=flag?'inherit':'hidden';
				me._text_213.ggVisible=flag;
			}
			this.__div.appendChild(this._image_113);
			this._text_213=document.createElement('div');
			this._text_213__text=document.createElement('div');
			this._text_213.className='ggskin ggskin_textdiv';
			this._text_213.ggTextDiv=this._text_213__text;
			this._text_213.ggId="Text 2";
			this._text_213.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_213.ggVisible=false;
			this._text_213.className='ggskin ggskin_text';
			this._text_213.ggType='text';
			this._text_213.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_213.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_213__text.setAttribute('style',hs);
			this._text_213.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_213.appendChild(this._text_213__text);
			this.__div.appendChild(this._text_213);
		} else
		if (hotspot.skinid=='Gang_U_21_To_Erdgeschoss') {
			this.__div=document.createElement('div');
			this.__div.ggId="Gang_U_21_To_Erdgeschoss";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._up_eg.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_112=document.createElement('div');
			this._image_112.ggId="Image 1";
			this._image_112.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_112.ggVisible=true;
			this._image_112.className='ggskin ggskin_image';
			this._image_112.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 500px;';
			hs+='height: 500px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_112.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_112.setAttribute('style',hs);
			this._image_112__img=document.createElement('img');
			this._image_112__img.className='ggskin ggskin_image';
			this._image_112__img.setAttribute('src',basePath + 'images/image_112.png');
			this._image_112__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_112__img.className='ggskin ggskin_image';
			this._image_112__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_112__img);
			this._image_112.appendChild(this._image_112__img);
			this._image_112.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_112.style[domTransition]='none';
				} else {
					me._image_112.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_112.ggParameter.sx=0.2;me._image_112.ggParameter.sy=0.2;
				me._image_112.style[domTransform]=parameterToTransform(me._image_112.ggParameter);
				flag=(me._text_212.style.visibility=='hidden');
				me._text_212.style[domTransition]='none';
				me._text_212.style.visibility=flag?'inherit':'hidden';
				me._text_212.ggVisible=flag;
			}
			this._image_112.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_112.style[domTransition]='none';
				} else {
					me._image_112.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_112.ggParameter.sx=0.1;me._image_112.ggParameter.sy=0.1;
				me._image_112.style[domTransform]=parameterToTransform(me._image_112.ggParameter);
				flag=(me._text_212.style.visibility=='hidden');
				me._text_212.style[domTransition]='none';
				me._text_212.style.visibility=flag?'inherit':'hidden';
				me._text_212.ggVisible=flag;
			}
			this.__div.appendChild(this._image_112);
			this._text_212=document.createElement('div');
			this._text_212__text=document.createElement('div');
			this._text_212.className='ggskin ggskin_textdiv';
			this._text_212.ggTextDiv=this._text_212__text;
			this._text_212.ggId="Text 2";
			this._text_212.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_212.ggVisible=false;
			this._text_212.className='ggskin ggskin_text';
			this._text_212.ggType='text';
			this._text_212.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_212.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_212__text.setAttribute('style',hs);
			this._text_212.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_212.appendChild(this._text_212__text);
			this.__div.appendChild(this._text_212);
		} else
		if (hotspot.skinid=='D_Turnhalle_To_D_Vorschule') {
			this.__div=document.createElement('div');
			this.__div.ggId="D_Turnhalle_To_D_Vorschule";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._d_vorschule.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_111=document.createElement('div');
			this._image_111.ggId="Image 1";
			this._image_111.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_111.ggVisible=true;
			this._image_111.className='ggskin ggskin_image';
			this._image_111.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_111.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_111.setAttribute('style',hs);
			this._image_111__img=document.createElement('img');
			this._image_111__img.className='ggskin ggskin_image';
			this._image_111__img.setAttribute('src',basePath + 'images/image_111.png');
			this._image_111__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_111__img.className='ggskin ggskin_image';
			this._image_111__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_111__img);
			this._image_111.appendChild(this._image_111__img);
			this._image_111.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_111.style[domTransition]='none';
				} else {
					me._image_111.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_111.ggParameter.sx=0.2;me._image_111.ggParameter.sy=0.2;
				me._image_111.style[domTransform]=parameterToTransform(me._image_111.ggParameter);
				flag=(me._text_211.style.visibility=='hidden');
				me._text_211.style[domTransition]='none';
				me._text_211.style.visibility=flag?'inherit':'hidden';
				me._text_211.ggVisible=flag;
			}
			this._image_111.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_111.style[domTransition]='none';
				} else {
					me._image_111.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_111.ggParameter.sx=0.1;me._image_111.ggParameter.sy=0.1;
				me._image_111.style[domTransform]=parameterToTransform(me._image_111.ggParameter);
				flag=(me._text_211.style.visibility=='hidden');
				me._text_211.style[domTransition]='none';
				me._text_211.style.visibility=flag?'inherit':'hidden';
				me._text_211.ggVisible=flag;
			}
			this.__div.appendChild(this._image_111);
			this._text_211=document.createElement('div');
			this._text_211__text=document.createElement('div');
			this._text_211.className='ggskin ggskin_textdiv';
			this._text_211.ggTextDiv=this._text_211__text;
			this._text_211.ggId="Text 2";
			this._text_211.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_211.ggVisible=false;
			this._text_211.className='ggskin ggskin_text';
			this._text_211.ggType='text';
			this._text_211.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_211.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_211__text.setAttribute('style',hs);
			this._text_211.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_211.appendChild(this._text_211__text);
			this.__div.appendChild(this._text_211);
		} else
		if (hotspot.skinid=='D_Vorschule_To_D_Turnhalle') {
			this.__div=document.createElement('div');
			this.__div.ggId="D_Vorschule_To_D_Turnhalle";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._d_turnhalle.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_110=document.createElement('div');
			this._image_110.ggId="Image 1";
			this._image_110.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_110.ggVisible=true;
			this._image_110.className='ggskin ggskin_image';
			this._image_110.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_110.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_110.setAttribute('style',hs);
			this._image_110__img=document.createElement('img');
			this._image_110__img.className='ggskin ggskin_image';
			this._image_110__img.setAttribute('src',basePath + 'images/image_110.png');
			this._image_110__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_110__img.className='ggskin ggskin_image';
			this._image_110__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_110__img);
			this._image_110.appendChild(this._image_110__img);
			this._image_110.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_110.style[domTransition]='none';
				} else {
					me._image_110.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_110.ggParameter.sx=0.2;me._image_110.ggParameter.sy=0.2;
				me._image_110.style[domTransform]=parameterToTransform(me._image_110.ggParameter);
				flag=(me._text_210.style.visibility=='hidden');
				me._text_210.style[domTransition]='none';
				me._text_210.style.visibility=flag?'inherit':'hidden';
				me._text_210.ggVisible=flag;
			}
			this._image_110.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_110.style[domTransition]='none';
				} else {
					me._image_110.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_110.ggParameter.sx=0.1;me._image_110.ggParameter.sy=0.1;
				me._image_110.style[domTransform]=parameterToTransform(me._image_110.ggParameter);
				flag=(me._text_210.style.visibility=='hidden');
				me._text_210.style[domTransition]='none';
				me._text_210.style.visibility=flag?'inherit':'hidden';
				me._text_210.ggVisible=flag;
			}
			this.__div.appendChild(this._image_110);
			this._text_210=document.createElement('div');
			this._text_210__text=document.createElement('div');
			this._text_210.className='ggskin ggskin_textdiv';
			this._text_210.ggTextDiv=this._text_210__text;
			this._text_210.ggId="Text 2";
			this._text_210.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_210.ggVisible=false;
			this._text_210.className='ggskin ggskin_text';
			this._text_210.ggType='text';
			this._text_210.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_210.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_210__text.setAttribute('style',hs);
			this._text_210.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_210.appendChild(this._text_210__text);
			this.__div.appendChild(this._text_210);
		} else
		if (hotspot.skinid=='D_Vorschule_To_D_Haupteingang') {
			this.__div=document.createElement('div');
			this.__div.ggId="D_Vorschule_To_D_Haupteingang";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._d_haupteingang.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_19=document.createElement('div');
			this._image_19.ggId="Image 1";
			this._image_19.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_19.ggVisible=true;
			this._image_19.className='ggskin ggskin_image';
			this._image_19.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_19.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_19.setAttribute('style',hs);
			this._image_19__img=document.createElement('img');
			this._image_19__img.className='ggskin ggskin_image';
			this._image_19__img.setAttribute('src',basePath + 'images/image_19.png');
			this._image_19__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_19__img.className='ggskin ggskin_image';
			this._image_19__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_19__img);
			this._image_19.appendChild(this._image_19__img);
			this._image_19.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_19.style[domTransition]='none';
				} else {
					me._image_19.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_19.ggParameter.sx=0.2;me._image_19.ggParameter.sy=0.2;
				me._image_19.style[domTransform]=parameterToTransform(me._image_19.ggParameter);
				flag=(me._text_29.style.visibility=='hidden');
				me._text_29.style[domTransition]='none';
				me._text_29.style.visibility=flag?'inherit':'hidden';
				me._text_29.ggVisible=flag;
			}
			this._image_19.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_19.style[domTransition]='none';
				} else {
					me._image_19.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_19.ggParameter.sx=0.1;me._image_19.ggParameter.sy=0.1;
				me._image_19.style[domTransform]=parameterToTransform(me._image_19.ggParameter);
				flag=(me._text_29.style.visibility=='hidden');
				me._text_29.style[domTransition]='none';
				me._text_29.style.visibility=flag?'inherit':'hidden';
				me._text_29.ggVisible=flag;
			}
			this.__div.appendChild(this._image_19);
			this._text_29=document.createElement('div');
			this._text_29__text=document.createElement('div');
			this._text_29.className='ggskin ggskin_textdiv';
			this._text_29.ggTextDiv=this._text_29__text;
			this._text_29.ggId="Text 2";
			this._text_29.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_29.ggVisible=false;
			this._text_29.className='ggskin ggskin_text';
			this._text_29.ggType='text';
			this._text_29.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_29.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_29__text.setAttribute('style',hs);
			this._text_29.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_29.appendChild(this._text_29__text);
			this.__div.appendChild(this._text_29);
		} else
		if (hotspot.skinid=='D_Pausenhof_To_D_Roterplatz') {
			this.__div=document.createElement('div');
			this.__div.ggId="D_Pausenhof_To_D_Roterplatz";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._d_roterplatz.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_18=document.createElement('div');
			this._image_18.ggId="Image 1";
			this._image_18.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_18.ggVisible=true;
			this._image_18.className='ggskin ggskin_image';
			this._image_18.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_18.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_18.setAttribute('style',hs);
			this._image_18__img=document.createElement('img');
			this._image_18__img.className='ggskin ggskin_image';
			this._image_18__img.setAttribute('src',basePath + 'images/image_18.png');
			this._image_18__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_18__img.className='ggskin ggskin_image';
			this._image_18__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_18__img);
			this._image_18.appendChild(this._image_18__img);
			this._image_18.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_18.style[domTransition]='none';
				} else {
					me._image_18.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_18.ggParameter.sx=0.2;me._image_18.ggParameter.sy=0.2;
				me._image_18.style[domTransform]=parameterToTransform(me._image_18.ggParameter);
				flag=(me._text_28.style.visibility=='hidden');
				me._text_28.style[domTransition]='none';
				me._text_28.style.visibility=flag?'inherit':'hidden';
				me._text_28.ggVisible=flag;
			}
			this._image_18.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_18.style[domTransition]='none';
				} else {
					me._image_18.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_18.ggParameter.sx=0.1;me._image_18.ggParameter.sy=0.1;
				me._image_18.style[domTransform]=parameterToTransform(me._image_18.ggParameter);
				flag=(me._text_28.style.visibility=='hidden');
				me._text_28.style[domTransition]='none';
				me._text_28.style.visibility=flag?'inherit':'hidden';
				me._text_28.ggVisible=flag;
			}
			this.__div.appendChild(this._image_18);
			this._text_28=document.createElement('div');
			this._text_28__text=document.createElement('div');
			this._text_28.className='ggskin ggskin_textdiv';
			this._text_28.ggTextDiv=this._text_28__text;
			this._text_28.ggId="Text 2";
			this._text_28.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_28.ggVisible=false;
			this._text_28.className='ggskin ggskin_text';
			this._text_28.ggType='text';
			this._text_28.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_28.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_28__text.setAttribute('style',hs);
			this._text_28.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_28.appendChild(this._text_28__text);
			this.__div.appendChild(this._text_28);
		} else
		if (hotspot.skinid=='D_Pausenhof_To_D_Haupteingang') {
			this.__div=document.createElement('div');
			this.__div.ggId="D_Pausenhof_To_D_Haupteingang";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._d_haupteingang.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_17=document.createElement('div');
			this._image_17.ggId="Image 1";
			this._image_17.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_17.ggVisible=true;
			this._image_17.className='ggskin ggskin_image';
			this._image_17.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_17.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_17.setAttribute('style',hs);
			this._image_17__img=document.createElement('img');
			this._image_17__img.className='ggskin ggskin_image';
			this._image_17__img.setAttribute('src',basePath + 'images/image_17.png');
			this._image_17__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_17__img.className='ggskin ggskin_image';
			this._image_17__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_17__img);
			this._image_17.appendChild(this._image_17__img);
			this._image_17.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_17.style[domTransition]='none';
				} else {
					me._image_17.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_17.ggParameter.sx=0.2;me._image_17.ggParameter.sy=0.2;
				me._image_17.style[domTransform]=parameterToTransform(me._image_17.ggParameter);
				flag=(me._text_27.style.visibility=='hidden');
				me._text_27.style[domTransition]='none';
				me._text_27.style.visibility=flag?'inherit':'hidden';
				me._text_27.ggVisible=flag;
			}
			this._image_17.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_17.style[domTransition]='none';
				} else {
					me._image_17.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_17.ggParameter.sx=0.1;me._image_17.ggParameter.sy=0.1;
				me._image_17.style[domTransform]=parameterToTransform(me._image_17.ggParameter);
				flag=(me._text_27.style.visibility=='hidden');
				me._text_27.style[domTransition]='none';
				me._text_27.style.visibility=flag?'inherit':'hidden';
				me._text_27.ggVisible=flag;
			}
			this.__div.appendChild(this._image_17);
			this._text_27=document.createElement('div');
			this._text_27__text=document.createElement('div');
			this._text_27.className='ggskin ggskin_textdiv';
			this._text_27.ggTextDiv=this._text_27__text;
			this._text_27.ggId="Text 2";
			this._text_27.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_27.ggVisible=false;
			this._text_27.className='ggskin ggskin_text';
			this._text_27.ggType='text';
			this._text_27.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_27.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_27__text.setAttribute('style',hs);
			this._text_27.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_27.appendChild(this._text_27__text);
			this.__div.appendChild(this._text_27);
		} else
		if (hotspot.skinid=='D_Haupteingang_To_Aula') {
			this.__div=document.createElement('div');
			this.__div.ggId="D_Haupteingang_To_Aula";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._button_drinnen.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_16=document.createElement('div');
			this._image_16.ggId="Image 1";
			this._image_16.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_16.ggVisible=true;
			this._image_16.className='ggskin ggskin_image';
			this._image_16.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_16.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_16.setAttribute('style',hs);
			this._image_16__img=document.createElement('img');
			this._image_16__img.className='ggskin ggskin_image';
			this._image_16__img.setAttribute('src',basePath + 'images/image_16.png');
			this._image_16__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_16__img.className='ggskin ggskin_image';
			this._image_16__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_16__img);
			this._image_16.appendChild(this._image_16__img);
			this._image_16.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_16.style[domTransition]='none';
				} else {
					me._image_16.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_16.ggParameter.sx=0.2;me._image_16.ggParameter.sy=0.2;
				me._image_16.style[domTransform]=parameterToTransform(me._image_16.ggParameter);
				flag=(me._text_26.style.visibility=='hidden');
				me._text_26.style[domTransition]='none';
				me._text_26.style.visibility=flag?'inherit':'hidden';
				me._text_26.ggVisible=flag;
			}
			this._image_16.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_16.style[domTransition]='none';
				} else {
					me._image_16.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_16.ggParameter.sx=0.1;me._image_16.ggParameter.sy=0.1;
				me._image_16.style[domTransform]=parameterToTransform(me._image_16.ggParameter);
				flag=(me._text_26.style.visibility=='hidden');
				me._text_26.style[domTransition]='none';
				me._text_26.style.visibility=flag?'inherit':'hidden';
				me._text_26.ggVisible=flag;
			}
			this.__div.appendChild(this._image_16);
			this._text_26=document.createElement('div');
			this._text_26__text=document.createElement('div');
			this._text_26.className='ggskin ggskin_textdiv';
			this._text_26.ggTextDiv=this._text_26__text;
			this._text_26.ggId="Text 2";
			this._text_26.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_26.ggVisible=false;
			this._text_26.className='ggskin ggskin_text';
			this._text_26.ggType='text';
			this._text_26.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_26.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_26__text.setAttribute('style',hs);
			this._text_26.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_26.appendChild(this._text_26__text);
			this.__div.appendChild(this._text_26);
		} else
		if (hotspot.skinid=='D_Haupteingang_To_D_Pausenhof') {
			this.__div=document.createElement('div');
			this.__div.ggId="D_Haupteingang_To_D_Pausenhof";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._d_pausenhof.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_15=document.createElement('div');
			this._image_15.ggId="Image 1";
			this._image_15.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_15.ggVisible=true;
			this._image_15.className='ggskin ggskin_image';
			this._image_15.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_15.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_15.setAttribute('style',hs);
			this._image_15__img=document.createElement('img');
			this._image_15__img.className='ggskin ggskin_image';
			this._image_15__img.setAttribute('src',basePath + 'images/image_15.png');
			this._image_15__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_15__img.className='ggskin ggskin_image';
			this._image_15__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_15__img);
			this._image_15.appendChild(this._image_15__img);
			this._image_15.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_15.style[domTransition]='none';
				} else {
					me._image_15.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_15.ggParameter.sx=0.2;me._image_15.ggParameter.sy=0.2;
				me._image_15.style[domTransform]=parameterToTransform(me._image_15.ggParameter);
				flag=(me._text_25.style.visibility=='hidden');
				me._text_25.style[domTransition]='none';
				me._text_25.style.visibility=flag?'inherit':'hidden';
				me._text_25.ggVisible=flag;
			}
			this._image_15.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_15.style[domTransition]='none';
				} else {
					me._image_15.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_15.ggParameter.sx=0.1;me._image_15.ggParameter.sy=0.1;
				me._image_15.style[domTransform]=parameterToTransform(me._image_15.ggParameter);
				flag=(me._text_25.style.visibility=='hidden');
				me._text_25.style[domTransition]='none';
				me._text_25.style.visibility=flag?'inherit':'hidden';
				me._text_25.ggVisible=flag;
			}
			this.__div.appendChild(this._image_15);
			this._text_25=document.createElement('div');
			this._text_25__text=document.createElement('div');
			this._text_25.className='ggskin ggskin_textdiv';
			this._text_25.ggTextDiv=this._text_25__text;
			this._text_25.ggId="Text 2";
			this._text_25.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_25.ggVisible=false;
			this._text_25.className='ggskin ggskin_text';
			this._text_25.ggType='text';
			this._text_25.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_25.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_25__text.setAttribute('style',hs);
			this._text_25.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_25.appendChild(this._text_25__text);
			this.__div.appendChild(this._text_25);
		} else
		if (hotspot.skinid=='D_Haupteingang_To_D_Vorschule') {
			this.__div=document.createElement('div');
			this.__div.ggId="D_Haupteingang_To_D_Vorschule";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._d_vorschule.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_14=document.createElement('div');
			this._image_14.ggId="Image 1";
			this._image_14.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_14.ggVisible=true;
			this._image_14.className='ggskin ggskin_image';
			this._image_14.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_14.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_14.setAttribute('style',hs);
			this._image_14__img=document.createElement('img');
			this._image_14__img.className='ggskin ggskin_image';
			this._image_14__img.setAttribute('src',basePath + 'images/image_14.png');
			this._image_14__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_14__img.className='ggskin ggskin_image';
			this._image_14__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_14__img);
			this._image_14.appendChild(this._image_14__img);
			this._image_14.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_14.style[domTransition]='none';
				} else {
					me._image_14.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_14.ggParameter.sx=0.2;me._image_14.ggParameter.sy=0.2;
				me._image_14.style[domTransform]=parameterToTransform(me._image_14.ggParameter);
				flag=(me._text_24.style.visibility=='hidden');
				me._text_24.style[domTransition]='none';
				me._text_24.style.visibility=flag?'inherit':'hidden';
				me._text_24.ggVisible=flag;
			}
			this._image_14.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_14.style[domTransition]='none';
				} else {
					me._image_14.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_14.ggParameter.sx=0.1;me._image_14.ggParameter.sy=0.1;
				me._image_14.style[domTransform]=parameterToTransform(me._image_14.ggParameter);
				flag=(me._text_24.style.visibility=='hidden');
				me._text_24.style[domTransition]='none';
				me._text_24.style.visibility=flag?'inherit':'hidden';
				me._text_24.ggVisible=flag;
			}
			this.__div.appendChild(this._image_14);
			this._text_24=document.createElement('div');
			this._text_24__text=document.createElement('div');
			this._text_24.className='ggskin ggskin_textdiv';
			this._text_24.ggTextDiv=this._text_24__text;
			this._text_24.ggId="Text 2";
			this._text_24.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_24.ggVisible=false;
			this._text_24.className='ggskin ggskin_text';
			this._text_24.ggType='text';
			this._text_24.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_24.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_24__text.setAttribute('style',hs);
			this._text_24.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_24.appendChild(this._text_24__text);
			this.__div.appendChild(this._text_24);
		} else
		if (hotspot.skinid=='D_Roterplatz_To_D_Pausenhof') {
			this.__div=document.createElement('div');
			this.__div.ggId="D_Roterplatz_To_D_Pausenhof";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._d_pausenhof.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_13=document.createElement('div');
			this._image_13.ggId="Image 1";
			this._image_13.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_13.ggVisible=true;
			this._image_13.className='ggskin ggskin_image';
			this._image_13.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_13.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_13.setAttribute('style',hs);
			this._image_13__img=document.createElement('img');
			this._image_13__img.className='ggskin ggskin_image';
			this._image_13__img.setAttribute('src',basePath + 'images/image_13.png');
			this._image_13__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_13__img.className='ggskin ggskin_image';
			this._image_13__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_13__img);
			this._image_13.appendChild(this._image_13__img);
			this._image_13.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_13.style[domTransition]='none';
				} else {
					me._image_13.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_13.ggParameter.sx=0.2;me._image_13.ggParameter.sy=0.2;
				me._image_13.style[domTransform]=parameterToTransform(me._image_13.ggParameter);
				flag=(me._text_23.style.visibility=='hidden');
				me._text_23.style[domTransition]='none';
				me._text_23.style.visibility=flag?'inherit':'hidden';
				me._text_23.ggVisible=flag;
			}
			this._image_13.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_13.style[domTransition]='none';
				} else {
					me._image_13.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_13.ggParameter.sx=0.1;me._image_13.ggParameter.sy=0.1;
				me._image_13.style[domTransform]=parameterToTransform(me._image_13.ggParameter);
				flag=(me._text_23.style.visibility=='hidden');
				me._text_23.style[domTransition]='none';
				me._text_23.style.visibility=flag?'inherit':'hidden';
				me._text_23.ggVisible=flag;
			}
			this.__div.appendChild(this._image_13);
			this._text_23=document.createElement('div');
			this._text_23__text=document.createElement('div');
			this._text_23.className='ggskin ggskin_textdiv';
			this._text_23.ggTextDiv=this._text_23__text;
			this._text_23.ggId="Text 2";
			this._text_23.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_23.ggVisible=false;
			this._text_23.className='ggskin ggskin_text';
			this._text_23.ggType='text';
			this._text_23.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_23.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_23__text.setAttribute('style',hs);
			this._text_23.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_23.appendChild(this._text_23__text);
			this.__div.appendChild(this._text_23);
		} else
		if (hotspot.skinid=='D_Roterplatz_To_D_Vorschulwald') {
			this.__div=document.createElement('div');
			this.__div.ggId="D_Roterplatz_To_D_Vorschulwald";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._d_vorschulwald.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_12=document.createElement('div');
			this._image_12.ggId="Image 1";
			this._image_12.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_12.ggVisible=true;
			this._image_12.className='ggskin ggskin_image';
			this._image_12.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_12.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_12.setAttribute('style',hs);
			this._image_12__img=document.createElement('img');
			this._image_12__img.className='ggskin ggskin_image';
			this._image_12__img.setAttribute('src',basePath + 'images/image_12.png');
			this._image_12__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_12__img.className='ggskin ggskin_image';
			this._image_12__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_12__img);
			this._image_12.appendChild(this._image_12__img);
			this._image_12.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_12.style[domTransition]='none';
				} else {
					me._image_12.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_12.ggParameter.sx=0.2;me._image_12.ggParameter.sy=0.2;
				me._image_12.style[domTransform]=parameterToTransform(me._image_12.ggParameter);
				flag=(me._text_22.style.visibility=='hidden');
				me._text_22.style[domTransition]='none';
				me._text_22.style.visibility=flag?'inherit':'hidden';
				me._text_22.ggVisible=flag;
			}
			this._image_12.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_12.style[domTransition]='none';
				} else {
					me._image_12.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_12.ggParameter.sx=0.1;me._image_12.ggParameter.sy=0.1;
				me._image_12.style[domTransform]=parameterToTransform(me._image_12.ggParameter);
				flag=(me._text_22.style.visibility=='hidden');
				me._text_22.style[domTransition]='none';
				me._text_22.style.visibility=flag?'inherit':'hidden';
				me._text_22.ggVisible=flag;
			}
			this.__div.appendChild(this._image_12);
			this._text_22=document.createElement('div');
			this._text_22__text=document.createElement('div');
			this._text_22.className='ggskin ggskin_textdiv';
			this._text_22.ggTextDiv=this._text_22__text;
			this._text_22.ggId="Text 2";
			this._text_22.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_22.ggVisible=false;
			this._text_22.className='ggskin ggskin_text';
			this._text_22.ggType='text';
			this._text_22.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_22.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_22__text.setAttribute('style',hs);
			this._text_22.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_22.appendChild(this._text_22__text);
			this.__div.appendChild(this._text_22);
		} else
		if (hotspot.skinid=='D_Vorschulwald_To_D_Schulwald') {
			this.__div=document.createElement('div');
			this.__div.ggId="D_Vorschulwald_To_D_Schulwald";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._d_schulwald.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_11=document.createElement('div');
			this._image_11.ggId="Image 1";
			this._image_11.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_11.ggVisible=true;
			this._image_11.className='ggskin ggskin_image';
			this._image_11.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_11.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_11.setAttribute('style',hs);
			this._image_11__img=document.createElement('img');
			this._image_11__img.className='ggskin ggskin_image';
			this._image_11__img.setAttribute('src',basePath + 'images/image_11.png');
			this._image_11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_11__img.className='ggskin ggskin_image';
			this._image_11__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_11__img);
			this._image_11.appendChild(this._image_11__img);
			this._image_11.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_11.style[domTransition]='none';
				} else {
					me._image_11.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_11.ggParameter.sx=0.2;me._image_11.ggParameter.sy=0.2;
				me._image_11.style[domTransform]=parameterToTransform(me._image_11.ggParameter);
				flag=(me._text_21.style.visibility=='hidden');
				me._text_21.style[domTransition]='none';
				me._text_21.style.visibility=flag?'inherit':'hidden';
				me._text_21.ggVisible=flag;
			}
			this._image_11.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_11.style[domTransition]='none';
				} else {
					me._image_11.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_11.ggParameter.sx=0.1;me._image_11.ggParameter.sy=0.1;
				me._image_11.style[domTransform]=parameterToTransform(me._image_11.ggParameter);
				flag=(me._text_21.style.visibility=='hidden');
				me._text_21.style[domTransition]='none';
				me._text_21.style.visibility=flag?'inherit':'hidden';
				me._text_21.ggVisible=flag;
			}
			this.__div.appendChild(this._image_11);
			this._text_21=document.createElement('div');
			this._text_21__text=document.createElement('div');
			this._text_21.className='ggskin ggskin_textdiv';
			this._text_21.ggTextDiv=this._text_21__text;
			this._text_21.ggId="Text 2";
			this._text_21.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_21.ggVisible=false;
			this._text_21.className='ggskin ggskin_text';
			this._text_21.ggType='text';
			this._text_21.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_21.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_21__text.setAttribute('style',hs);
			this._text_21.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_21.appendChild(this._text_21__text);
			this.__div.appendChild(this._text_21);
		} else
		if (hotspot.skinid=='D_Vorschulwald_To_D_Roterplatz') {
			this.__div=document.createElement('div');
			this.__div.ggId="D_Vorschulwald_To_D_Roterplatz";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._d_roterplatz.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_10=document.createElement('div');
			this._image_10.ggId="Image 1";
			this._image_10.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_10.ggVisible=true;
			this._image_10.className='ggskin ggskin_image';
			this._image_10.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_10.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_10.setAttribute('style',hs);
			this._image_10__img=document.createElement('img');
			this._image_10__img.className='ggskin ggskin_image';
			this._image_10__img.setAttribute('src',basePath + 'images/image_10.png');
			this._image_10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_10__img.className='ggskin ggskin_image';
			this._image_10__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_10__img);
			this._image_10.appendChild(this._image_10__img);
			this._image_10.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_10.style[domTransition]='none';
				} else {
					me._image_10.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_10.ggParameter.sx=0.2;me._image_10.ggParameter.sy=0.2;
				me._image_10.style[domTransform]=parameterToTransform(me._image_10.ggParameter);
				flag=(me._text_20.style.visibility=='hidden');
				me._text_20.style[domTransition]='none';
				me._text_20.style.visibility=flag?'inherit':'hidden';
				me._text_20.ggVisible=flag;
			}
			this._image_10.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_10.style[domTransition]='none';
				} else {
					me._image_10.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_10.ggParameter.sx=0.1;me._image_10.ggParameter.sy=0.1;
				me._image_10.style[domTransform]=parameterToTransform(me._image_10.ggParameter);
				flag=(me._text_20.style.visibility=='hidden');
				me._text_20.style[domTransition]='none';
				me._text_20.style.visibility=flag?'inherit':'hidden';
				me._text_20.ggVisible=flag;
			}
			this.__div.appendChild(this._image_10);
			this._text_20=document.createElement('div');
			this._text_20__text=document.createElement('div');
			this._text_20.className='ggskin ggskin_textdiv';
			this._text_20.ggTextDiv=this._text_20__text;
			this._text_20.ggId="Text 2";
			this._text_20.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_20.ggVisible=false;
			this._text_20.className='ggskin ggskin_text';
			this._text_20.ggType='text';
			this._text_20.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_20.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_20__text.setAttribute('style',hs);
			this._text_20.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_20.appendChild(this._text_20__text);
			this.__div.appendChild(this._text_20);
		} else
		if (hotspot.skinid=='D_Schulwald_To_D_Vorschulwald') {
			this.__div=document.createElement('div');
			this.__div.ggId="D_Schulwald_To_D_Vorschulwald";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin._d_vorschulwald.onclick();
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._image_1=document.createElement('div');
			this._image_1.ggId="Image 1";
			this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this._image_1.ggVisible=true;
			this._image_1.className='ggskin ggskin_image';
			this._image_1.ggType='image';
			hs ='position:absolute;';
			hs+='left: -260px;';
			hs+='top:  -208px;';
			hs+='width: 521px;';
			hs+='height: 387px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._image_1.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._image_1.setAttribute('style',hs);
			this._image_1__img=document.createElement('img');
			this._image_1__img.className='ggskin ggskin_image';
			this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
			this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._image_1__img.className='ggskin ggskin_image';
			this._image_1__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_1__img);
			this._image_1.appendChild(this._image_1__img);
			this._image_1.onmouseover=function () {
				if (me.player.transitionsDisabled) {
					me._image_1.style[domTransition]='none';
				} else {
					me._image_1.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_1.ggParameter.sx=0.2;me._image_1.ggParameter.sy=0.2;
				me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
				flag=(me._text_2.style.visibility=='hidden');
				me._text_2.style[domTransition]='none';
				me._text_2.style.visibility=flag?'inherit':'hidden';
				me._text_2.ggVisible=flag;
			}
			this._image_1.onmouseout=function () {
				if (me.player.transitionsDisabled) {
					me._image_1.style[domTransition]='none';
				} else {
					me._image_1.style[domTransition]='all 500ms ease-out 0ms';
				}
				me._image_1.ggParameter.sx=0.1;me._image_1.ggParameter.sy=0.1;
				me._image_1.style[domTransform]=parameterToTransform(me._image_1.ggParameter);
				flag=(me._text_2.style.visibility=='hidden');
				me._text_2.style[domTransition]='none';
				me._text_2.style.visibility=flag?'inherit':'hidden';
				me._text_2.ggVisible=flag;
			}
			this.__div.appendChild(this._image_1);
			this._text_2=document.createElement('div');
			this._text_2__text=document.createElement('div');
			this._text_2.className='ggskin ggskin_textdiv';
			this._text_2.ggTextDiv=this._text_2__text;
			this._text_2.ggId="Text 2";
			this._text_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._text_2.ggVisible=false;
			this._text_2.className='ggskin ggskin_text';
			this._text_2.ggType='text';
			this._text_2.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.ggTextDiv.style.left=Math.floor(0 + (152-this.ggTextDiv.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -76px;';
			hs+='top:  -111px;';
			hs+='width: 150px;';
			hs+='height: 37px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this._text_2.setAttribute('style',hs);
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+='background: #000000;';
			hs+='border: 1px solid #000000;';
			hs+='color: #ffffff;';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='padding: 0px 1px 0px 1px;';
			hs+='overflow: hidden;';
			this._text_2__text.setAttribute('style',hs);
			this._text_2.ggTextDiv.innerHTML="<p style=\"font-size:14px;color:white\">"+me.hotspot.title+"<\/p>";
			this._text_2.appendChild(this._text_2__text);
			this.__div.appendChild(this._text_2);
		} else
		if (hotspot.skinid=='Eggiechainsaw') {
			this.__div=document.createElement('div');
			this.__div.ggId="Eggiechainsaw";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=false;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -292px;';
			hs+='top:  -75px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._cain=document.createElement('div');
			this._cain.ggId="Cain";
			this._cain.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
			this._cain.ggVisible=false;
			this._cain.className='ggskin ggskin_image';
			this._cain.ggType='image';
			hs ='position:absolute;';
			hs+='left: -388px;';
			hs+='top:  -269px;';
			hs+='width: 700px;';
			hs+='height: 508px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._cain.ggParameter) + ';';
			hs+='opacity: 0;';
			hs+='visibility: hidden;';
			this._cain.setAttribute('style',hs);
			this._cain__img=document.createElement('img');
			this._cain__img.className='ggskin ggskin_image';
			this._cain__img.setAttribute('src',basePath + 'images/cain.png');
			this._cain__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._cain__img.className='ggskin ggskin_image';
			this._cain__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._cain__img);
			this._cain.appendChild(this._cain__img);
			this.__div.appendChild(this._cain);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="Eggiechainsawa";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:0.1,sy:0.1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot';
			this.__div.ggType='hotspot';
			hs ='position:absolute;';
			hs+='left: -413px;';
			hs+='top:  -40px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this.__div.ggParameter) + ';';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._bird=document.createElement('div');
			this._bird.ggId="Bird";
			this._bird.ggParameter={ rx:0,ry:0,a:0,sx:0.02,sy:0.02 };
			this._bird.ggVisible=true;
			this._bird.className='ggskin ggskin_image';
			this._bird.ggType='image';
			hs ='position:absolute;';
			hs+='left: -103px;';
			hs+='top:  -67px;';
			hs+='width: 200px;';
			hs+='height: 133px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+=cssPrefix + 'transform: ' + parameterToTransform(this._bird.ggParameter) + ';';
			hs+='visibility: inherit;';
			this._bird.setAttribute('style',hs);
			this._bird__img=document.createElement('img');
			this._bird__img.className='ggskin ggskin_image';
			this._bird__img.setAttribute('src',basePath + 'images/bird.png');
			this._bird__img.setAttribute('style','position: absolute;top: 0px;left: 0px;-webkit-user-drag:none;');
			this._bird__img.className='ggskin ggskin_image';
			this._bird__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._bird__img);
			this._bird.appendChild(this._bird__img);
			this._bird.onclick=function () {
				if (me.player.transitionsDisabled) {
					me.skin.__div.style[domTransition]='none';
				} else {
					me.skin.__div.style[domTransition]='all 500ms ease-out 0ms';
				}
				me.skin.__div.ggParameter.sx=2;me.skin.__div.ggParameter.sy=2;
				me.skin.__div.style[domTransform]=parameterToTransform(me.skin.__div.ggParameter);
			}
			this._bird.onmouseover=function () {
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.style.visibility='inherit';
				me.skin.__div.ggVisible=true;
			}
			this._bird.onmouseout=function () {
				me.skin.__div.style[domTransition]='none';
				me.skin.__div.style.visibility='hidden';
				me.skin.__div.ggVisible=false;
			}
			this.__div.appendChild(this._bird);
			this.ggUse3d=true;
			this.gg3dDistance=100;
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};