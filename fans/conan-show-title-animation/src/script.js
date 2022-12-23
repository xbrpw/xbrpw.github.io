(function() {	//	rAF/cAF POLYFILL by Paul Irish et al

	var lastTime = 0;
	var vendors = ['webkit', 'moz'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
		window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
		window.cancelAnimationFrame =
		window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
	}
	if (!window.requestAnimationFrame)
		window.requestAnimationFrame = function(callback, element) {
			var currTime = new Date().getTime();
			var timeToCall = Math.max(0, 16 - (currTime - lastTime));
			var id = window.setTimeout(function() { callback(currTime + timeToCall); }, timeToCall);
			lastTime = currTime + timeToCall;
			return id;
		};
	if (!window.cancelAnimationFrame)
		window.cancelAnimationFrame = function(id) {
			clearTimeout(id);
		};
}());
(function() {


	var	doc = document, elemList = Construct_SubElement_List( doc.body ), len = elemList.length, win = window, i, ATF_Content ;

	for (  i = 0 ; i < len ; i++  ) {

		var	currElem	= elemList[i] ;

		if ( currElem.className && /^Block_ATF$/.test( currElem.className ) )

			ATF_Content	=	new  ATF_Content_Obj( currElem ) ;
	}
	function	ATF_Content_Obj   (  ElemObjRef  )  {

		var	ELEM		= ElemObjRef , doc = document , win = window ,

			ElemList	= Construct_SubElement_List( ELEM ) , num = ElemList.length , j ;

		this.ElemObj		= ELEM ;

		this.Ttl_ch0_EO		= "" ;
		this.Ttl_ch1_EO		= "" ;
		this.Ttl_ch2_EO		= "" ;
		this.Ttl_ch3_EO		= "" ;
		this.Ttl_ch4_EO		= "" ;

		this.drOrDot_EO		= "" ;
		this.ltOrDot_EO		= "" ;
		this.ylwDot_EO		= "" ;
		this.grnDot_EO		= "" ;
		this.bluDot_EO		= "" ;

		this.airTmStn_EO	= "" ;
		this.siteURL_EO		= "" ;

		for (  j = 0 ; j < num ; j++  ) {

			var	CE = ElemList[j] ;

			if ( /^ttlTxt ch0/.test( CE.className ) )

				this.Ttl_ch0_EO	= CE ;

			else if ( /^ttlTxt ch1/.test( CE.className ) )

				this.Ttl_ch1_EO	= CE ;

			else if ( /^ttlTxt ch2/.test( CE.className ) )

				this.Ttl_ch2_EO	= CE ;

			else if ( /^ttlTxt ch3/.test( CE.className ) )

				this.Ttl_ch3_EO	= CE ;

			else if ( /^ttlTxt ch4/.test( CE.className ) )

				this.Ttl_ch4_EO	= CE ;

			else if ( /^LogoDot drkOrng/.test( CE.className ) )

				this.drOrDot_EO	= CE ;

			else if ( /^LogoDot ltOrng/.test( CE.className ) )

				this.ltOrDot_EO	= CE ;

			else if ( /^LogoDot ylw/.test( CE.className ) )

				this.ylwDot_EO		= CE ;

			else if ( /^LogoDot grn/.test( CE.className ) )

				this.bluDot_EO		= CE ;

			else if ( /^LogoDot blu/.test( CE.className ) )

				this.grnDot_EO		= CE ;

			else if ( /^Airtime_Station_sB/.test( CE.className ) )

				this.airTmStn_EO	= CE ;

			else if ( /^Website_URL_sB/.test( CE.className ) )

				this.siteURL_EO	= CE ;
		}


//	##########	--	METHODS


		this.Toggle = function () {

			var	ATF_clssStr	= this.ElemObj.className ,

				ldgAlrt_clssStr	= this.Loading_Alert.ElemObj.className ;

			this.ElemObj.className = ( ATF_clssStr.indexOf(" _Off") > 0 )? ATF_clssStr.substr( 0 , ATF_clssStr.indexOf(" _Off") ) : ATF_clssStr + " _Off" ;
		} ;

		this.Animate_Intro = function () {

			this.Ttl_ch2_EO.className += " _On" ;

			win.setTimeout(   function() {  window.requestAnimationFrame( function() { ATF_Content.Ttl_ch1_EO.className += " _On"; ATF_Content.Ttl_ch3_EO.className += " _On"; } ) ;  } , 100   ) ;
			win.setTimeout(   function() {  window.requestAnimationFrame( function() { ATF_Content.Ttl_ch0_EO.className += " _On"; ATF_Content.Ttl_ch4_EO.className += " _On"; } ) ;  } , 200   ) ;

			win.setTimeout(   function() {  window.requestAnimationFrame( function() { ATF_Content.ltOrDot_EO.className += " _On"; ATF_Content.grnDot_EO.className += " _On"; } ) ;  } , 200   ) ;
			win.setTimeout(   function() {  window.requestAnimationFrame( function() { ATF_Content.drOrDot_EO.className += " _On"; ATF_Content.bluDot_EO.className += " _On"; } ) ;  } , 300   ) ;

			win.setTimeout(   function() {  window.requestAnimationFrame( function() { ATF_Content.airTmStn_EO.className += " _On"; ATF_Content.siteURL_EO.className += " _On"; } ) ;  } , 500   ) ;
		} ;

		this.Animate_Intro() ;
	}
	function	Construct_SubElement_List ( ElemObjRef ) {

		var	_ELEM		= ElemObjRef ,

			tmpList		= _ELEM.getElementsByTagName("*") , tmpLen = tmpList.length , k ,

   			ELEM_LIST 	= [] ;


		for (  k = 0 ; k < tmpLen ; k++  )		ELEM_LIST.push( tmpList[k] ) ;


		return		ELEM_LIST ;
	}
})() ;