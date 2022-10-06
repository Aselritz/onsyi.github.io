
    document.getElementById("ybcari").addEventListener("click", function() {          
      var lokasi = "https://jgjk.mobi/act/search/"+ $("input[name='ycari']").val()
      window.location.replace(lokasi);
    });


    // When the user scrolls down 20px from the top of the document, recolor the header's background color
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("header2").style.backgroundColor = "rgb(0,182, 221, 7)";
      } else {
        document.getElementById("header2").style.backgroundColor = "rgb(0, 182, 221, 0)";
      }
    }



    var PersenKu = 1500;
    var url_produk = '';
    var halaman = 1;
    var aktifasi ='';
                 var data = {
                        url_produk : url_produk,
                        halaman : halaman,
                        aktifasi : aktifasi         
                    };
                    // 
                    $.ajax({
                        url: "https://onsyi.masuk.web.id/nobiflash.php",
                        type: "POST",
                        data: {
                          // q: '1',
                          aktifasi: aktifasi,
                          halaman: halaman
                        },
                        
                        // data: {data : data},
                        dataType:'JSON',    
                        success:function(data){
                              try { 
                             var xhtml = '';   
     
                        xhtml += '<div class="col" >';
                          data.forEach(function(element) {
    
    
    var hargaNormal;                    
                           hargaNormal =  element.Harga.substring(3,element.Harga.length);
                           hargaNormal = hargaNormal.replace(/,/g,'');
                          
                          var hargadiskon= Intl.NumberFormat().format(parseInt((hargaNormal * PersenKu) + parseInt(hargaNormal)));
    
                   xhtml += '<a href="https://jgjk.mobi/p/' + element.Gambar.substr(-17, 13) + '">'+'<div class="OnsyiCardo">';
                          
    xhtml += '<t class="OnsyLogo">Onsyi Design</t>';
    
    xhtml += '<txt class="OnsyiPromo">20% off</txt>';
    
    xhtml += '<txt class="stars bx-flashing"><i class="fa-solid fa-star" style="font-size: 13px;"></i> 4.8</txt>';
    
    xhtml += '<img  class="OnsyiImag" src="'+element.Gambar+'">';
    
    xhtml += '<div class="OnsyiText-Judu">'+element.Nama+'</div>';
    
    xhtml += '<div class="OnsyiText-Diskon"><del>Rp'+hargadiskon+'</del></div>';
    
    xhtml += '</br>';
    
    xhtml += '<div class="OnsyiText-Harg">'+element.Harga+'</div>';
    
                            xhtml += '</div>';
                            xhtml += '</div>';                      
                            
                          })
                            xhtml += '</div>';
                            xhtml += '</div>';                      
                           
     document.getElementById("prmo").innerHTML = xhtml;
    
                        }catch(err) {
                          alert('Terjadi Kesalahan. 01\n\n' + err.responseText);
                        }
                        },error:function(err){
                          alert('Terjadi Kesalahan. 02\n\n' + err.responseText);                     
                        }   });
    
 
    var url_produk = '#';
    var halaman = 2;
    // var page = 0;

    function get_data() {
      $.ajax({
        url: 'https://onsyi.masuk.web.id/nobi.php',
        data: {
          // q: '1',
          // page: page,
          halaman: halaman
        },
        method: 'POST',
        dataType: 'JSON',
        success: function(data) {
          try {
            var xhtml = '';
            data.forEach(function(element) {
            
               xhtml += '<div class="col">';             

               xhtml += '<a href="https://jgjk.mobi/p/' + element.Gambar.substr(-17, 13) + '">'+'<div class="OnsyiCard">';
    
xhtml += '<t class="OnsyLogo">Onsyi Design</t>';

xhtml += '<t class="OnsyiLabelSlideFloatFD">New</t>';

              xhtml += '<img class="OnsyiImage" src="' + element.Gambar + '">';

              xhtml += '<h6 class="OnsyiText-Judul">' + element.Nama + '</h6>';
              
              xhtml += '<b class="OnsyiText-Harga">🔥' + element.Harga + '</b>';

              xhtml += '</div>';
              xhtml += '</div>';
            });
            document.getElementById('malfood').innerHTML += xhtml;
          } catch (err) {
            alert('Terjadi Kesalahan. 01\n\n' + err.responseText);
          }
        },
        error: function(err) {
          alert('Terjadi Kesalahan. 02\n\n' + err.responseText);
        }
      });
      halaman++;
    }

    get_data();
 

