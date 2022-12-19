class PreSceneEffect {
	constructor(param) {
		if (param == null) return;
		this.init(param);
	}
	init(param) {
		this.app = THING.App.current;
		if (param.id != null) {
			this.id = param.id;
		} else {
			this.id = 'pre-scene-effect';
		}
		this.presetLightConfig = {
			'app': {
				'version': '1.0.1',
				'config': {
					'effect': param.config
				}
			}
		};
		this.left = null;
		this.ambientLight;
		this.hemisphereLight;
		this.mainLight;
		this.secondaryLight;
		this.temporalSuperSampling;
		this.enable;
		this.bloom;
		this.screenSpaceAmbientOcclusion;
		this.colorCorrection;
		this.vignette;
		this.film;
		this.chromaticAberration;
		this.dof;
		this.config = {};
		this.postEffect = {};
		this.FXAA = {};
		this.effectConfig = {};
		this.effect = {};
		this.fog = {};
		this.mapFogExpDensity = 0.1;
		this.pathname = window.location.pathname;
		this.prelink = this.pathname.split('/').pop();
		this.flag = true;
		this.timer = null;  // 保存按钮计时器
		var _this = this;

		if (param.type == 'city' && param.map) {
			this.map = param.map;
		}
		_this.adminPermissions = PreConfig.getPermission();
		_this.isAuthor = PreConfig.getSceneAuthor();
	}
	create() {
		if ($('#' + this.id).length > 0) {
			$('#' + this.id + '.pre-panelModel-effect').slideDown();
		} else {
			this.appendHtml();
		}
	}
	show() {
		if ($('#' + this.id).length > 0) {
			this.appendHtml();
		}
	}
	hidden() {
		if ($('#' + this.id).length > 0) {
			$('#' + this.id + '.pre-panelModel-effect').slideUp();
		}
	}
	destroy() {
		if ($('#' + this.id).length > 0) {
			$('#' + this.id + '.pre-panelModel-effect').slideUp({
				complete: function () {
					$('#' + this.id).remove();
				}
			});
		}
	}

	appendHtml() {
		let preSceneEffectHtml =
			`<div id="` + this.id + `" class="pre-panelModel-effect">
			<div class="pre-panelHeader move">
				<span class="pre-panelTitle">场景效果</span>
				<div class="pre-panelIcon">
					<!--<span class="set-iconfont icon-shuaxin pre-refresh"></span>
					<span class="thumb thumbimg thumbHover">
						<span></span>
					</span>-->
					<span class="set-iconfont icon-close pre-close"></span>
				</div>
			</div>
			<div class="pre-panelBody-effect">
				<div class="pre-container-pm">
					<div class="pre-tags title">
						<span class="pre-tag title-name" id="pre-tag-light">灯光配置</span>
						<span class="pre-tag title-name" id="pre-tag-after">后期设置</span>
						<span class="pre-tag title-name" id="pre-tag-effect">动态天空</span>
						<span class="pre-tag title-name" id="pre-tag-fog">雾</span>
					</div>
					<div class="pre-content" id="pre-contentPm">
						<div class="pre-content-light">
							<div class="pre-oneoftag lignt">
								<div class="pre-param-tit pre-param">
									<span class="lightSource">显示光源射线</span>
									<div class="switch">
										<div class="btn_fath clearfix off" id="config-showHelper">
											<div class="move" data-state="off"></div>
											<div class="btnSwitch btn1">ON</div>
											<div class="btnSwitch btn2 ">OFF</div>
										</div>
									</div>
								</div>
								<div>
									<div class="pre-param-tit pre-param firstOrder pre-lignt-active" data-state="foldOn">
										<span class=""><a>环境光</a></span>
									</div>
									<ul class="">
										<li>
											<div class="pre-param">
												<span>颜色</span>
												<input type="text" id="ambientLight-color" class="inputBox color ambientLight-color picker" value="#DDDDDD">
											</div>
										</li>
										<li>
											<div class="pre-param">
												<span>强度</span>
												<div class="progressBar">
													<div id="ambientLight-intensity" class="bar"></div>
													<input type="text" class="inputBox amount newColor" id="amountEn">
												</div>
												<div class="newInput">
													<div class="top"></div>
													<div class="bottom"></div>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div>
									<div class="pre-param-tit pre-param firstOrder pre-lignt-active" data-state="foldOff">
										<span class="pre-paramTit-active"><a>半球光照</a></span>
									</div>
									<ul class="pre-sameAsShadow">
										<li>
											<div class="pre-param">
												<span>颜色</span>
												<input type="text" id="hemisphereLight-color" class="inputBox color hemisphereLight-color picker" value="#333DDD">
											</div>
										</li>
										<li>
											<div class="pre-param">
												<span>地面颜色</span>
												<input type="text" id="hemisphereLight-groundColor" class="inputBox color hemisphereLight-groundColor picker"
												 value="#2D3DDD">
											</div>
										</li>
										<li>
											<div class="pre-param">
												<span>强度</span>
												<div class="progressBar">
													<div id="hemisphereLight-intensity" class="bar"></div>
													<input type="text" class="inputBox amount newColor" id="amountCir">
												</div>
												<div class="newInput">
													<div class="top"></div>
													<div class="bottom"></div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div class="pre-main light">
								<div class="pre-title">主光源</div>
								<div class="pre-param">
									<span>影子</span>
									<div class="switch">
										<div class="btn_fath clearfix off" id="mainLight-shadow">
											<div class="move" data-state="off"></div>
											<div class="btnSwitch btn1">ON</div>
											<div class="btnSwitch btn2 ">OFF</div>
										</div>
									</div>
								</div>
								<div class="pre-param">
									<span>颜色</span>
									<input type="text" id="mainLight-color" class="inputBox color mainLight-color picker" value="#DDDDDD">
								</div>
								<div class="pre-param">
									<span>强度</span>
									<div class="progressBar">
										<div id="mainLight-intensity" class="bar"></div>
										<input type="text" class="inputBox amount newColor" id="amountM">
									</div>
									<div class="newInput">
										<div class="top"></div>
										<div class="bottom"></div>
									</div>
								</div>
								<div class="pre-param">
									<span>垂直角度</span>
									<div class="progressBar">
										<div id="mainLight-alpha" class="bar"></div>
										<input type="text" class="inputBox amount newColor" id="amountVerM">
									</div>
									<div class="newInput">
										<div class="top"></div>
										<div class="bottom"></div>
									</div>
								</div>
								<div class="pre-param">
									<span>水平角度</span>
									<div class="progressBar">
										<div id="mainLight-beta" class="bar"></div>
										<input type="text" class="inputBox amount newColor" id="amountHorM">
									</div>
									<div class="newInput">
										<div class="top"></div>
										<div class="bottom"></div>
									</div>
								</div>
							</div>
							<div class="pre-second light">
								<div class="pre-title">第二光源</div>
								<div class="pre-param">
									<span>影子</span>
									<div class="switch">
										<div class="btn_fath clearfix off" id="secondaryLight-shadow">
											<div class="move" data-state="off"></div>
											<div class="btnSwitch btn1">ON</div>
											<div class="btnSwitch btn2 ">OFF</div>
										</div>
									</div>
								</div>
								<div class="pre-param">
									<span>颜色</span>
									<input type="text" id="secondaryLight-color" class="inputBox color secondaryLight-color picker" value="#DDDDDD">
								</div>
								<div class="pre-param">
									<span>强度</span>
									<div class="progressBar">
										<div id="secondaryLight-intensity" class="bar"></div>
										<input type="text" class="inputBox amount newColor" id="amounSec">
									</div>
									<div class="newInput">
										<div class="top"></div>
										<div class="bottom"></div>
									</div>
								</div>
								<div class="pre-param">
									<span>垂直角度</span>
									<div class="progressBar">
										<div id="secondaryLight-alpha" class="bar"></div>
										<input type="text" class="inputBox amount newColor" id="amountVerS">
									</div>
									<div class="newInput">
										<div class="top"></div>
										<div class="bottom"></div>
									</div>
								</div>
								<div class="pre-param">
									<span>水平角度</span>
									<div class="progressBar">
										<div id="secondaryLight-beta" class="bar"></div>
										<input type="text" class="inputBox amount newColor" id="amountHorS">
									</div>
									<div class="newInput">
										<div class="top"></div>
										<div class="bottom"></div>
									</div>
								</div>
							</div>
						</div>
						<div class="pre-content-after">
							<div class="pre-oneoftag after">
								<div>
									<div class="pre-param pre-param-tit firstOrder" data-state="foldOff">
										<span class="pre-paramTit-active"><a>超采样</a></span>
										<div class="switch">
											<div class="btn_fath clearfix off" id="temporalSuperSampling-enable">
												<div class="move" data-state="off"></div>
												<div class="btnSwitch btn1">ON</div>
												<div class="btnSwitch btn2 ">OFF</div>
											</div>
										</div>
									</div>
									<ul class="pre-temporalSuperSamplingParam">
										<li>
											<div class="pre-param">
												<span>采样帧数</span>
												<div class="progressBar">
													<div id="temporalSuperSampling-size" class="bar"></div>
													<input type="text" class="inputBox amount newColor" id="afterCai">
												</div>
												<div class="newInput">
													<div class="top"></div>
													<div class="bottom"></div>
												</div>
											</div>
										</li>
									</ul>
								</div>
								<div class="pre-containerAfterDis">
									<div class="pre-param pre-param-tit firstOrder" id="shadowFold" data-state="foldOff">
										<span class="pre-paramTit-active"><a>后期处理</a></span>
										<div class="switch">
											<div class="btn_fath clearfix off" id="postEffect-enable">
												<div class="move" data-state="off"></div>
												<div class="btnSwitch btn1">ON</div>
												<div class="btnSwitch btn2 ">OFF</div>
											</div>
										</div>
									</div>
									<ul class="pre-afterDisParam">
										<li>
											<div class="pre-param pre-param-tit">
												<span class="pre-afterManage pre-param-after">抗锯齿</span>
												<div class="switch">
													<div class="btn_fath clearfix off" id="postEffect-FXAA-enable">
														<div class="move" data-state="off"></div>
														<div class="btnSwitch btn1">ON</div>
														<div class="btnSwitch btn2 ">OFF</div>
													</div>
												</div>
											</div>
										</li>
										<li>
											<div class="pre-param pre-param-tit secondOrder" data-state="foldOff">
												<span class="pre-afterManage pre-param-after pre-paramTit-active"><a>泛光</a></span>
												<div class="switch">
													<div class="btn_fath clearfix off" id="bloom-enable">
														<div class="move" data-state="off"></div>
														<div class="btnSwitch btn1">ON</div>
														<div class="btnSwitch btn2 ">OFF</div>
													</div>
												</div>
											</div>
											<ul class="pre-bloomParam">
												<li>
													<div class="pre-param">
														<span class="twoMenue">强度</span>
														<div class="progressBar">
															<div id="bloom-strength" class="bar"></div>
															<input type="text" class="inputBox amount newColor" id="afterQiang">
														</div>
														<div class="newInput">
															<div class="top"></div>
															<div class="bottom"></div>
														</div>
													</div>
												</li>
												<li>
													<div class="pre-param">
														<span class="twoMenue">半径</span>
														<div class="progressBar">
															<div id="bloom-radius" class="bar"></div>
															<input type="text" class="inputBox amount newColor" id="afterCir">
														</div>
														<div class="newInput">
															<div class="top"></div>
															<div class="bottom"></div>
														</div>
													</div>
												</li>
												<li>
													<div class="pre-param">
														<span class="twoMenue">阈值</span>
														<div class="progressBar">
															<div id="bloom-threshold" class="bar"></div>
															<input type="text" class="inputBox amount newColor" id="afterThre">
														</div>
														<div class="newInput">
															<div class="top"></div>
															<div class="bottom"></div>
														</div>
													</div>
												</li>
											</ul>
										</li>
										<li>
											<div class="pre-param pre-param-tit secondOrder" data-state="foldOff">
												<span class="pre-afterManage pre-param-after pre-paramTit-active"><a>环境光遮蔽</a></span>
												<div class="switch">
													<div class="btn_fath clearfix off" id="screenSpaceAmbientOcclusion-enable">
														<div class="move" data-state="off"></div>
														<div class="btnSwitch btn1">ON</div>
														<div class="btnSwitch btn2 ">OFF</div>
													</div>
												</div>
											</div>
											<ul class="pre-screenSpaceAmbientOcclusionParam">
												<div class="pre-param">
													<span class="twoMenue">半径</span>
													<div class="progressBar">
														<div id="screenSpaceAmbientOcclusion-radius" class="bar"></div>
														<input type="text" class="inputBox amount newColor" id="afterCirE">
													</div>
													<div class="newInput">
														<div class="top"></div>
														<div class="bottom"></div>
													</div>
												</div>
												<div class="pre-param">
													<span class="twoMenue">强度</span>
													<div class="progressBar">
														<div id="screenSpaceAmbientOcclusion-intensity" class="bar"></div>
														<input type="text" class="inputBox amount newColor" id="afterQiangE">
													</div>
													<div class="newInput">
														<div class="top"></div>
														<div class="bottom"></div>
													</div>
												</div>
											</ul>
										</li>
										<li>
											<div class="pre-param pre-param-tit secondOrder" data-state="foldOff">
												<span class="pre-afterManage pre-param-after pre-paramTit-active"><a>颜色调整</a></span>
												<div class="switch">
													<div class="btn_fath clearfix off" id="colorCorrection-enable">
														<div class="move" data-state="off"></div>
														<div class="btnSwitch btn1">ON</div>
														<div class="btnSwitch btn2 ">OFF</div>
													</div>
												</div>
											</div>
											<ul class="pre-colorCorrectionParam">
												<div class="pre-param">
													<span class="twoMenue">曝光</span>
													<div class="progressBar">
														<div id="colorCorrection-exposure" class="bar"></div>
														<input type="text" class="inputBox amount newColor" id="afterExpo">
													</div>
													<div class="newInput">
														<div class="top"></div>
														<div class="bottom"></div>
													</div>
												</div>
												<div class="pre-param">
													<span class="twoMenue">亮度</span>
													<div class="progressBar">
														<div id="colorCorrection-brightness" class="bar"></div>
														<input type="text" class="inputBox amount newColor" id="afterLight">
													</div>
													<div class="newInput">
														<div class="top"></div>
														<div class="bottom"></div>
													</div>
												</div>
												<div class="pre-param">
													<span class="twoMenue">对比度</span>
													<div class="progressBar">
														<div id="colorCorrection-contrast" class="bar"></div>
														<input type="text" class="inputBox amount newColor" id="afterComp">
													</div>
													<div class="newInput">
														<div class="top"></div>
														<div class="bottom"></div>
													</div>
												</div>
												<div class="pre-param">
													<span class="twoMenue">饱和度</span>
													<div class="progressBar">
														<div id="colorCorrection-saturation" class="bar"></div>
														<input type="text" class="inputBox amount newColor" id="afterSa">
													</div>
													<div class="newInput">
														<div class="top"></div>
														<div class="bottom"></div>
													</div>
												</div>
												<div class="pre-param">
													<span class="twoMenue">伽马矫正</span>
													<div class="progressBar">
														<div id="colorCorrection-gamma" class="bar"></div>
														<input type="text" class="inputBox amount newColor" id="afterGa">
													</div>
													<div class="newInput">
														<div class="top"></div>
														<div class="bottom"></div>
													</div>
												</div>
											</ul>
										</li>
										<li>
											<div class="pre-param pre-param-tit secondOrder" data-state="foldOff">
												<span class="pre-afterManage pre-param-after pre-paramTit-active"><a>镜头特效</a></span>
												<div class="switch">
													<div class="btn_fath clearfix off" id="vignette-enable">
														<div class="move" data-state="off"></div>
														<div class="btnSwitch btn1">ON</div>
														<div class="btnSwitch btn2 ">OFF</div>
													</div>
												</div>
											</div>
											<ul class="pre-vignetteParam">
												<div class="pre-param">
													<span class="twoMenue">类型</span>
													<span style="float: right;margin-right: 64px; position: relative; top: -2px;padding: 0;">颜色</span>
													<span class="panel-radio-border panel-radio-border-light" style="width: 14px; height: 14px; padding: 0; float: right; margin-right: 3px;margin-left: 6px;">
														<input type="radio" name="vignette-type" class="panel-radio" value="color">
													</span>
													<span style="float: right;margin-right: 20px; position: relative; top: -2px;padding: 0;">模糊</span>
													<span class="panel-radio-border panel-radio-border-light panel-radio-checked" style="width: 14px; height: 14px; padding: 0; float: right; margin-right: 3px;">
														<input type="radio" name="vignette-type" class="panel-radio" checked="checked" value="blur">
													</span>
												</div>
												<div class="pre-param">
													<span>颜色</span>
													<input type="text" id="vignette-color" class="inputBox color vignette-color picker" value="#DDDDDD">
												</div>
												<div class="pre-param">
													<span class="twoMenue">范围</span>
													<div class="progressBar">
														<div id="vignette-offset" class="bar"></div>
														<input type="text" class="inputBox amount newColor" id="afterViOffset">
													</div>
													<div class="newInput">
														<div class="top"></div>
														<div class="bottom"></div>
													</div>
												</div>
											</ul>
										</li>
										<li>
											<div class="pre-param pre-param-tit secondOrder" data-state="foldOff">
												<span class="pre-afterManage pre-param-after pre-paramTit-active"><a>噪点</a></span>
												<div class="switch">
													<div class="btn_fath clearfix off" id="film-enable">
														<div class="move" data-state="off"></div>
														<div class="btnSwitch btn1">ON</div>
														<div class="btnSwitch btn2 ">OFF</div>
													</div>
												</div>
											</div>
											<ul class="pre-filmParam">
												<div class="pre-param">
													<span>灰度模式</span>
													<div class="switch">
														<div class="btn_fath clearfix off" id="film-grayscale">
															<div class="move" data-state="off"></div>
															<div class="btnSwitch btn1">ON</div>
															<div class="btnSwitch btn2 ">OFF</div>
														</div>
													</div>
												</div>
												<div class="pre-param">
													<span class="twoMenue">强度</span>
													<div class="progressBar">
														<div id="film-noiseIntensity" class="bar"></div>
														<input type="text" class="inputBox amount newColor" id="afterFiQiang">
													</div>
													<div class="newInput">
														<div class="top"></div>
														<div class="bottom"></div>
													</div>
												</div>
												<div class="pre-param">
													<span class="twoMenue">扫描线宽</span>
													<div class="progressBar">
														<div id="film-scanlinesIntensity" class="bar"></div>
														<input type="text" class="inputBox amount newColor" id="afterFiWidth">
													</div>
													<div class="newInput">
														<div class="top"></div>
														<div class="bottom"></div>
													</div>
												</div>
												<div class="pre-param">
													<span class="twoMenue">扫描线数量</span>
													<div class="progressBar">
														<div id="film-scanlinesCount" class="bar"></div>
														<input type="text" class="inputBox amount newColor" id="afterFiCount">
													</div>
													<div class="newInput">
														<div class="top"></div>
														<div class="bottom"></div>
													</div>
												</div>
											</ul>
										</li>
										<li>
											<div class="pre-param pre-param-tit secondOrder" data-state="foldOff">
												<span class="pre-afterManage pre-param-after pre-paramTit-active"><a>色散</a></span>
												<div class="switch">
													<div class="btn_fath clearfix off" id="chromaticAberration-enable">
														<div class="move" data-state="off"></div>
														<div class="btnSwitch btn1">ON</div>
														<div class="btnSwitch btn2 ">OFF</div>
													</div>
												</div>
											</div>
											<ul class="pre-chromaticAberrationParam">
												<div class="pre-param">
													<span class="twoMenue">强度</span>
													<div class="progressBar">
														<div id="chromaticAberration-chromaFactor" class="bar"></div>
														<input type="text" class="inputBox amount newColor" id="afterRBSX">
													</div>
													<div class="newInput">
														<div class="top"></div>
														<div class="bottom"></div>
													</div>
												</div>
											</ul>
										</li>
										<li>
											<div class="pre-param pre-param-tit secondOrder" data-state="foldOff">
												<span class="pre-afterManage pre-param-after pre-paramTit-active"><a>景深模糊</a></span>
												<div class="switch">
													<div class="btn_fath clearfix off" id="dof-enable">
														<div class="move" data-state="off"></div>
														<div class="btnSwitch btn1">ON</div>
														<div class="btnSwitch btn2 ">OFF</div>
													</div>
												</div>
											</div>
											<ul class="pre-dofParam">
												<div class="pre-param">
													<span class="twoMenue">相机距离</span>
													<div class="progressBar">
														<div id="dof-focalDepth" class="bar"></div>
														<input type="text" class="inputBox amount newColor" id="afterDepth">
													</div>
													<div class="newInput">
														<div class="top"></div>
														<div class="bottom"></div>
													</div>
												</div>
												<div class="pre-param">
													<span class="twoMenue">聚焦范围</span>
													<div class="progressBar">
														<div id="dof-focalLength" class="bar"></div>
														<input type="text" class="inputBox amount newColor" id="afterLength">
													</div>
													<div class="newInput">
														<div class="top"></div>
														<div class="bottom"></div>
													</div>
												</div>
												<div class="pre-param">
													<span class="twoMenue">最大模糊度</span>
													<div class="progressBar">
														<div id="dof-maxblur" class="bar"></div>
														<input type="text" class="inputBox amount newColor" id="afterblur">
													</div>
													<div class="newInput">
														<div class="top"></div>
														<div class="bottom"></div>
													</div>
												</div>
											</ul>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div class="pre-content-effect">
							<div class="pre-oneoftag effect-one">
								<div class="pre-param pre-param-tit firstOrder pre-paramTit-active" data-state="foldOff">
									<span><a>动态天空效果开关</a></span>
									<div class="switch">
										<div class="btn_fath clearfix off" id="effect-enable">
											<div class="move" data-state="off"></div>
											<div class="btnSwitch btn1">ON</div>
											<div class="btnSwitch btn2 ">OFF</div>
										</div>
									</div>
								</div>
								<ul class="pre-skyEffectParam">
									<li>
										<div class="pre-param">
											<span>显示光源位置</span>
											<div class="switch">
												<div class="btn_fath clearfix off" id="effect-showHelper">
													<div class="move" data-state="off"></div>
													<div class="btnSwitch btn1">ON</div>
													<div class="btnSwitch btn2 ">OFF</div>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div class="pre-param">
											<span>光源扩散大小</span>
											<div class="progressBar">
												<div id="effect-turbidity" class="bar"></div>
												<input type="text" class="inputBox amount newColor" id="positionSize">
											</div>
											<div class="newInput">
												<div class="top"></div>
												<div class="bottom"></div>
											</div>
										</div>
									</li>
									<li>
										<div class="pre-param">
											<span>大气散射</span>
											<div class="progressBar">
												<div id="effect-rayleigh" class="bar"></div>
												<input type="text" class="inputBox amount newColor" id="positionScat">
											</div>
											<div class="newInput">
												<div class="top"></div>
												<div class="bottom"></div>
											</div>
										</div>
									</li>
									<li>
										<div class="pre-param">
											<span>时间</span>
											<div class="progressBar">
												<div id="effect-time" class="bar"></div>
												<input type="text" class="inputBox amount newColor" id="positionTime">
											</div>
											<div class="newInput">
												<div class="top"></div>
												<div class="bottom"></div>
											</div>
										</div>
									</li>
									<li>
										<div class="pre-param">
											<span>水平角度</span>
											<div class="progressBar">
												<div id="effect-beta" class="bar"></div>
												<input type="text" class="inputBox amount newColor" id="positionHor">
											</div>
											<div class="newInput">
												<div class="top"></div>
												<div class="bottom"></div>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>
						<div class="pre-content-fog">
							<div class="pre-oneoftag fog">
								<div class="pre-param pre-param-tit firstOrder pre-paramTit-active" data-state="foldOff">
									<span><a>雾效果开关</a></span>
									<div class="switch">
										<div class="btn_fath clearfix off" id="fog-enable">
											<div class="move" data-state="off"></div>
											<div class="btnSwitch btn1">ON</div>
											<div class="btnSwitch btn2 ">OFF</div>
										</div>
									</div>
								</div>
								<ul class="pre-fogEffectParam pre-sameAsShadow">
									<li>
										<div class="pre-param">
											<span>颜色</span>
											<input type="text" id="fog-color" class="inputBox color fog-color picker" value="#DDDDDD">
										</div>
									</li>
									<li>
										<div class="pre-param">
											<span>` + (this.map ? '浓度' : '区间') + `</span>` +
			(this.map ?
				`<div class="progressBar">
												<div id="fog-fogExpDensity" class="bar"></div>
												<input type="text" class="inputBox amount newColor" id="fogExpDensity">
											</div>
											<div class="newInput">
												<div class="top"></div>
												<div class="bottom"></div>
											</div>`:
				`<div class="progressBar" style="width: 200px">
												<div id="fog-visibility" class="bar"></div>
												<input type="text" class="inputBox amount newColor" id="fogVisibilityFar" />
												<span class="line">-</span>
												<input type="text" class="inputBox amount newColor" id="fogVisibilityNear" />
											</div>
											<div class="newInput" style="right:60px;">
												<div class="top nearCh"></div>
												<div class="bottom nearCh"></div>
											</div>
											<div class="newInput" style="right:7px;">
												<div class="top farCh"></div>
												<div class="bottom farCh"></div>
											</div>`)
			+ `
										</div>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>`;
		$('#div2d').append($(preSceneEffectHtml));
		if (this.adminPermissions == true && this.isAuthor == true && this.pathname.indexOf('/pre/') == 0) {
			var saveIcon =
				`<div class="pre-save">
					<button type="button" class="pre-baocun">保存</button>
				</div>`;
			$('#' + this.id).append($(saveIcon));
		}
		this.preEffectChooseFunction();
		this.preEffectClickFunction();
		this.preEffectParameterSettings();
	}
	preEffectChooseFunction() {
		let _this = this;
		$('#pre-tag-light').addClass('tag-active');
		$('.pre-tag').on('click', function () {
			$(this).addClass('tag-active').siblings('.pre-tag').removeClass('tag-active');
			var tagneme = $(this).attr('id');
			if (tagneme == 'pre-tag-light') {
				$('.pre-content-light').siblings().hide();
				$('.pre-content-light').show();
			} else if (tagneme == 'pre-tag-after') {
				$('.pre-content-after').siblings().hide();
				$('.pre-content-after').show();
			} else if (tagneme == 'pre-tag-effect') {
				$('.pre-content-effect').siblings().hide();
				$('.pre-content-effect').show();
			} else if (tagneme == 'pre-tag-fog') {
				$('.pre-content-fog').siblings().hide();
				$('.pre-content-fog').show();
			}
		})
	}
	preEffectClickFunction() {
		var _this = this;
		$('#' + _this.id + ' .pre-save .pre-baocun').on('click', function () {
			if (_this.flag == false) {
				preAlertClass.newAlert('操作太频繁，请稍候再试!', 'warning'); return;
			}
			let surereload = function () {
				swal_close();
				_this.saveEffectData();
			}
			let cancelreload = function () {
				swal_close();
			}
			if (_this.presetLightConfig.app.config.effect == null) {
				preAlertClass.newConfirm('您确定要保存该场景的灯光效果吗？', ['确定', '取消'], [surereload, cancelreload]);
			} else {
				var getPresetLightData = _this.getPresetData();
				if (JSON.stringify(getPresetLightData) != JSON.stringify(_this.presetLightConfig)) {
					preAlertClass.newConfirm('该场景已保存过灯光效果参数，您确定要覆盖原有参数设置吗？', ['确定', '取消'], [surereload, cancelreload]);
				} else {
					preAlertClass.newConfirm('该场景已保存过灯光效果参数，您确定要覆盖原有参数设置吗？', ['确定', '取消'], [function () { preAlertClass.infoTip('success', '灯光设置保存成功!');}, cancelreload]);
				}
			}
		})
		$('.pre-param-tit.pre-param.firstOrder.pre-lignt-active').on('click', function () {
			_this.preEffectFoldShadow(this);
		})
		$('.btn_fath.clearfix.off').on('click', function () {
			_this.preEffectToogle(this);
		})
		$('.panel-radio-border.panel-radio-border-light').on('click', function () {
			_this.preEffectRadioChecked(this);
		})
		$('.set-iconfont.icon-close.pre-close').on('click', function () {
			$('.light-change.setting-item.setting-item-split').removeClass('selected');
			_this.destroy();
		})
		$('.top').on('click', function () {
			var divid = $(this).parent().prev().find('input').attr('id')
			if (divid == 'amountEn' || divid == 'amountCir' || divid == 'amountM' || divid == 'amounSec' || divid == 'afterQiang' || divid == 'afterCir' || divid == 'afterThre' || divid == 'afterCirE' || divid == 'afterQiangE' || divid == 'afterExpo' || divid == 'afterLight' || divid == 'afterComp' || divid == 'afterGa' || divid == 'afterFiQiang' || divid == 'afterFiWidth' || divid == 'afterRBSX' || divid == 'afterblur') {
				_this.preEffectChangeNum(this, 0.1, 0);
			} else if (divid == 'amountVerM' || divid == 'amountHorM' || divid == 'amountVerS' || divid == 'amountHorS' || divid == 'afterCai' || divid == 'afterDepth' || divid == 'afterLength' || divid == 'positionSize' || divid == 'positionTime' || divid == 'positionHor') {
				_this.preEffectChangeNum(this, 1, 0);
			} else if (divid == 'afterSa' || divid == 'positionScat') {
				_this.preEffectChangeNum(this, 0.5, 0);
			} else if (divid == 'afterViOffset') {
				_this.preEffectChangeNum(this, 0.2, 0);
			} else if (divid == 'afterFiCount') {
				_this.preEffectChangeNum(this, 100, 0);
			} else if (divid == 'fogVisibilityFar') {
				_this.preEffectChangeNum(this, 10, 0);
			} else if (divid == 'fogVisibilityNear') {
				_this.preEffectChangeNum(this, 10, 0);
			} else if (divid == 'fogExpDensity') {
				_this.preEffectChangeNum(this, 0.1, 0);
			}
		})
		$('.bottom').on('click', function () {
			var divid = $(this).parent().prev().find('input').attr('id')
			if (divid == 'amountEn' || divid == 'amountCir' || divid == 'amountM' || divid == 'amounSec' || divid == 'afterQiang' || divid == 'afterCir' || divid == 'afterThre' || divid == 'afterCirE' || divid == 'afterQiangE' || divid == 'afterExpo' || divid == 'afterLight' || divid == 'afterComp' || divid == 'afterGa' || divid == 'afterFiQiang' || divid == 'afterFiWidth' || divid == 'afterRBSX' || divid == 'afterblur') {
				_this.preEffectChangeNum(this, 0.1, 1);
			} else if (divid == 'amountVerM' || divid == 'amountHorM' || divid == 'amountVerS' || divid == 'amountHorS' || divid == 'afterCai' || divid == 'afterDepth' || divid == 'afterLength' || divid == 'positionSize' || divid == 'positionTime' || divid == 'positionHor') {
				_this.preEffectChangeNum(this, 1, 1);
			} else if (divid == 'afterSa' || divid == 'positionScat') {
				_this.preEffectChangeNum(this, 0.5, 1);
			} else if (divid == 'afterViOffset') {
				_this.preEffectChangeNum(this, 0.2, 1);
			} else if (divid == 'afterFiCount') {
				_this.preEffectChangeNum(this, 100, 1);
			} else if (divid == 'fogVisibilityFar') {
				_this.preEffectChangeNum(this, 10, 1);
			} else if (divid == 'fogVisibilityNear') {
				_this.preEffectChangeNum(this, 10, 1);
			} else if (divid == 'fogExpDensity') {
				_this.preEffectChangeNum(this, 0.1, 1);
			}
		})
	}
	setVal(value) {

	}
	preEffectParameterSettings() {
		var _this = this;
		_this.left = $('.wrapper-sam.sam-new').length ? '30px' : '12px';
		// 颜色选择器
		$('.picker').colpick({
			layout: 'hex',
			submit: 0,
			colorScheme: 'dark',
			onChange: function (hsb, hex, rgb, el, bySetColor) {
				$(el).css('border-color', '#' + hex);
				if (!bySetColor) $(el).val('#' + hex);
				var col = "#" + hex;
				var divid = el.id;
				var str = divid.split("-");
				if (divid == 'vignette-color') {
					col = '0x' + hex;
					_this.vignette.color = col;
				} else {
					var colpickId = $(this).find('input').attr('id');
					if (colpickId == 'mainLight-color') {
						_this.mainLight.color = '0x' + hex;
					} else if (colpickId == 'secondaryLight-color') {
						_this.secondaryLight.color = '0x' + hex;
					} else if (colpickId == 'ambientLight-color') {
						_this.ambientLight.color = '0x' + hex;
					} else if (colpickId == 'hemisphereLight-color') {
						_this.hemisphereLight.color = '0x' + hex;
					} else if (colpickId == 'hemisphereLight-groundColor') {
						_this.hemisphereLight.groundColor = '0x' + hex;
					} else if (colpickId == 'fog-color') {
						if (_this.map) {
							_this.map.style.fogExpColor = '#' + hex;
						} else {
							_this.fog.color = '0x' + hex;
						}
					}
				}
				_this.preEffectUpdateLight();
			}
		}).keyup(function () {
			$(this).colpickSetColor(this.value);
			$(".picker").colpickHide();
		});

		$('.btn_fath').on('click', function (ev) {
			var scrollHeight = $(this).parent().parent().parent().prop("scrollHeight");
			if (ev.clientY + scrollHeight > $('.pre-panelModel-effect').css('height').replace(/[^0-9]/ig, "")) {
				$('#pre-contentPm').scrollTop(scrollHeight, 400);
			}
		})


		// 环境光对象
		_this.ambientLight = _this.app.lighting.ambientLight;
		// 半球光照
		_this.hemisphereLight = _this.app.lighting.hemisphereLight;
		// 主灯光对象
		_this.mainLight = _this.app.lighting.mainLight;
		// 第二光源对象
		_this.secondaryLight = _this.app.lighting.secondaryLight;
		// 全局配置
		_this.config = {
			showHelper: _this.app.lighting.showHelper,
			ambientLight: _this.ambientLight,
			hemisphereLight: _this.hemisphereLight,
			mainLight: _this.mainLight,
			secondaryLight: _this.secondaryLight
		}
		// post
		if (_this.app.postEffect == null) {
			_this.temporalSuperSampling = { enable: false, size: 30 };
			_this.enable = false;
			_this.bloom = { enable: false, strength: 0.14, radius: 0.4, threshold: 0.7 };
			_this.screenSpaceAmbientOcclusion = { enable: false, radius: 0.2, intensity: 0.8 };
			_this.colorCorrection = { enable: false, exposure: 0, brightness: 0, contrast: 1, saturation: 1, gamma: 1 };
			_this.vignette = { enable: false, type: 'blur', color: 0, offset: 1.5 };
			_this.film = { enable: false, grayscale: false, noiseIntensity: 0.35, scanlinesIntensity: 0, scanlinesCount: 2048 };
			_this.chromaticAberration = { enable: false, chromaFactor: 0 };
			_this.FXAA = { enable: false };
			_this.dof = { enable: false, focalDepth: 1, focalLength: 24, maxblur: 1 };
			_this.postEffect = {
				enable: _this.enable,
				bloom: _this.bloom,
				screenSpaceAmbientOcclusion: _this.screenSpaceAmbientOcclusion,
				colorCorrection: _this.colorCorrection,
				vignette: _this.vignette,
				film: _this.film,
				chromaticAberration: _this.chromaticAberration,
				FXAA: _this.FXAA,
				dof: _this.dof
			};
			_this.effectConfig = {
				temporalSuperSampling: _this.temporalSuperSampling,
				postEffect: _this.postEffect
			}
		} else {
			_this.temporalSuperSampling = _this.app.postEffect.temporalSuperSampling;
			_this.enable = _this.app.postEffect.postEffect.enable;
			_this.bloom = _this.app.postEffect.postEffect.bloom;
			_this.screenSpaceAmbientOcclusion = _this.app.postEffect.postEffect.screenSpaceAmbientOcclusion;
			_this.colorCorrection = _this.app.postEffect.postEffect.colorCorrection;
			_this.vignette = _this.app.postEffect.postEffect.vignette;
			if (typeof (_this.vignette) == 'undefined') {
				_this.vignette = { enable: false, type: 'blur', color: 0, offset: 1.5 };
			}
			_this.film = _this.app.postEffect.postEffect.film;
			if (typeof (_this.film) == 'undefined') {
				_this.film = { enable: false, grayscale: false, noiseIntensity: 0.35, scanlinesIntensity: 0, scanlinesCount: 2048 };
			}
			_this.chromaticAberration = _this.app.postEffect.postEffect.chromaticAberration;
			if (typeof (chromaticAberration) == 'undefined') {
				_this.chromaticAberration = { enable: false, chromaFactor: 0.025 };
			}
			_this.FXAA = _this.app.postEffect.postEffect.FXAA;
			_this.dof = _this.app.postEffect.postEffect.dof;
			if (typeof (dof) == 'undefined') {
				_this.dof = { enable: false, focalDepth: 1, focalLength: 24, maxblur: 1 };
			}
			_this.postEffect = {
				enable: _this.enable,
				bloom: _this.bloom,
				screenSpaceAmbientOcclusion: _this.screenSpaceAmbientOcclusion,
				colorCorrection: _this.colorCorrection,
				vignette: _this.vignette,
				film: _this.film,
				chromaticAberration: _this.chromaticAberration,
				FXAA: _this.FXAA,
				dof: _this.dof
			};
			_this.effectConfig = {
				temporalSuperSampling: _this.temporalSuperSampling,
				postEffect: _this.postEffect
			}
		}
		// 天空默认效果
		if (_this.app.skyEffect === null) {
			_this.effect = {
				showHelper: false, // 显示光源位置
				turbidity: 10, // 光源扩散大小
				rayleigh: 2, // 大气散射
				time: 17.6, // 时间 [0~24]
				beta: 30, // 水平角度
			};
		} else {
			_this.effect = _this.app.skyEffect;
		}
		// 雾效果初始值
		if (_this.app.fog === null) {
			_this.fog = {
				color: 0xe0e0e0,
				near: 10,
				far: 150
			};
		} else {
			_this.fog = _this.app.fog;
		}

		// 滑杆
		$(".progressBar>div").slider({
			orientation: "horizontal",
			range: "min",
			min: 0,
			max: 1.0,
			value: 200.0,
			slide: function (event, ui) {
				//截取字符串，div的id就是要赋值的
				var divid = $(this).attr('id');
				var str = divid.split("-");
				var tar = str[0] + "." + str[1];
				var sliderMax = $(this).slider('option', 'max');

				if (sliderMax == 359 || sliderMax == 60) {
					$(event.target).siblings(".inputBox").val(ui.value);
					tar = ui.value;
				} else if (sliderMax == 4000 || sliderMax == 24000 || sliderMax == 1000) {
					$(event.target).siblings(".inputBox").val(ui.value / 1000);
					tar = ui.value / 1000;
				} else {
					$(event.target).siblings(".inputBox").val(ui.value / 10);
					tar = ui.value / 10;
				}
				if (divid == 'film-scanlinesCount' || divid == 'vignette-offset') {
					$(event.target).siblings(".inputBox").val(ui.value);
					tar = ui.value;
				}
				if (divid == 'chromaticAberration-chromaFactor') {
					var val = $(event.target).siblings(".inputBox").val();
					if (val.length > 4) val = Number(val).toFixed(3);
					$(event.target).siblings(".inputBox").val(val);
					tar = val;
					_this.effectConfig.postEffect.chromaticAberration.chromaFactor = Number(val);
				}
				if (divid == 'mainLight-intensity') {
					_this.mainLight.intensity = tar;
				} else if (divid == 'mainLight-alpha') {
					_this.mainLight.alpha = tar;
				} else if (divid == 'mainLight-beta') {
					_this.mainLight.beta = tar;
				} else if (divid == 'secondaryLight-intensity') {
					_this.secondaryLight.intensity = tar;
				} else if (divid == 'secondaryLight-alpha') {
					_this.secondaryLight.alpha = tar;
				} else if (divid == 'secondaryLight-beta') {
					_this.secondaryLight.beta = tar;
				} else if (divid == 'ambientLight-intensity') {
					_this.ambientLight.intensity = tar;
				} else if (divid == 'hemisphereLight-intensity') {
					_this.hemisphereLight.intensity = tar;
				} else if (divid == 'temporalSuperSampling-size') {
					_this.temporalSuperSampling.size = tar;
				} else if (divid == 'bloom-strength') {
					_this.bloom.strength = tar;
				} else if (divid == 'bloom-radius') {
					_this.bloom.radius = tar;
				} else if (divid == 'bloom-threshold') {
					_this.bloom.threshold = tar;
				} else if (divid == 'screenSpaceAmbientOcclusion-radius') {
					_this.screenSpaceAmbientOcclusion.radius = tar;
				} else if (divid == 'screenSpaceAmbientOcclusion-intensity') {
					_this.screenSpaceAmbientOcclusion.intensity = tar;
				} else if (divid == 'colorCorrection-exposure') {
					_this.colorCorrection.exposure = tar;
				} else if (divid == 'colorCorrection-brightness') {
					_this.colorCorrection.brightness = tar;
				} else if (divid == 'colorCorrection-contrast') {
					_this.colorCorrection.contrast = tar;
				} else if (divid == 'colorCorrection-saturation') {
					_this.colorCorrection.saturation = tar;
				} else if (divid == 'colorCorrection-gamma') {
					_this.colorCorrection.gamma = tar;
				} else if (divid == 'vignette-offset') {
					_this.vignette.offset = tar;
				} else if (divid == 'film-noiseIntensity') {
					_this.film.noiseIntensity = tar;
				} else if (divid == 'film-scanlinesIntensity') {
					_this.film.scanlinesIntensity = tar;
				} else if (divid == 'film-scanlinesCount') {
					_this.film.scanlinesCount = tar;
				} else if (divid == 'chromaticAberration-chromaFactor') {
					_this.chromaticAberration.chromaFactor = tar;
				} else if (divid == 'dof-focalDepth') {
					_this.dof.focalDepth = tar;
				} else if (divid == 'dof-focalLength') {
					_this.dof.focalLength = tar;
				} else if (divid == 'dof-maxblur') {
					_this.dof.maxblur = tar;
				} else if (divid == 'effect-turbidity') {
					_this.effect.turbidity = tar;
				} else if (divid == 'effect-rayleigh') {
					_this.effect.rayleigh = tar;
				} else if (divid == 'effect-time') {
					_this.effect.time = tar;
				} else if (divid == 'effect-beta') {
					_this.effect.beta = tar;
				} else if (divid == 'fog-fogExpDensity') {
					_this.map ? _this.map.style.fogExpDensity = tar : console.log('error!');
				}
				_this.preEffectUpdateLight();
			}
		});
		$("#fog-visibility").slider({
			orientation: "horizontal",
			range: true,
			min: 0,
			max: 1000,
			values: [_this.fog.near, _this.fog.far],
			slide: function (event, ui) {
				$("#fogVisibilityNear").val(ui.values[0]);
				$("#fogVisibilityFar").val(ui.values[1]);
				_this.fog.near = ui.values[0];
				_this.fog.far = ui.values[1];
				_this.preEffectUpdateLight();
			}
		});

		// 读取场景内参数，初始化toogle的状态
		_this.preEffectInitTog();

		// 获取相关参数的初始值并且赋值
		_this.preEffectInitSlider();

		// 遍历给进度条的input框赋初始值
		_this.preEffectInitInput();

		// 监听进度条相关的input值的变化
		$(".progressBar>input").keypress(function (e) {
			if (e.which == 13) {
				if (e.target.id === "fogVisibilityNear" || e.target.id === "fogVisibilityFar") {
					var tempN = parseFloat($("#fogVisibilityNear").val()), tempF = parseFloat($("#fogVisibilityFar").val()), tempMi = parseFloat($("#fog-visibility").slider('option', 'min')), tempMa = parseFloat($("#fog-visibility").slider('option', 'max'));
					if (!isNaN(tempN) && typeof (tempN) === "number" && !isNaN(tempF) && typeof (tempF) === "number" && !isNaN(tempMi) && typeof (tempMi) === "number" && !isNaN(tempMa) && typeof (tempMa) === "number") {
						var near = Math.round(tempN), far = Math.round(tempF);
						var max = Math.round(tempMa), min = Math.round(tempMi);
						if (e.target.id === "fogVisibilityNear") {
							if (near > far) {
								near = $("#fogVisibilityFar").val();
							} else if (near < min) {
								near = min;
							}
						}
						if (e.target.id === "fogVisibilityFar") {
							if (far < near) {
								far = $("#fogVisibilityNear").val();
							} else if (far > max) {
								far = max;
							}
						}
						$("#fogVisibilityNear").val(near);
						$("#fogVisibilityFar").val(far);
						_this.fog.near = near;
						_this.fog.far = far;
						$("#fog-visibility").slider("values", 0, near);
						$("#fog-visibility").slider("values", 1, far);
						_this.preEffectUpdateLight();
					}
					return;
				}
				var num = parseFloat($(this).val());
				if (!isNaN(num) && typeof (num) === "number") {
					var sibling = $(this).siblings();
					var divid = sibling.attr('id');
					var str = divid.split("-");
					if (sibling.slider('option', 'max') == 4000 || sibling.slider('option', 'max') == 24000 || sibling.slider('option', 'max') == 1000) {
						sibling.slider("value", num * 1000);
						if (num * 1000 > sibling.slider('option', 'max')) {
							num = sibling.slider('option', 'max') / 1000;
							$(this).val(num);
						}
						if (num * 1000 < sibling.slider('option', 'min')) {
							num = sibling.slider('option', 'min') / 1000;
							$(this).val(num);
						}
					} else if (sibling.slider('option', 'max') == 359 || sibling.slider('option', 'max') == 60) {
						sibling.slider("value", num);
						if (num > sibling.slider('option', 'max')) {
							num = sibling.slider('option', 'max');
							$(this).val(num);
						}
						if (num < sibling.slider('option', 'min')) {
							num = sibling.slider('option', 'min');
							$(this).val(num);
						}
					} else {
						sibling.slider("value", num * 10);
						if (num * 10 > sibling.slider('option', 'max')) {
							num = sibling.slider('option', 'max') / 10;
							$(this).val(num);
						}
						if (num * 10 < sibling.slider('option', 'min')) {
							num = sibling.slider('option', 'min') / 10;
							$(this).val(num);
						}
					}
					if (divid == 'mainLight-intensity') {
						_this.mainLight.intensity = num;
					} else if (divid == 'mainLight-alpha') {
						_this.mainLight.alpha = num;
					} else if (divid == 'mainLight-beta') {
						_this.mainLight.beta = num;
					} else if (divid == 'secondaryLight-intensity') {
						_this.secondaryLight.intensity = num;
					} else if (divid == 'secondaryLight-alpha') {
						_this.secondaryLight.alpha = num;
					} else if (divid == 'secondaryLight-beta') {
						_this.secondaryLight.beta = num;
					} else if (divid == 'ambientLight-intensity') {
						_this.ambientLight.intensity = num;
					} else if (divid == 'hemisphereLight-intensity') {
						_this.hemisphereLight.intensity = num;
					} else if (divid == 'temporalSuperSampling-size') {
						_this.temporalSuperSampling.size = num;
					} else if (divid == 'bloom-strength') {
						_this.bloom.strength = num;
					} else if (divid == 'bloom-radius') {
						_this.bloom.radius = num;
					} else if (divid == 'bloom-threshold') {
						_this.bloom.threshold = num;
					} else if (divid == 'screenSpaceAmbientOcclusion-radius') {
						_this.screenSpaceAmbientOcclusion.radius = num;
					} else if (divid == 'screenSpaceAmbientOcclusion-intensity') {
						_this.screenSpaceAmbientOcclusion.intensity = num;
					} else if (divid == 'colorCorrection-exposure') {
						_this.colorCorrection.exposure = num;
					} else if (divid == 'colorCorrection-brightness') {
						_this.colorCorrection.brightness = num;
					} else if (divid == 'colorCorrection-contrast') {
						_this.colorCorrection.contrast = num;
					} else if (divid == 'colorCorrection-saturation') {
						_this.colorCorrection.saturation = num;
					} else if (divid == 'colorCorrection-gamma') {
						_this.colorCorrection.gamma = num;
					} else if (divid == 'film-noiseIntensity') {
						_this.film.noiseIntensity = num;
					} else if (divid == 'film-scanlinesIntensity') {
						_this.film.scanlinesIntensity = num;
					} else if (divid == 'film-scanlinesCount') {
						_this.film.scanlinesCount = num;
					} else if (divid == 'chromaticAberration-chromaFactor') {
						_this.chromaticAberration.chromaFactor = num;
					} else if (divid == 'dof-focalDepth') {
						_this.dof.focalDepth = num;
					} else if (divid == 'dof-focalLength') {
						_this.dof.focalLength = num;
					} else if (divid == 'dof-maxblur') {
						_this.dof.maxblur = num;
					} else if (divid == 'effect-turbidity') {
						_this.effect.turbidity = num;
					} else if (divid == 'effect-rayleigh') {
						_this.effect.rayleigh = num;
					} else if (divid == 'effect-time') {
						_this.effect.time = num;
					} else if (divid == 'effect-beta') {
						_this.effect.beta = num;
					}
				}
				_this.preEffectUpdateLight();
			}
		});
	}

	/**
	 * 设置场景效果
	 */
	preEffectUpdateLight() {
		//场景内灯光
		if ($('#pre-tag-light').hasClass("tag-active")) this.app.lighting = this.config;
		// 场景后处理
		if ($('#pre-tag-after').hasClass("tag-active")) this.app.postEffect = this.effectConfig;
		//时间控制
		if ($('#pre-tag-effect').hasClass("tag-active") && $('#effect-enable').children(".move").attr("data-state") === "on") this.app.skyEffect = this.effect;
		// 雾效果
		if ($('#pre-tag-fog').hasClass("tag-active") && $('#fog-enable').children(".move").attr("data-state") === "on") {
			if (!this.map) {
				this.app.fog = this.fog;
			}
		}
	}

	/**
	 * 读取场景内参数，初始化toogle的状态
	 */
	preEffectInitTog() {
		var _this = this
		$(".switch>div").each(function () {
			var togid = this.id;
			var str = togid.split("-");
			var targetDom = $(this);
			var tar = null;
			if (togid == 'config-showHelper') {
				tar = _this.config.showHelper;
			} else if (togid == 'mainLight-shadow') {
				tar = _this.mainLight.shadow;
			} else if (togid == 'secondaryLight-shadow') {
				tar = _this.secondaryLight.shadow;
			} else if (togid == 'temporalSuperSampling-enable') {
				tar = _this.temporalSuperSampling.enable;
			} else if (togid == 'postEffect-enable') {
				tar = _this.postEffect.enable;
			} else if (togid == 'postEffect-FXAA-enable') {
				tar = _this.postEffect.FXAA.enable;
			} else if (togid == 'bloom-enable') {
				tar = _this.bloom.enable;
			} else if (togid == 'screenSpaceAmbientOcclusion-enable') {
				tar = _this.screenSpaceAmbientOcclusion.enable;
			} else if (togid == 'colorCorrection-enable') {
				tar = _this.colorCorrection.enable;
			} else if (togid == 'vignette-enable') {
				tar = _this.vignette.enable;
			} else if (togid == 'film-enable') {
				tar = _this.film.enable;
			} else if (togid == 'film-grayscale') {
				tar = _this.film.grayscale;
			} else if (togid == 'chromaticAberration-enable') {
				tar = _this.chromaticAberration.enable;
			} else if (togid == 'dof-enable') {
				tar = _this.dof.enable;
			} else if (togid == 'effect-enable') {
				tar = _this.effect.enable;
			} else if (togid == 'effect-showHelper') {
				tar = _this.effect.showHelper;
			} else if (togid == 'fog-enable') {
				tar = _this.fog.enable;
			}
			if (tar == true) {
				targetDom.children(".move").css("left", _this.left);
				targetDom.children(".move").attr("data-state", "on");
				targetDom.removeClass("off").addClass("on");
				targetDom.children(".move").css('background', '#fff');
				if (togid !== "config-showHelper" && togid !== "mainLight-shadow" && togid !== "secondaryLight-shadow" && togid !== "postEffect-FXAA-enable" && togid !== "effect-showHelper") {
					targetDom.parent().siblings().removeClass("pre-paramTit-active");
					targetDom.parent().parent().attr("data-state", "foldOn");
					targetDom.parent().parent().siblings().removeClass("pre-sameAsShadow");
				}
			} else if (tar == false) {
				targetDom.children(".move").css("left", "1px");
				targetDom.children(".move").attr("data-state", "off");
				targetDom.removeClass("on").addClass("off");
				targetDom.children(".move").css('background', '#636161');
				if (togid !== "config-showHelper" && togid !== "mainLight-shadow" && togid !== "secondaryLight-shadow" && togid !== "postEffect-FXAA-enable" && togid !== "effect-showHelper") {
					targetDom.parent().siblings().addClass("pre-paramTit-active");
					targetDom.parent().parent().attr("data-state", "foldOff");
					targetDom.parent().parent().siblings().addClass("pre-sameAsShadow");
				}
			} else if (tar == undefined) {
				if ((str[0] === "effect" && _this.app.skyEffect !== null) || (str[0] === "fog" && _this.app.fog !== null)) {
					targetDom.children(".move").css("left", _this.left);
					targetDom.children(".move").attr("data-state", "on");
					targetDom.removeClass("off").addClass("on");
					targetDom.parent().siblings().removeClass("pre-paramTit-active");
					targetDom.parent().parent().attr("data-state", "foldOn");
					targetDom.parent().parent().siblings().removeClass("pre-sameAsShadow");
				} else {
					targetDom.children(".move").css("left", "1px");
					targetDom.children(".move").attr("data-state", "off");
					targetDom.removeClass("on").addClass("off");
					targetDom.parent().siblings().addClass("pre-paramTit-active");
					targetDom.parent().parent().attr("data-state", "foldOff");
					targetDom.parent().parent().siblings("ul").addClass("pre-sameAsShadow");
				}
			}
		})
	}

	/**
	 * 获取相关参数的初始值并且赋值
	 */
	preEffectInitSlider() {
		$(".ambientLight-color").val("#" + parseInt(this.ambientLight.color).toString(16));
		$("#ambientLight-intensity").slider('option', 'max', 30);
		$("#ambientLight-intensity").slider("value", this.ambientLight.intensity * 10);
		$(".hemisphereLight-color").val("#" + parseInt(this.hemisphereLight.color).toString(16));
		$(".hemisphereLight-groundColor").val("#" + parseInt(this.hemisphereLight.groundColor).toString(16));
		$("#hemisphereLight-intensity").slider('option', 'max', 30);
		$("#hemisphereLight-intensity").slider("value", this.hemisphereLight.intensity * 10);

		$(".mainLight-color").val("#" + parseInt(this.mainLight.color).toString(16));
		$("#mainLight-intensity").slider('option', 'max', 30);
		$("#mainLight-intensity").slider("value", this.mainLight.intensity * 10);
		$("#mainLight-alpha").slider('option', 'max', 359);
		$("#mainLight-alpha").slider("value", this.mainLight.alpha);
		$("#mainLight-beta").slider('option', 'max', 359);
		$("#mainLight-beta").slider("value", this.mainLight.beta);

		$("#secondaryLight-shadow").val(this.secondaryLight.shadow);
		$(".secondaryLight-color").val("#" + parseInt(this.secondaryLight.color).toString(16));
		$("#secondaryLight-intensity").slider('option', 'max', 30);
		$("#secondaryLight-intensity").slider("value", this.secondaryLight.intensity * 10);
		$("#secondaryLight-alpha").slider('option', 'max', 359);
		$("#secondaryLight-alpha").slider("value", this.secondaryLight.alpha);
		$("#secondaryLight-beta").slider('option', 'max', 359);
		$("#secondaryLight-beta").slider("value", this.secondaryLight.beta);

		//后期赋值
		$("#temporalSuperSampling-size").slider('option', 'max', 60);
		$("#temporalSuperSampling-size").slider("value", this.temporalSuperSampling.size);

		$("#bloom-strength").slider('option', 'max', 1000);
		$("#bloom-strength").slider("value", this.bloom.strength * 1000);
		$("#bloom-radius").slider('option', 'max', 50);
		$("#bloom-radius").slider("value", this.bloom.radius * 10);
		$("#bloom-threshold").slider('option', 'max', 10);
		$("#bloom-threshold").slider("value", this.bloom.threshold * 10);

		$("#screenSpaceAmbientOcclusion-radius").slider('option', 'max', 50);
		$("#screenSpaceAmbientOcclusion-radius").slider("value", this.screenSpaceAmbientOcclusion.radius * 10);
		$("#screenSpaceAmbientOcclusion-intensity").slider('option', 'max', 30);
		$("#screenSpaceAmbientOcclusion-intensity").slider("value", this.screenSpaceAmbientOcclusion.intensity * 10);

		//后期颜色调整
		$("#colorCorrection-exposure").slider('option', 'max', 10);
		$("#colorCorrection-exposure").slider("value", this.colorCorrection.exposure * 10);
		$("#colorCorrection-exposure").slider('option', 'min', -10);
		$("#colorCorrection-exposure").slider("value", this.colorCorrection.exposure * 10);
		$("#colorCorrection-brightness").slider('option', 'max', 1000);
		$("#colorCorrection-brightness").slider("value", this.colorCorrection.brightness * 1000);
		$("#colorCorrection-brightness").slider('option', 'min', -1000);
		$("#colorCorrection-brightness").slider("value", this.colorCorrection.brightness * 1000);
		$("#colorCorrection-contrast").slider('option', 'max', 50);
		$("#colorCorrection-contrast").slider("value", this.colorCorrection.contrast * 10);
		$("#colorCorrection-saturation").slider('option', 'max', 100);
		$("#colorCorrection-saturation").slider("value", this.colorCorrection.saturation * 10);
		$("#colorCorrection-gamma").slider('option', 'max', 20);
		$("#colorCorrection-gamma").slider("value", this.colorCorrection.gamma * 10);

		// 后期镜头模糊
		$(".vignette-color").val(this.vignette.color === 0 ? '#000000' : this.vignette.color.indexOf('0x') != -1 ? '#' + this.vignette.color.substring('2') : '#' + this.vignette.color);
		$("#vignette-offset").slider("option", 'min', 0);
		$("#vignette-offset").slider('option', 'step', 0.1);
		$("#vignette-offset").slider("option", 'max', 8);
		$("#vignette-offset").slider("value", this.vignette.offset);

		// 后期噪点
		$("#film-noiseIntensity").slider('option', 'min', 0);
		$("#film-noiseIntensity").slider('option', 'max', 10);
		$("#film-noiseIntensity").slider('option', 'step', 0.1);
		$("#film-noiseIntensity").slider("value", this.film.noiseIntensity * 10);
		$("#film-scanlinesIntensity").slider('option', 'min', 0);
		$("#film-scanlinesIntensity").slider('option', 'max', 10);
		$("#film-scanlinesIntensity").slider('option', 'step', 0.1);
		$("#film-scanlinesIntensity").slider("value", this.film.scanlinesIntensity * 10);
		$("#film-scanlinesCount").slider('option', 'min', 0);
		$("#film-scanlinesCount").slider('option', 'max', 3000);
		$("#film-scanlinesCount").slider("option", 'step', 1);
		$("#film-scanlinesCount").slider("value", this.film.scanlinesCount);

		// 后期红蓝分离
		$("#chromaticAberration-chromaFactor").slider('option', 'max', 1);
		$("#chromaticAberration-chromaFactor").slider('option', 'step', 0.001);
		$("#chromaticAberration-chromaFactor").slider("value", this.chromaticAberration.chromaFactor);

		// 景深模糊
		$("#dof-focalDepth").slider('option', 'max', 500);
		$("#dof-focalDepth").slider("value", this.dof.focalDepth * 10);
		$("#dof-focalLength").slider('option', 'max', 500);
		$("#dof-focalLength").slider("value", this.dof.focalLength * 10);
		$("#dof-maxblur").slider('option', 'max', 10);
		$("#dof-maxblur").slider("value", this.dof.maxblur * 10);
		//	效果配置
		$("#effect-turbidity").slider('option', 'min', 10);
		$("#effect-turbidity").slider('option', 'max', 200);
		$("#effect-turbidity").slider("value", this.effect.turbidity * 10);
		$("#effect-rayleigh").slider('option', 'max', 4000);
		$("#effect-rayleigh").slider("value", this.effect.rayleigh * 1000);
		$("#effect-time").slider('option', 'max', 24000);
		$("#effect-time").slider("value", this.effect.time * 1000);
		$("#effect-beta").slider('option', 'max', 359);
		$("#effect-beta").slider("value", this.effect.beta);

		// 雾效果
		$("#fog-color").val("#" + parseInt(this.fog.color).toString(16));
		$("#fog-fogExpDensity").slider('option', 'max', 20);
		$("#fog-fogExpDensity").slider('value', this.mapFogExpDensity * 10);
	}

	/**
	 * 遍历给进度条的input框赋初始值
	 */
	preEffectInitInput() {
		var _this = this;
		//遍历给进度条的input框赋初始值
		$(".progressBar>div").each(function () {
			//遍历给进度条的input赋初始值
			var targetDom = $(this);
			var num = targetDom.slider("value");
			var slideMax = targetDom.slider('option', 'max');
			if (slideMax == 4000 || slideMax == 24000 || slideMax == 1000) {
				targetDom.siblings(".inputBox").val(num / 1000);
			} else if (slideMax == 359 || slideMax == 60) {
				targetDom.siblings(".inputBox").val(num);
			} else {
				targetDom.siblings(".inputBox").val(num / 10);
			}
			if (this.id === 'film-scanlinesCount' || this.id === 'vignette-offset') {
				targetDom.siblings(".inputBox").val(num);
			}
			if (this.id === 'chromaticAberration-chromaFactor') {
				num = _this.postEffect.chromaticAberration.chromaFactor;
				var percent = Math.round(Number(num / 0.1) * 100) + '%';
				targetDom.children('.ui-slider-range').css('width', percent);
				targetDom.children('.ui-slider-handle').css('left', percent);
				targetDom.siblings(".inputBox").val(num);
			}
			if (this.id === "fog-visibility") {
				$("#fogVisibilityNear").val(_this.fog.near);
				$("#fogVisibilityFar").val(_this.fog.far);
			}
			if (this.id === "fog-fogExpDensity") {
				$('#fogExpDensity').val(_this.mapFogExpDensity)
			}
		});
	}

	preEffectFoldShadow(e) {
		var ele = $(e).siblings("ul");
		if ($(e).attr("data-state") == "foldOn") {
			$(e).attr("data-state", "foldOff");
			// ele.hide();
			ele.addClass("pre-sameAsShadow");
			$(e).children("span").addClass("pre-paramTit-active");
		} else if ($(e).attr("data-state") == "foldOff") {
			$(e).attr("data-state", "foldOn");
			// ele.show();
			ele.removeClass("pre-sameAsShadow");
			$(ele).find('div.pre-param.pre-sameAsShadow').removeClass('pre-sameAsShadow');
			$(e).children("span").removeClass("pre-paramTit-active");
		}
	}
	//on/off
	preEffectToogle(e) {
		this.preEffectFoldShadow($(e).parent().parent());
		var ele = $(e).children(".move");
		if (ele.attr("data-state") == "on") {
			ele.css('background', '#636161')
			ele.animate({
				left: "1"
			}, 300, function () {
				ele.attr("data-state", "off");
			});
			$(e).removeClass("on").addClass("off");
			if (e.id.indexOf("config-showHelper") != -1) this.config.showHelper = false;
			if (e.id.indexOf("mainLight") != -1) this.mainLight.shadow = false;
			if (e.id.indexOf("secondaryLight-shadow") != -1) this.secondaryLight.shadow = false;
			if (e.id.indexOf("postEffect-FXAA-enable") != -1) this.postEffect.FXAA.enable = false;
			if (e.id.indexOf("postEffect-enable") != -1) this.postEffect.enable = false;
			if (e.id.indexOf("temporalSuperSampling-enable") != -1) this.temporalSuperSampling.enable = false;
			if (e.id.indexOf("bloom-enable") != -1) this.bloom.enable = false;
			if (e.id.indexOf("screenSpaceAmbientOcclusion-enable") != -1) this.screenSpaceAmbientOcclusion.enable = false;
			if (e.id.indexOf("colorCorrection-enable") != -1) this.colorCorrection.enable = false;
			if (e.id.indexOf("vignette-enable") != -1) this.vignette.enable = false;
			if (e.id.indexOf("film-enable") != -1) this.film.enable = false;
			if (e.id.indexOf("film-grayscale") != -1) this.film.grayscale = false;
			if (e.id.indexOf("chromaticAberration-enable") != -1) this.chromaticAberration.enable = false;
			if (e.id.indexOf("dof-enable") != -1) this.dof.enable = false;
			if (e.id.indexOf("effect-showHelper") != -1) this.effect.showHelper = false;
			if (e.id.indexOf("effect-enable") != -1) { this.app.skyEffect = null; return; }
			if (e.id.indexOf("fog-enable") != -1) {
				this.fog.enable = false;
				if (this.map) {
					this.toggleMapFog(this.fog.enable);
				} else {
					this.app.fog = null;
				}
				return;
			}
		} else if (ele.attr("data-state") == "off") {
			ele.css('background', '#fff')
			ele.animate({
				left: this.left
			}, 300, function () {
				$(this).attr("data-state", "on");
			});
			$(e).removeClass("off").addClass("on");
			if (e.id.indexOf("config-showHelper") != -1) this.config.showHelper = true;
			if (e.id.indexOf("mainLight") != -1) this.mainLight.shadow = true;
			if (e.id.indexOf("secondaryLight-shadow") != -1) this.secondaryLight.shadow = true;
			if (e.id.indexOf("postEffect-FXAA-enable") != -1) this.postEffect.FXAA.enable = true;
			if (e.id.indexOf("postEffect-enable") != -1) this.postEffect.enable = true;
			if (e.id.indexOf("temporalSuperSampling-enable") != -1) this.temporalSuperSampling.enable = true;
			if (e.id.indexOf("bloom-enable") != -1) this.bloom.enable = true;
			if (e.id.indexOf("screenSpaceAmbientOcclusion-enable") != -1) this.screenSpaceAmbientOcclusion.enable = true;
			if (e.id.indexOf("colorCorrection-enable") != -1) this.colorCorrection.enable = true;
			if (e.id.indexOf("vignette-enable") != -1) this.vignette.enable = true;
			if (e.id.indexOf("film-enable") != -1) this.film.enable = true;
			if (e.id.indexOf("film-grayscale") != -1) this.film.grayscale = true;
			if (e.id.indexOf("chromaticAberration-enable") != -1) this.chromaticAberration.enable = true;
			if (e.id.indexOf("dof-enable") != -1) this.dof.enable = true;
			if (e.id.indexOf("effect-showHelper") != -1) this.effect.showHelper = true;
			if (e.id.indexOf("effect-enable") != -1) { this.app.skyEffect = this.effect; this.effect.enable = true; return; }
			if (e.id.indexOf("fog-enable") != -1) {
				this.fog.enable = true;
				if (this.map) {
					this.toggleMapFog(this.fog.enable);
				} else {
					this.app.fog = this.fog;
				}
				return;
			}
		}
		this.preEffectUpdateLight();
	}
	preEffectRadioChecked(el) {
		if ($(el).hasClass('panel-radio-checked')) return;
		let radioName = $(el).find('input.panel-radio').attr('name');
		let radioVal = $(el).find('input.panel-radio').val();
		$(el).siblings('.panel-radio-border').removeClass('panel-radio-checked');
		$(el).addClass('panel-radio-checked');
		if (radioName == 'vignette-type') {
			this.vignette.type = radioVal;
		}
		this.preEffectUpdateLight();
	}

	preEffectChangeNum(e, per, type) {//0+ ,1-
		var _this = this;
		if ($(e).hasClass('farCh') || $(e).hasClass('nearCh')) {
			if (type == 1) per = -per;
			var tempN = parseFloat($("#fogVisibilityNear").val()), tempF = parseFloat($("#fogVisibilityFar").val()), tempMi = parseFloat($("#fog-visibility").slider('option', 'min')), tempMa = parseFloat($("#fog-visibility").slider('option', 'max'));
			if (!isNaN(tempN) && typeof (tempN) === "number" && !isNaN(tempF) && typeof (tempF) === "number" && !isNaN(tempMi) && typeof (tempMi) === "number" && !isNaN(tempMa) && typeof (tempMa) === "number") {
				var near = Math.round(tempN), far = Math.round(tempF);
				var max = Math.round(tempMa), min = Math.round(tempMi);
				if ($(e).hasClass('nearCh')) {
					near = near + per;
					if (near > far) {
						near = far;
					} else if (near < min) {
						near = min;
					}
				}
				if ($(e).hasClass('farCh')) {
					far = far + per;
					if (far < near) {
						far = near;
					} else if (far > max) {
						far = max;
					}
				}
				$("#fogVisibilityNear").val(near);
				$("#fogVisibilityFar").val(far);
				_this.fog.near = near;
				_this.fog.far = far;
				$("#fog-visibility").slider("values", 0, near);
				$("#fog-visibility").slider("values", 1, far);
				_this.preEffectUpdateLight();
			}
			return;
		}

		var $el = $(e).parent().prev().find('input');
		if (type == 1) per = -per;
		var num = parseFloat($el.val()) + per;
		if (!isNaN(num) && typeof (num) === "number") {
			var sibling = $el.siblings();
			var divid = sibling.attr('id');
			var str = divid.split("-");
			if (sibling.slider('option', 'max') == 4000 || sibling.slider('option', 'max') == 24000 || sibling.slider('option', 'max') == 1000) {
				sibling.slider("value", num * 1000);
				if (num * 1000 > sibling.slider('option', 'max')) {
					num = sibling.slider('option', 'max') / 1000;
					$el.val(num);
				} else if (num * 1000 < sibling.slider('option', 'min')) {
					num = sibling.slider('option', 'min') / 1000;
					$el.val(num);
				} else {
					$el.val(num);
				}
			} else if (sibling.slider('option', 'max') == 359 || sibling.slider('option', 'max') == 60) {
				sibling.slider("value", num);
				if (num > sibling.slider('option', 'max')) {
					num = sibling.slider('option', 'max');
					$el.val(num);
				} else if (num < sibling.slider('option', 'min')) {
					num = sibling.slider('option', 'min');
					$el.val(num);
				} else {
					$el.val(num);
				}
			} else {
				if (divid == 'film-noiseIntensity' || divid == 'film-scanlinesIntensity') {
					sibling.slider("value", num * 10);
					if (num * 10 >= sibling.slider('option', 'max')) {
						num = sibling.slider('option', 'max') / 10;
						$el.val(num);
					} else if (num * 10 <= sibling.slider('option', 'min')) {
						num = sibling.slider('option', 'min') / 10;
						$el.val(num);
					} else {
						$el.val(parseFloat(num).toFixed(1) + '');
					}
				} else if (divid == 'film-scanlinesCount' || divid === 'vignette-offset') {
					sibling.slider("value", num);
					if (num >= sibling.slider('option', 'max')) {
						num = sibling.slider('option', 'max');
						$el.val(num);
					} else if (num <= sibling.slider('option', 'min')) {
						num = sibling.slider('option', 'min');
						$el.val(num);
					} else {
						if (divid === 'vignette-offset') {
							$el.val(parseFloat(num).toFixed(1) + '');
						} else {
							$el.val(num);
						}
					}
				} else {
					sibling.slider("value", num * 10);
					if (num * 10 > sibling.slider('option', 'max')) {
						num = sibling.slider('option', 'max') / 10;
						$el.val(num);
					} else if (num * 10 < sibling.slider('option', 'min')) {
						num = sibling.slider('option', 'min') / 10;
						$el.val(num);
					} else {
						$el.val(num);
					}
				}
				if (divid == 'mainLight-intensity') {
					_this.mainLight.intensity = num;
				} else if (divid == 'mainLight-alpha') {
					_this.mainLight.alpha = num;
				} else if (divid == 'mainLight-beta') {
					_this.mainLight.beta = num;
				} else if (divid == 'secondaryLight-intensity') {
					_this.secondaryLight.intensity = num;
				} else if (divid == 'secondaryLight-alpha') {
					_this.secondaryLight.alpha = num;
				} else if (divid == 'secondaryLight-beta') {
					_this.secondaryLight.beta = num;
				} else if (divid == 'ambientLight-intensity') {
					_this.ambientLight.intensity = num;
				} else if (divid == 'hemisphereLight-intensity') {
					_this.hemisphereLight.intensity = num;
				} else if (divid == 'temporalSuperSampling-size') {
					_this.temporalSuperSampling.size = num;
				} else if (divid == 'bloom-strength') {
					_this.bloom.strength = num;
				} else if (divid == 'bloom-radius') {
					_this.bloom.radius = num;
				} else if (divid == 'bloom-threshold') {
					_this.bloom.threshold = num;
				} else if (divid == 'screenSpaceAmbientOcclusion-radius') {
					_this.screenSpaceAmbientOcclusion.radius = num;
				} else if (divid == 'screenSpaceAmbientOcclusion-intensity') {
					_this.screenSpaceAmbientOcclusion.intensity = num;
				} else if (divid == 'colorCorrection-exposure') {
					_this.colorCorrection.exposure = num;
				} else if (divid == 'colorCorrection-brightness') {
					_this.colorCorrection.brightness = num;
				} else if (divid == 'colorCorrection-contrast') {
					_this.colorCorrection.contrast = num;
				} else if (divid == 'colorCorrection-saturation') {
					_this.colorCorrection.saturation = num;
				} else if (divid == 'colorCorrection-gamma') {
					_this.colorCorrection.gamma = num;
				} else if (divid == 'film-noiseIntensity') {
					_this.film.noiseIntensity = num;
				} else if (divid == 'film-scanlinesIntensity') {
					_this.film.scanlinesIntensity = num;
				} else if (divid == 'film-scanlinesCount') {
					_this.film.scanlinesCount = num;
				} else if (divid == 'chromaticAberration-chromaFactor') {
					_this.chromaticAberration.chromaFactor = num;
				} else if (divid == 'dof-focalDepth') {
					_this.dof.focalDepth = num;
				} else if (divid == 'dof-focalLength') {
					_this.dof.focalLength = num;
				} else if (divid == 'dof-maxblur') {
					_this.dof.maxblur = num;
				} else if (divid == 'effect-turbidity') {
					_this.effect.turbidity = num;
				} else if (divid == 'effect-rayleigh') {
					_this.effect.rayleigh = num;
				} else if (divid == 'effect-time') {
					_this.effect.time = num;
				} else if (divid == 'effect-beta') {
					_this.effect.beta = num;
				} else if (divid == 'fog-fogExpDensity') {
					_this.map ? _this.map.style.fogExpDensity = num : console.log('error!');
				}
			}
		}
		_this.preEffectUpdateLight();
	}

	saveEffectData() {
		var _this = this;
		if (typeof (PreConfig) == 'undefined' && typeof (PreConfig.savePreData) == 'undefined') return;
		let saveData = _this.getPresetData();
		_this.reqDatas = {
			target: 'lightConfig',
			targetType: 'base',
			preLink: _this.prelink,
			jsonData: saveData
		}
		PreConfig.savePreData('lightConfig', _this.reqDatas, {
			success: function () {
				_this.presetLightConfig = saveData;
				preAlertClass.infoTip('success', '灯光设置保存成功!');
				_this.flag = false;
			},
			failed: function () {
				preAlertClass.infoTip('error', '灯光设置保存失败!');
			},
			error: function () {
				preAlertClass.infoTip('error', '灯光设置保存失败!');
			},
			complete: function () {
				if (_this.timer == null) {
					_this.timer = setTimeout(function () {
						_this.flag = true;
						clearTimeout(_this.timer);
						_this.timer = null;
					}, 3500)
				}
			}
		})
	}
	getPresetData() {
		let presetJson = {};
		let appJson = this.getAppData();
		presetJson['app'] = appJson;
		return presetJson;
	}
	getAppData() {
		var _this = this;
		let appJson = {};
		appJson['version'] = '1.0.1';
		appJson['config'] = {
			'base': {
				'effect': _this.getEffectConfig()
			}
		}
		return appJson;
	}
	getEffectConfig() {
		let effectJson = {}
		effectJson['lighting'] = JSON.stringify(this.app.lighting);
		effectJson['postEffect'] = JSON.stringify(this.app.postEffect);
		effectJson['skyEffect'] = JSON.stringify(this.app.skyEffect);
		effectJson['fog'] = JSON.stringify(this.app.fog);
		return effectJson;
	}
	toggleMapFog(bool) {
		this.map.style.fog = bool;
		this.map.style.fogExp = bool;
		if (bool) {
			this.map.style.fogExpDensity = this.mapFogExpDensity;
			this.map.style.fogDensity = 0;
		} else {
			// 浓雾效果
			this.map.style.fogExpDensity = 0;
			this.map.style.fogDensity = 1;
		}
	}
}



