$(function(){
//        旋转效果
        var btn = document.querySelector('#btn')
        btn.addEventListener('click', function () {
            btn.setAttribute('class' , 'btn rotate btn-floating btn-large red')
            setTimeout(function () {
                btn.setAttribute('class', 'btn-floating btn-large red')
            }, 1000)
        })
        //全选显示删除
        $('#quan').change(function () {
            $(this).is(':checked') ? $('#del').show() : $('#del').hide()
        })
        // 步骤点击效果
        $(".btn-click").click(function(){
//      当前样式
            $(this).addClass("btn-clickstyleColor").parent().parent().prev().find('.btn-click').html('√');
            $(this).next('span').addClass("font-active").parent().parent().prev().find('span').removeClass('font-active');
        })
})