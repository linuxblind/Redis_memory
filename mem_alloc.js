if($(this).children(':first').find('.item').val() == 'string'){
                    var key_num = $(this).children().eq(1).find('input').val();
                    var key_len = $(this).children().eq(2).find('input').val();
                    var value_len = $(this).children().eq(5).find('input').val();
                    var size = (56 + key_len +  8 + value_len +1 )*key_num/1024/1024*1.2;
                }else if($(this).children(':first').find('.item').val() == 'list'){
                    var key_num = $(this).children().eq(1).find('input').val();
                    var key_len = $(this).children().eq(2).find('input').val();
                    var mem_num = $(this).children().eq(3).find('input').val();
                    var mem_len = $(this).children().eq(4).find('input').val();
                    var size = (56 + key_len + mem_num*(1 + 1 + mem_len))*key_num/1024/1024*1.2;
                }else if($(this).children(':first').find('.item').val() == 'hash'){
                    var key_num = $(this).children().eq(1).find('input').val();
                    var key_len = $(this).children().eq(2).find('input').val();
                    var mem_num = $(this).children().eq(3).find('input').val();
                    var mem_len = $(this).children().eq(4).find('input').val();
                    var value_len = $(this).children().eq(5).find('input').val();
                    var size = (56 + key_len + mem_num*(4 + 1 + mem_len + 1 + 1 + value_len))*key_num/1024/1024*1.2;
                }else if($(this).children(':first').find('.item').val() == 'set'){
                    var key_num = $(this).children().eq(1).find('input').val();
                    var key_len = $(this).children().eq(2).find('input').val();
                    var mem_num = $(this).children().eq(3).find('input').val();
                    var mem_len = $(this).children().eq(4).find('input').val();
                    var size = (56 + key_len + mem_num*(1 + 1 + mem_len))*key_num/1024/1024*1.2;

                }
                else if($(this).children(':first').find('.item').val() == 'zset'){
                    var key_num = $(this).children().eq(1).find('input').val();
                    var key_len = $(this).children().eq(2).find('input').val();
                    var mem_num = $(this).children().eq(3).find('input').val();
                    var mem_len = $(this).children().eq(4).find('input').val();
                    var value_len = $(this).children().eq(5).find('input').val();
                    var size = (56 + key_len + mem_num*(11 + value_len*(mem_len + 5)))*key_num/1024/1024*1.2;

                }
                total_size += size;
            });
            result = '所需内存:'+total_size.toFixed(3)+'M';
            $("#calSize").empty().append(result);
