$(document).ready(function(){var t=$(".numeric");t.keydown(function(t){-1!==$.inArray(t.keyCode,[46,8,9,27,13,110])||65===t.keyCode&&(t.metaKey||t.ctrlKey)===!0||t.keyCode>=35&&t.keyCode<=39||(t.shiftKey||t.keyCode<48||t.keyCode>57)&&(t.keyCode<96||t.keyCode>105)&&t.preventDefault()}),t.keyup(function(){$(this).val()>255&&$(this).val(255),parseInt($(this).val().length,10)===parseInt($(this).attr("maxlength"),10)&&$(this).next(":input").focus()}),t.on("click",function(){event.stopPropagation(),"255"===$(this).val()&&$(this).val("")}),t.on("blur",function(){var t=$("#rgbValues"),e=parseInt(t.find("input[name=rgb_1]").val(),10).toString(16),n=parseInt(t.find("input[name=rgb_2]").val(),10).toString(16),a=parseInt(t.find("input[name=rgb_3]").val(),10).toString(16);e=1===e.length?"0"+e:e,n=1===n.length?"0"+n:n,a=1===a.length?"0"+a:a;var i="#"+e+n+a;$("#hexValue").html(i),$("#colorSample").css("background-color",i),$("body,html").css("background",i)}),$(this).click(function(){$(".numeric").each(function(){var t=$(this).val();t||$(this).val(255)})})});