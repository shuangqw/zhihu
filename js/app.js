$(function(){
	$('.top-nav-profile').mouseenter(function(){
		$('.top-nav-dropdown').show();
	});

	$('.top-nav-profile').mouseleave(function(){
		$('.top-nav-dropdown').hide();
	});

	$('.third').mouseenter(function(){
		$('.third-list').show();
	});

	$('.third').mouseleave(function(){
		$('.third-list').hide();
	});

	var click_current = function(){
		var $btn = $(this);
    
	     //若点击的控制按钮已经是当前按钮，不做处理
	     if($btn.hasClass('current')){ 
	       return;
	     }
	    
	     //移除原来高亮按钮的 current class
	     $btn.parent().find('.current').removeClass('current');
	    
	     //让当前按钮高亮
	     $btn.addClass('current');
	}

	$('.zu-top-nav-li').on('click',function(e){
		click_current.call(this);
		return false;
	});

	$('.zm-noti7-popup-tab-item').on('click',function(){
		click_current.call(this);
	})

	$('.top-nav-noti').on('click',function(){
		$('.tripple').toggle();
		$('.zu-top-nav-live-inner').toggle();
	});

	$('.feed-item').mouseenter(function(){
		$(this).find('.zu-autohide').show();
		$(this).find('.zm-item-meta .ignore').show();
		// $('.zu-autohide').show();
		// $('.zm-item-meta .ignore').show();
	});
	
	// $('.feed-item').mouseleave(function(){
	// 	$('.zu-autohide').hide();
	// });

	var zuauth = function(){
		$('.feed-item').on('mouseleave',function(){
			$('.zu-autohide').hide();
		});
	};

	zuauth();

// 	$('#sss').on('click', function(){
// 	/xxx
// 	});
// $('#sss').off('click');

	$('.zh-summary').on('click',function(e){
		var $parent = $(this).closest('.feed-main');
		$parent.find('.zm-editable-content').show();
		$parent.find('.zm-item-vote-info').show();
		$parent.find('.collapse').show();
		$parent.find('.zu-autohide').show();
		$parent.find('.zh-summary').hide();
		$parent.find('.feed-item').off('mouseleave');	
		$parent.find('.zm-item-vote').hide();
		$parent.find('.zm-votebar').show();
		return false;
	});

	$('.collapse').on('click',function(e){
		var $parent = $(this).closest('.feed-main');
		$parent.find('.zh-summary').show();
		$parent.find('.zm-editable-content').hide();
		$parent.find('.zm-item-vote-info').hide();
		$parent.find('.collapse').hide();
		$parent.find('.zu-autohide').hide();
		zuauth();
		$parent.find('.zm-item-vote').show();
		$parent.find('.zm-votebar').hide();
		return false;
	})

	$('.ignore').on('click',function(){
		var $parent = $(this).closest('.feed-item');
		$parent.find('.feed-item-inner').hide();
		$parent.find('.dislike-wrap').show();
	})

	$('.dislike-wrap .close').on('click',function(){
		var $parent = $(this).closest('.feed-item');
		$parent.find('.feed-item').hide();
	})


	$('.dislike-wrap .revert').on('click',function(){
		var $parent = $(this).closest('.feed-item');
		$parent.find('.feed-item-inner').show();
		$parent.find('.dislike-wrap').hide();
	})

	var click_active = function(){
		var $btn = $(this);
    
	     //若点击的控制按钮已经是当前按钮，不做处理
	     if($btn.hasClass('active')){ 
	       return;
	     }
	    
	     //移除原来高亮按钮的 active class
	     $btn.parent().find('.active').removeClass('active');
	    
	     //让当前按钮高亮
	     $btn.addClass('active');
	}

	$('.tab-nav').on('click',function(e){
		var $tab = $(this);
		$('.zm-tab-content').hide();
		$('#tb-webshare-'+$tab.data('role')+'-content').show();
		click_active.call(this);
		// var $parent = $(this).closest('.zh-webshare-dialog');

		// $parent.find('.zm-tab-content').toggle();

		return false;
	});

	$('.meta-item').on('click',function(){
		var $btn = $(this);
		if($btn.attr('name')==='share'){
			var st = $(window).scrollTop();

			$('<div>').css({
				background: 'rgba(0, 0, 0, .7)',
				position: 'fixed',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%'
			}).addClass('mask').appendTo('body');

			$('.modal-dialog').css({
				top: st + 30,
				left:'50%',
				'margin-left':$('.modal-dialog').width()/-2
			}).show();
		}
		return false;
	});

	var modal_cancel = function(){
		$('.modal-dialog').hide();
		$('.mask').hide();
	} 

	$('.modal-dialog-title-close').on('click',function(){
		modal_cancel();
	})

	$('.zm-command-cancel').on('click',function(e){
		modal_cancel();
		return false;
	})

	// $('[name=share]').on(‘click’,function(e){
	// 	$('modal-dialog').show();
	// })


	// $.ajax({
	// 	url: 'http://10.0.0.11:8000/follow',
	// 	type: 'get',
	// 	success: function(data){
	// 		//append data to DOM
	// 		$('.zh-scroller-inner').append(data.msg);

	// 		$('.zm-noti7-popup-empty').remove();
	// 	},
	// 	error: function(e){
	// 		alert('chucuola!');
	// 	}
	// });




})