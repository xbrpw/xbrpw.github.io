var host = 'https://artf.github.io/grapesjs/';
      var images = [
        host + 'img/grapesjs-logo.png',
        host + 'img/tmp-blocks.jpg',
        host + 'img/tmp-tgl-images.jpg',
        host + 'img/tmp-send-test.jpg',
        host + 'img/tmp-devices.jpg',
      ];

      // Set up GrapesJS editor with the Newsletter plugin
      var editor = grapesjs.init({
        height: '100%',
        storageManager:{
          id: 'gjs-nl-',
        },
        assetManager: {
          assets: images,
          upload: 0,
          uploadText: 'Uploading is not available in this demo',
        },
        container : '#gjs',
        fromElement: true,
        plugins: ['gjs-preset-newsletter'],
        pluginsOpts: {
          'gjs-preset-newsletter': {
            modalLabelImport: 'Paste all your code here below and click import',
            modalLabelExport: 'Copy the code and use it wherever you want',
            codeViewerTheme: 'material',
            //defaultTemplate: templateImport,
            importPlaceholder: '<table class="table"><tr><td class="cell">Hello world!</td></tr></table>',
            cellStyle: {
              'font-size': '12px',
              'font-weight': 300,
              'vertical-align': 'top',
              color: 'rgb(111, 119, 125)',
              margin: 0,
              padding: 0,
            }
          }
        }
      });


      // Let's add in this demo the possibility to test our newsletters
      var mdlClass = 'gjs-mdl-dialog-sm';
      var pnm = editor.Panels;
      var cmdm = editor.Commands;
      var testContainer = document.getElementById("test-form");
      var contentEl = testContainer.querySelector('input[name=body]');
      var md = editor.Modal;
      cmdm.add('send-test', {
        run(editor, sender) {
          sender.set('active', 0);
          var modalContent = md.getContentEl();
          var mdlDialog = document.querySelector('.gjs-mdl-dialog');
          var cmdGetCode = cmdm.get('gjs-get-inlined-html');
          contentEl.value = cmdGetCode && cmdGetCode.run(editor);
          mdlDialog.className += ' ' + mdlClass;
          testContainer.style.display = 'block';
          md.setTitle('Test your Newsletter');
          md.setContent('');
          md.setContent(testContainer);
          md.open();
          md.getModel().once('change:open', function() {
            mdlDialog.className = mdlDialog.className.replace(mdlClass, '');
            //clean status
          })
        }
      });
      pnm.addButton('options', {
        id: 'send-test',
        className: 'fa fa-paper-plane',
        command: 'send-test',
        attributes: {
          'title': 'Test Newsletter',
          'data-tooltip-pos': 'bottom',
        },
      });

      //fa fa-refresh
      var statusFormElC = document.querySelector('.form-status');
      var statusFormEl = document.querySelector('.form-status i');
      // var ajaxTest = ajaxable(testContainer).
      //   onStart(function(){
      //     statusFormEl.className = 'fa fa-refresh anim-spin';
      //     statusFormElC.style.opacity = '1';
      //     statusFormElC.className = 'form-status';
      //   })
      //   .onResponse(function(res){
      //     if (res.data) {
      //       statusFormElC.style.opacity = '0';
      //       statusFormEl.removeAttribute('data-tooltip');
      //       md.close();
      //     } else if(res.errors){
      //       statusFormEl.className = 'fa fa-exclamation-circle';
      //       statusFormEl.setAttribute('data-tooltip', res.errors);
      //       statusFormElC.className = 'form-status text-danger';
      //     }
      //   });

      // Add info command
      var infoContainer = document.getElementById("info-cont");
      cmdm.add('open-info', {
        run(editor, sender) {
          sender.set('active', 0);
          var mdlDialog = document.querySelector('.gjs-mdl-dialog');
          mdlDialog.className += ' ' + mdlClass;
          infoContainer.style.display = 'block';
          md.setTitle('About this demo');
          md.setContent('');
          md.setContent(infoContainer);
          md.open();
          md.getModel().once('change:open', function() {
            mdlDialog.className = mdlDialog.className.replace(mdlClass, '');
          })
        }
      });
      cmdm.add('tlb-edit', {
          run: function(ed) {
            alert('At the moment no image editor, maybe soon 😊');
          },
      });
      pnm.addButton('options', {
        id: 'view-info',
        className: 'fa fa-question-circle',
        command: 'open-info',
        attributes: {
          'title': 'About',
          'data-tooltip-pos': 'bottom',
        },
      });

      // Simple warn notifier
      // var origWarn = console.warn;
      // toastr.options = {
      //   closeButton: true,
      //   preventDuplicates: true,
      //   showDuration: 250,
      //   hideDuration: 150
      // };
      // console.warn = function (msg) {
      //   toastr.warning(msg);
      //   origWarn(msg);
      // };

      $(document).ready(function () {

        // Beautify tooltips
        $('*[title]').each(function () {
          var el = $(this);
          var title = el.attr('title').trim();
          if(!title)
            return;
          el.attr('data-tooltip', el.attr('title'));
          el.attr('title', '');
        });

      });