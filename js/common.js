$(function(){
<<<<<<< HEAD
=======
//        $(".red1").hover(function(){
//            $(".tab_info").removeClass("hide")
//        })
>>>>>>> b420461952ec74957886b7acce50a3da79f8cb92
//        旋转效果
        var btn = document.querySelector('#btn')
        btn.addEventListener('click', function () {
            btn.setAttribute('class' , 'btn rotate btn-floating btn-large red')
            setTimeout(function () {
                btn.setAttribute('class', 'btn-floating btn-large red')
            }, 1000)
        })
<<<<<<< HEAD
        //全选显示删除
        $('#quan').change(function () {
            $(this).is(':checked') ? $('#del').show() : $('#del').hide()
        })
        // 步骤点击效果
        $(".btn-click").click(function(){
//      当前样式
            $(this).addClass("btn-clickstyleColor").parent().parent().prev().find('.btn-click').html('√');
            $(this).next('span').addClass("font-active").parent().parent().prev().find('span').removeClass('font-active');
=======

        // 步骤点击效果
        $(".btn-click").click(function(){
//            当前样式
            $(this).addClass("btn-clickstyleColor")
            $(this).next('span').addClass("font-active");
////            选中状态
//            $(this).html("")
//            $(this).addClass("waves-effect waves-light btn  btn-click btn-clickstyle");
////            选中过后文字变灰
//            $(this).next('span').addClass("font-active");
//            $(this).parent().parent().siblings().find('span').removeClass("font-active")
>>>>>>> b420461952ec74957886b7acce50a3da79f8cb92
        })
})