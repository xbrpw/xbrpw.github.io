/**
 * Drag&Drop Uploader v1.0
 * Copyright 2022 Denis Ivanov
 * Drag&Drop Uploader
 * @version 1.0
 * @author Denis Ivanov, Ukraine
 * @license The MIT License (MIT)
 */
!function ($) {
    $.fn.Dropbox_Upload = function (config) {
        const data_options = {
            server_max_error: 'Server limit',
            large_file: 'Large file',
            invalid_type: 'Invalid type file',
            max_file_limit: 'Max file limit',
            required: 'required',
            delete: {
                text: 'Deleting ...',
                title: 'Remove',
            }
        }
        const dropbox_uploader = {
            ajax_url: 'upload.php',
            ajax_nonce: false,
            drag_n_drop_upload: data_options,
            disable_btn: 'yes'
        }

        this.each(function () {
            let inputFile = $(this),
                options = $.extend({
                    handler: inputFile,
                    max_file: inputFile.data('max') ? inputFile.data('max') : 1,
                    max_upload_size: inputFile.data('limit') ? inputFile.data('limit') : '10485760',
                    supported_type: inputFile.data('type') ? inputFile.data('type') : 'jpg|jpeg|JPG|png|gif|pdf|doc|docx|ppt|pptx|odt|avi|ogg|m4a|mov|mp3|mp4|mpg|wav|wmv|xls',
                    on_success: function (input, progressBar, response) {
                        // Progressbar Object
                        console.log('success')
                        let progressDetails = $('#' + progressBar, input.parents('.form-dropbox'))

                        // Append value to hidden input field
                        progressDetails.find('.form-dropbox-details').append('<span><input type="hidden" name="' + input.attr('data-name') + '[]" value="' + response.data.path + '/' + response.data.file + '"></span>')

                        // Update counter
                        let files_counter = Number(localStorage.getItem(input.attr('name') + '_count_files')) - 1
                        $('.form-dropbox-counter span', input.parents('.form-dropbox')).text(files_counter)
                    }
                }, config),
                inputName = inputFile.attr('name') + '_count_files',
                form = options.handler.parents('form'),
                dropbox = options.handler.parents('.form-dropbox'),
                buttonSubmit = $('input[type=submit]', form)

            localStorage.setItem(inputName, '1')

            // Events
            dropbox.on('drag dragstart dragend dragover dragenter dragleave drop', function (event) {
                event.preventDefault()
                event.stopPropagation()
            })
            dropbox.on('dragover dragenter', function () {
                $(this).addClass('form-dropbox-dragover')
            })
            dropbox.on('dragleave dragend drop', function () {
                $(this).removeClass('form-dropbox-dragover')
            })

            $('a.form-upload-btn').on('click', function (event) {
                event.preventDefault()
                options.handler.val(null)
                options.handler.click()
            })

            dropbox.on('drop', function (event) {
                sendData(event.originalEvent.dataTransfer.files, 'drop')
            })

            options.handler.on('change', function () {
                sendData(this.files, 'click')
            })

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                inputFile.removeAttr('accept')
            }

            const sendData = function (uploadFields, event) {
                if (!(!uploadFields.length > 1)) {
                    let formData = new FormData

                    formData.append('size_limit', options.max_upload_size)
                    formData.append('action', 'dropbox_upload')
                    formData.append('type', event)
                    formData.append('security', dropbox_uploader.ajax_nonce)
                    formData.append('form_id', inputFile.attr('id'))
                    formData.append('upload_name', inputFile.attr('name'))

                    $('span.has-error', dropbox).remove()

                    $.each(uploadFields, function (file, fileData) {

                        // Max file limit
                        /!*if (localStorage.getItem(inputName) > options.max_file) {
                            if (void 0 !== formData.delete) {
                                formData.delete('upload-file')
                            }

                            if (!$('span.has-error', dropbox).length > 0) {
                                let err_msg = dropbox_uploader.drag_n_drop_upload.max_file_limit

                                dropbox.append('<span class="has-error">' + err_msg + ' <strong>' + options.max_file + '</strong></span>')
                            }

                            return false;
                        }*!/

                        if (void 0 !== formData.delete && formData.delete('upload-file'), localStorage.getItem(inputName) > options.max_file) {
                            return (!$('span.has-error', dropbox).length > 0 && ((err_msg = dropbox_uploader.drag_n_drop_upload.max_file_limit), dropbox.append('<span class="has-error">' + err_msg + ' <strong>' + options.max_file + '</strong></span>')), false)
                        }

                        let progressBar = details.createProgressBar(fileData),
                            error = false

                        /!*!// Max file size
                        if (fileData.size > options.max_upload_size) {
                            $('.form-file-name', $('#' + progressBar)).append('<span class="has-error"> <strong>' + dropbox_uploader.drag_n_drop_upload.large_file + '</strong></span>')
                            error = true
                        }

                        // Supported file type
                        const regex_type = new RegExp("(.*?).(" + options.supported_type + ")$")

                        if (error !== false || regex_type.test(fileData.name.toLowerCase())) {
                            $('.form-file-name', $('#' + progressBar)).append('<span class="has-error"> <strong>' + dropbox_uploader.drag_n_drop_upload.invalid_type + '</strong></span>')
                            error = true
                        }

                        if (error === false) {
                            localStorage.setItem(inputName, Number(localStorage.getItem(inputName)) + 1)
                        } else {
                            formData.append('upload-file', fileData);
                        }*!/

                        // Validate file max size + supported type file if true - ajax uploaded
                        if (fileData.size > options.max_upload_size && ($('.form-file-name', $('#' + progressBar)).append('<span class="has-error"> <strong>' + dropbox_uploader.drag_n_drop_upload.large_file + '</strong></span>'), (error = true)), regex_type = new RegExp("(.*?).(" + options.supported_type + ")$"), error !== false || regex_type.test(fileData.name.toLowerCase()) || ($('.form-file-name', $('#' + progressBar)).append('<span class="has-error"> <strong>' + dropbox_uploader.drag_n_drop_upload.invalid_type + '</strong></span>'), (error = true)), localStorage.setItem(inputName, Number(localStorage.getItem(inputName)) + 1), error === false) {
                            formData.append('upload-file', fileData);

                            $.ajax({
                                url: options.ajax_url,
                                type: form.attr('method'),
                                data: formData,
                                dataType: 'json',
                                cache: false,
                                contentType: false,
                                processData: false,
                                xhr: function () {
                                    let request = new window.XMLHttpRequest;

                                    return request.upload.addEventListener('progress', function (event) {
                                        if (event.lengthComputable) {
                                            console.log(event.loaded)
                                            let loading = event.loaded / event.total,
                                                loadingPercent = parseInt(100 * loading)

                                            details.setProgressBar(progressBar, loadingPercent - 1)
                                        }
                                    }, false), event
                                },
                                complete: function () {
                                    details.setProgressBar(progressBar, 100)
                                },
                                /!*success: function (file) {
                                    if (file.success) {
                                        (details.setProgressBar(progressBar, 100),
                                        $.isFunction(options.on_success) && options.on_success.call(this, loadingPercent, progressBar, file))
                                    } else {
                                        $('.dnd-progress-bar', $('#' + progressBar)).remove()
                                        $('.dnd-upload-details', $('#' + progressBar)).append('<span class="has-error">' + file.data + '</span>')
                                        $('input[type=submit]', form).removeClass('disabled').prop('disabled', false)
                                        $('#' + progressBar).removeClass('in-progress')
                                    }
                                },
                                error: function (file, loadingPercent, inputDataName) {
                                    $('.dnd-progress-bar', $('#' + progressBar)).remove()
                                    $('.dnd-upload-details', $("#" + progressBar)).append('<span class="has-error">' + options.server_max_error + '</span>')
                                    $('input[type=submit]', form).removeClass('disabled').prop('disabled', false)
                                    $('#' + progressBar).removeClass('in-progress')
                                }*!/
                            })
                        }


                    })
                }

            };

            const details = {

                /!**
                 * Create Progress Bar
                 *
                 * @param {Object} fileData
                 * @returns {string} Full file information
                 *!/
                createProgressBar: function (fileData) {
                    let fileDetailsId = 'form-file-' + Math.random().toString(36).substr(2, 9),
                        fileDetailsInner = '<div class="form-file-name">' +
                            '<span>' + fileData.name + '</span> <strong>(' + details.bytesToSize(fileData.size) + ')</strong>' +
                            '</div>' +
                            '<a href="javascript:void(0)" class="form-remove-file" data-storage="' + inputName + '" aria-label="Remove file">' +
                            '<span class="form-icon-remove"></span>' +
                            '</a>' +
                            '<div class="form-progress"></div>' +
                            '<div class="form-progress-bar"><span class="form-progress-bar-progress"></span></div>';

                    return $('.form-dropbox-button').after('<div id="' + fileDetailsId + '" class="form-dropbox-details">' + fileDetailsInner + '</div>'), fileDetailsId
                },

                /!**
                 * Set Progress Bar
                 *
                 * @param {string} progressBarId
                 * @param {number} progressLoading
                 * @returns {false} Full file information, false
                 *!/
                setProgressBar: function (progressBarId, progressLoading) {
                    let currentProgressBar = $('#' + progressBarId),
                        progress = $('.form-progress-bar', currentProgressBar),
                        progressText = $('.form-progress', currentProgressBar);

                    if (progress.length > 0) {
                        let progress_width = progressLoading * progress.width() / 100

                        details.disableBtn(buttonSubmit)
                        currentProgressBar.addClass('in-progress')

                        if (progressLoading === 100) {
                            $('span', progress).width('100%')
                            progressText.text(progressLoading + '% ')
                            currentProgressBar.addClass('complete').removeClass('in-progress')
                        } else {
                            $('span', progress).animate({width: progress_width}, 10)
                            progressText.text(progressLoading + '% ')
                        }

                        return false
                    }

                    /!*return progress.length > 0 && (details.disableBtn(buttonSubmit),
                        progress_width = progressLoading * progress.width() / 100,
                        currentProgressBar.addClass('in-progress'),
                        100 === progressLoading ?
                            ($('span', progress).width('100%'), progressText.text(progressLoading + '% ')) :
                            ($('span', progress).animate({width: progress_width}, 10), progressText.text(progressLoading + '% ')),
                    100 === progressLoading && currentProgressBar.addClass('complete').removeClass('in-progress')),
                        false*!/
                },

                /!**
                 * File size (KB, MB)
                 *
                 * @param {number} bytes
                 * @returns {string} Current file size
                 *!/
                bytesToSize: function (bytes) {
                    let fileSize,
                        kBytes = bytes / 1024;

                    if (0 === bytes) {
                        fileSize = '0'
                    } else if (kBytes <= 1024) {
                        fileSize = kBytes.toFixed(2) + 'KB'
                    } else {
                        fileSize = (kBytes / 1024).toFixed(2) + 'MB'
                    }

                    return fileSize
                },

                /!**
                 * Disable button submit before uploading file
                 *
                 * @param {jQuery} buttonSubmit
                 *!/
                disableBtn: function (buttonSubmit) {
                    if (buttonSubmit.length > 0) {
                        buttonSubmit.addClass('btn-disable').prop('disabled', true)
                    }
                }
            }
        })

        /!**
         * Button remove file
         *!/
        $(document).on('click', '.form-icon-remove', function (d) {
            let removeFile = $(this),
                dropboxDetails = removeFile.parents('.form-dropbox-details'),
                dropbox = removeFile.parents('.dropbox'),
                dataStorage = removeFile.parent('a').attr('data-storage'),
                dataStorageValue = Number(localStorage.getItem(dataStorage));

            if (dropboxDetails.hasClass('in-progress')) return false

            if ($('.has-error', dropbox).length > 0) {
                return dropboxDetails.remove(), localStorage.setItem(dataStorage, dataStorageValue - 1), false
            }

            removeFile.addClass('deleting').text(dropbox_uploader.drag_n_drop_upload.delete.text);

            let ajaxDelete = {
                path: dropboxDetails.find('input[type=hidden]').val(),
                action: 'dropbox_upload_delete',
                security: dropbox_uploader.ajax_nonce
            };

            $.post(config.ajax_url, ajaxDelete, function (event) {
                event.success && (dropboxDetails.remove(),
                    localStorage.setItem(dataStorage, dataStorageValue - 1),
                $('.form-dropbox-details', dropbox).length <= 1 && $('span.has-error', dropbox).remove(),
                    $('.form-dropbox-counter span', dropbox).text(Number(localStorage.getItem(dataStorage)) - 1))
            })

            $('span.has-error').remove()
        })
    }

    $('.form-control-file').Dropbox_Upload({});
}(jQuery);