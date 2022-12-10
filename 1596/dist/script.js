const notesWrapper = document.getElementById("notes-wrapper");
const title = document.getElementById("title");
const content = document.getElementById("content");
const error = document.getElementById("form-error");

let notesData = [];

const createNote = (uid, title, text, date) => {
  const note = document.createElement("div");
  note.className = "note";
  note.id = uid;
  note.innerHTML = `
    <div class="note-title">${title}</div>
    <div class="note-controls">
      <button class="note-edit" onclick="editNote(${uid})">
        Edit
      </button>
      <button class="note-save" style="display:none" onclick="saveNote(${uid})">
        Save
      </button>
      
      
      
    
      <form method="post" action="https://api.sheetmonkey.io/form/bP1QnMRHoMXHf5dALPRLRr " autoComplete="on" >
      <button type="submit" class="note-publish ">Publicar</button><div >
      <div ><div >
        <div class="sm-field sm-field-text sm-field--large"><label  for="sm-field-C8pNwqGo5U" style="display:none">Sección   </label>
          <input type="text" class="sm-field__input sm-field__input--text" id="sm-field-C8pNwqGo5U" name="seccion" placeholder="${text}" value="${text}" style="display:none"/></div></div></div>


          <div ><div ><div class="sm-field sm-field-text sm-field--large">
            <label  for="sm-field-1yFFJ9Fntb" style="display:none">URL   </label>
            <input type="text" class="sm-field__input sm-field__input--text" id="sm-field-1yFFJ9Fntb" name="url"/ placeholder="${title}" value="${title}" style="display:none"></div></div></div>
            <div ><div ><div class="sm-field sm-field-text sm-field--large">
              <label  for="sm-field-1QSbQPrpRB" style="display:none">Detalles   </label>
              <input type="text" class="sm-field__input sm-field__input--text" id="sm-field-1QSbQPrpRB" name="detalles" placeholder="${date}" value="${date}"/ style="display:none"></div></div></div>
              
              <div ></div><div >
             </div>
            </div>
          
     
            
    <link rel="stylesheet" href="data:text/css;base64,Cjpyb290IHsKICAtLXNtLWZvbnQtc2l6ZS1zbWFsbDogOTAlOwogIC0tc20tZm9udC1zaXplLXJlZ3VsYXI6IDEwMCU7CiAgLS1zbS1mb250LXNpemUtbGFyZ2U6IDEyMCU7CiAgLS1zbS1ib3JkZXItY29sb3Itbm9ybWFsOiByZ2JhKDAsIDAsIDAsIDAuMSk7CiAgLS1zbS1idG4tYmctY29sb3I6IGJsYWNrOwogIC0tc20tYnV0dG9uLWNvbG9yOiB3aGl0ZTsKICAtLXNtLXRleHQtY29sb3Itbm9ybWFsOiAjMDAwOwogIC0tc20tdGV4dC1jb2xvci1saWdodDogaHNsKDAsIDAlLCA2MCUpOwogIC0tc20tZmllbGQtYmctY29sb3I6ICNmZmY7CiAgLS1zbS1hY2NlbnQtY29sb3I6ICNGRUQzNEQ7CiAgLS1zbS1pbnZhbGlkLWJnLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4wNSk7CiAgLS1zbS14LXNtYWxsLW1hcmdpbjogNXB4OwogIC0tc20tc21hbGwtbWFyZ2luOiAxMHB4OwogIC0tc20tbWVkaXVtLW1hcmdpbjogMjBweDsKICAtLXNtLWxhcmdlLW1hcmdpbjogMzBweDsKICAtLXNtLXgtbGFyZ2UtbWFyZ2luOiA2MHB4OwogIC0tc20tbGFyZ2UtbmVnYXRpdmUtbWFyZ2luOiAtMzBweDsKICAtLXNtLXgtbGFyZ2UtbmVnYXRpdmUtbWFyZ2luOiAtNjBweDsKICAtLXNtLWlucHV0LXdpZHRoLXNtYWxsOiAzMCU7CiAgLS1zbS1pbnB1dC13aWR0aC1tZWRpdW06IDUwJTsKICAtLXNtLWlucHV0LXdpZHRoLWxhcmdlOiBhdXRvOwp9CgpAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7Cgkuc21fX2Zvcm0gewogICAgLS1zbS1ib3JkZXItY29sb3Itbm9ybWFsOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7CiAgICAtLXNtLWJ0bi1iZy1jb2xvcjogd2hpdGU7CiAgICAtLXNtLXRleHQtY29sb3Itbm9ybWFsOiAjZmZmOwogICAgLS1zbS10ZXh0LWNvbG9yLWxpZ2h0OiByZ2JhKDI1NSwyNTUsMjU1LCAwLjUpOwogICAgLS1zbS1idXR0b24tY29sb3I6ICMyMTIxMjQ7CiAgICAtLXNtLWZpZWxkLWJnLWNvbG9yOiAjMjEyMTI0OwogICAgLS1zbS1saW5rLWNvbG9yOiAjRkVEMzREOwogICAgLS1zbS1pbnZhbGlkLWJnLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTsKICB9CiAgLnNtX19mb3JtIC5zbS1maWVsZF9faW5wdXQgewogICAgYm9yZGVyOiAxcHggc29saWQgIzdjN2M3YyAhaW1wb3J0YW50OwogIH0KICAuc21fX2Zvcm0gLnNtLWZpZWxkX19zZWxlY3QgewogICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0NzdmclMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUyMHdpZHRoJTNEJTIyMjkyLjQlMjIlMjBoZWlnaHQlM0QlMjIyOTIuNCUyMiUzRSUzQ3BhdGglMjBmaWxsJTNEJTIyd2hpdGUlMjIlMjBkJTNEJTIyTTI4NyUyMDY5LjRhMTcuNiUyMDE3LjYlMjAwJTIwMCUyMDAtMTMtNS40SDE4LjRjLTUlMjAwLTkuMyUyMDEuOC0xMi45JTIwNS40QTE3LjYlMjAxNy42JTIwMCUyMDAlMjAwJTIwMCUyMDgyLjJjMCUyMDUlMjAxLjglMjA5LjMlMjA1LjQlMjAxMi45bDEyOCUyMDEyNy45YzMuNiUyMDMuNiUyMDcuOCUyMDUuNCUyMDEyLjglMjA1LjRzOS4yLTEuOCUyMDEyLjgtNS40TDI4NyUyMDk1YzMuNS0zLjUlMjA1LjQtNy44JTIwNS40LTEyLjglMjAwLTUtMS45LTkuMi01LjUtMTIuOHolMjIlMkYlM0UlM0MlMkZzdmclM0UnKSwKICAgICAgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgwLDAsMCwgMC43KSAwJSxyZ2JhKDAsMCwwLCAwLjgpIDEwMCUpICFpbXBvcnRhbnQ7CiAgfQogIAp9CgpAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7CiAgOnJvb3QgewogICAgLS14LXNtYWxsLW1hcmdpbjogM3B4OwogICAgLS1zbWFsbC1tYXJnaW46IDZweDsKICAgIC0tbWVkaXVtLW1hcmdpbjogMTJweDsKICAgIC0tbGFyZ2UtbWFyZ2luOiAyNHB4OwogICAgLS14LWxhcmdlLW1hcmdpbjogNDhweDsKICAgIC0tbGFyZ2UtbmVnYXRpdmUtbWFyZ2luOiAtMjRweDsKICAgIC0teC1sYXJnZS1uZWdhdGl2ZS1tYXJnaW46IC00OHB4OwogIH0KfQoKLnNtX19mb3JtIHsKICBmb250LWZhbWlseTogIlJvYm90byIsIHNhbnMtc2VyaWY7CiAgZm9udC1zaXplOiAxNHB4OwogIGxpbmUtaGVpZ2h0OiAyMHB4Owp9Cgouc20tZm9ybS1pY29uIHsKICBtYXgtaGVpZ2h0OiA1MHB4OwogIG1hcmdpbi1sZWZ0OiB2YXIoLS1zbS1zbWFsbC1tYXJnaW4pOwogIG1hcmdpbi10b3A6IHZhcigtLXNtLW1lZGl1bS1tYXJnaW4pOwp9Cgouc20tZm9ybS1pY29uLS1oYXMtaGVhZGVyIHsKICBtYXJnaW4tdG9wOiAtMjVweDsKfQoKLnNtLWZvcm0tYmFubmVyIHsKICBoZWlnaHQ6IDE0MHB4OwogIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7CiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsKICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7Cn0KCi5zbS1mb3JtLXRpdGxlIHsKICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc20tYm9yZGVyLWNvbG9yLW5vcm1hbCk7CiAgcGFkZGluZy1ib3R0b206IHZhcigtLXNtLXNtYWxsLW1hcmdpbik7CiAgbWFyZ2luOiB2YXIoLS1zbS1zbWFsbC1tYXJnaW4pOwp9Cgouc20tZm9ybS10aXRsZV9faGVhZGVyIHsKICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zbS14LXNtYWxsLW1hcmdpbik7CiAgY29sb3I6IHZhcigtLXNtLXRleHQtY29sb3Itbm9ybWFsKTsKfQoKLnNtLWZvcm0tdGl0bGVfX2luZm8gewogIGNvbG9yOiB2YXIoLS1zbS10ZXh0LWNvbG9yLWxpZ2h0KTsKICBtYXJnaW4tdG9wOiB2YXIoLS1zbS14LXNtYWxsLW1hcmdpbik7CiAgbWFyZ2luLWJvdHRvbTogMDsKfQoKLnNtLWZpZWxkX193cmFwcGVyIHsKICBwYWRkaW5nOiB2YXIoLS1zbS1zbWFsbC1tYXJnaW4pOwp9Cgouc20tZmllbGRfX3dyYXBwZXI6Zmlyc3Qtb2YtdHlwZSB7CiAgcGFkZGluZy10b3A6IHZhcigtLXNtLWxhcmdlLW1hcmdpbik7Cn0KCi5zbS1maWVsZCB7CiAgZGlzcGxheTogZmxleDsKICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOwogIGJveC1zaXppbmc6IGJvcmRlci1ib3g7Cn0KCi5zbS1maWVsZCBsYWJlbCB7CiAgY29sb3I6IHZhcigtLXNtLXRleHQtY29sb3Itbm9ybWFsKTsgIAp9Cgouc20tZmllbGQtLXNtYWxsIHsKICB3aWR0aDogdmFyKC0tc20taW5wdXQtd2lkdGgtc21hbGwpOwp9Cgouc20tZmllbGQtLW1lZGl1bSB7CiAgd2lkdGg6IHZhcigtLXNtLWlucHV0LXdpZHRoLW1lZGl1bSk7Cn0KCi5zbS1maWVsZC0tbGFyZ2UgewogIHdpZHRoOiB2YXIoLS1zbS1pbnB1dC13aWR0aC1sYXJnZSk7Cn0KCi5zbS1maWVsZC0tbGFyZ2Ugc2VsZWN0IHsKICB3aWR0aDogMTAwJTsKfQoKLnNtLWZpZWxkX19sYWJlbCB7CiAgbWFyZ2luLWJvdHRvbTogdmFyKC0tc20teC1zbWFsbC1tYXJnaW4pOwogIGNvbG9yOiB2YXIoIC0tc20tdGV4dC1jb2xvci1ub3JtYWwpOwogIGZvbnQtd2VpZ2h0OiA1MDA7Cn0KCi5zbS1maWVsZF9faW5wdXQgewogIGFsbDogdW5zZXQ7CiAgcGFkZGluZzogdmFyKC0tc20tc21hbGwtbWFyZ2luKTsKICBib3JkZXItdG9wOiAxcHggc29saWQgIzdjN2M3YzsKICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjM2MzYzM7CiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2MzYzNjMzsKICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDsKICBiYWNrZ3JvdW5kOiB2YXIoLS1zbS1maWVsZC1iZy1jb2xvcik7CiAgYm9yZGVyLXJhZGl1czogNXB4OwogIGNvbG9yOiB2YXIoLS1zbS10ZXh0LWNvbG9yLW5vcm1hbCk7CiAgZm9udC1zaXplOiAxNnB4Owp9Cgouc20tZmllbGRfX2lucHV0OmZvY3VzOmludmFsaWQgewogIGJveC1zaGFkb3c6IGluc2V0IDAgMCAzcHggcmdiKDI1NSAwIDApOwogIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNtLWludmFsaWQtYmctY29sb3IpOwp9Cgouc20tZmllbGRfX3NlbGVjdCB7CiAgYWxsOiB1bnNldDsKICBmb250LXNpemU6IDE2cHg7CiAgcGFkZGluZzogdmFyKC0tc20tc21hbGwtbWFyZ2luKTsKICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zbS1sYXJnZS1tYXJnaW4pOwogIGJvcmRlcjogMXB4IHNvbGlkICM3YzdjN2M7CiAgYm94LXNoYWRvdzogMCAxcHggMCAxcHggcmdiYSgwLDAsMCwuMDQpOwogIGJhY2tncm91bmQ6IHZhcigtLXNtLWJ0bi1iZy1jb2xvcik7CiAgYm9yZGVyLXJhZGl1czogNXB4OwogIGFwcGVhcmFuY2U6IG5vbmU7CiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD1VUy1BU0NJSSwlM0NzdmclMjB4bWxucyUzRCUyMmh0dHAlM0ElMkYlMkZ3d3cudzMub3JnJTJGMjAwMCUyRnN2ZyUyMiUyMHdpZHRoJTNEJTIyMjkyLjQlMjIlMjBoZWlnaHQlM0QlMjIyOTIuNCUyMiUzRSUzQ3BhdGglMjBmaWxsJTNEJTIydmFyKC0tc20tdGV4dC1jb2xvci1ub3JtYWwpJTIyJTIwZCUzRCUyMk0yODclMjA2OS40YTE3LjYlMjAxNy42JTIwMCUyMDAlMjAwLTEzLTUuNEgxOC40Yy01JTIwMC05LjMlMjAxLjgtMTIuOSUyMDUuNEExNy42JTIwMTcuNiUyMDAlMjAwJTIwMCUyMDAlMjA4Mi4yYzAlMjA1JTIwMS44JTIwOS4zJTIwNS40JTIwMTIuOWwxMjglMjAxMjcuOWMzLjYlMjAzLjYlMjA3LjglMjA1LjQlMjAxMi44JTIwNS40czkuMi0xLjglMjAxMi44LTUuNEwyODclMjA5NWMzLjUtMy41JTIwNS40LTcuOCUyMDUuNC0xMi44JTIwMC01LTEuOS05LjItNS41LTEyLjh6JTIyJTJGJTNFJTNDJTJGc3ZnJTNFJyksCiAgbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI2ZmZmZmZiAwJSwjZTVlNWU1IDEwMCUpOwogIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQsIHJlcGVhdDsKICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiByaWdodCAuN2VtIHRvcCA1MCUsIDAgMDsKICBiYWNrZ3JvdW5kLXNpemU6IC42NWVtIGF1dG8sIDEwMCU7CiAgYm94LXNpemluZzogYm9yZGVyLWJveDsKICB3aWR0aDogMTAwJTsKICBjb2xvcjogdmFyKC0tc20tdGV4dC1jb2xvci1ub3JtYWwpOwp9Cgouc20tZmllbGRfX2lucHV0OjpwbGFjZWhvbGRlciB7CiAgY29sb3I6IHZhcigtLXNtLXRleHQtY29sb3ItbGlnaHQpOwp9Cgouc20tZmllbGRfX2lucHV0LnNtLWZpZWxkX19pbnB1dC0tdGV4dCwKLnNtLWZpZWxkX19pbnB1dC5zbS1maWVsZF9faW5wdXQtLXRleHRhcmVhIHsKICBjdXJzb3I6IHRleHQ7Cn0KCi5zbS1maWVsZF9faW5wdXQuc20tZmllbGRfX2lucHV0LS10ZXh0YXJlYSB7CiAgcmVzaXplOiB2ZXJ0aWNhbDsKICBtaW4taGVpZ2h0OiA2MHB4Owp9Cgouc20tZmllbGRfX2lucHV0LS1maWxlIHsKICBtYXJnaW4tdG9wOiB2YXIoLS1zbS14LXNtYWxsLW1hcmdpbik7Cn0KCi5zbS1jaG9pY2UtbGlzdF9fY2hvaWNlIHsKICBkaXNwbGF5OiBmbGV4OwogIGZsZXgtZGlyZWN0aW9uOiByb3c7CiAgYWxpZ24taXRlbXM6IGNlbnRlcjsKICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zbS14LXNtYWxsLW1hcmdpbik7Cn0KCi5zbS1jaG9pY2UtbGlzdF9fY2hvaWNlIGlucHV0IHsKICBtYXJnaW4tcmlnaHQ6IHZhcigtLXNtLXgtc21hbGwtbWFyZ2luKTsKfQoKLnNtLWZpZWxkX19pbmZvIHsKICBjb2xvcjogdmFyKC0tc20tdGV4dC1jb2xvci1saWdodCk7CiAgZm9udC1zaXplOiB2YXIoLS1zbS1mb250LXNpemUtc21hbGwpOwp9Cgouc20tc2VjdGlvbi1icmVhayB7CiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLXNtLWJvcmRlci1jb2xvci1ub3JtYWwpOwp9Cgouc20tc2VjdGlvbi1icmVha19faGVhZGVyIHsKICBtYXJnaW4tYm90dG9tOiB2YXIoLS1zbS14LXNtYWxsLW1hcmdpbik7CiAgY29sb3I6IHZhcigtLXNtLXRleHQtY29sb3Itbm9ybWFsKTsKICBmb250LXdlaWdodDogNTAwOwp9Cgouc20tc2VjdGlvbi1icmVha19faW5mbyB7CiAgbWFyZ2luLXRvcDogMDsKICBjb2xvcjogdmFyKC0tc20tdGV4dC1jb2xvci1saWdodCk7Cn0KCi5zbS1hY3Rpb25zX19jb250YWluZXIgewogIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1zbS1ib3JkZXItY29sb3Itbm9ybWFsKTsKICBtYXJnaW46IHZhcigtLXNtLXNtYWxsLW1hcmdpbik7CiAgcGFkZGluZy10b3A6IHZhcigtLXNtLW1lZGl1bS1tYXJnaW4pOwp9Cgouc20tYnJhbmRpbmctZm9vdGVyIHsKICBtYXJnaW46IHZhcigtLXNtLXNtYWxsLW1hcmdpbik7CiAgcGFkZGluZy10b3A6IHZhcigtLXNtLXNtYWxsLW1hcmdpbik7CiAgcGFkZGluZy1ib3R0b206IHZhcigtLXNtLW1lZGl1bS1tYXJnaW4pOwogIGZvbnQtc2l6ZTogOTAlOwp9Cgouc20tYnJhbmRpbmctZm9vdGVyIGEgewogIHRleHQtZGVjb3JhdGlvbjogbm9uZTsKICBjb2xvcjogdmFyKC0tc20tbGluay1jb2xvcik7Cn0KCi5zbS1idG4gewogIGJhY2tncm91bmQ6IHZhcigtLXNtLWJvcmRlci1jb2xvci1ub3JtYWwpOwogIGJvcmRlcjogMDsKICBib3JkZXItcmFkaXVzOiA2cHg7CiAgcGFkZGluZzogdmFyKC0tc20tc21hbGwtbWFyZ2luKSB2YXIoLS1zbS1tZWRpdW0tbWFyZ2luKTsKICBmb250LXNpemU6IDEyMCU7CiAgZm9udC13ZWlnaHQ6IDYwMDsKICBjdXJzb3I6IHBvaW50ZXI7Cn0KCi5zbS1idG4tLXByaW1hcnkgewogIGJhY2tncm91bmQ6IHZhcigtLXNtLXRleHQtY29sb3Itbm9ybWFsKTsKICBjb2xvcjogdmFyKC0tc20tYnV0dG9uLWNvbG9yKTsKfQoKLnNtLWJ0bjpob3ZlciB7CiAgYm94LXNoYWRvdzogMCAwIDZweCAtMXB4IHZhcigtLXNtLWFjY2VudC1jb2xvcik7Cn0KCi5zbS1maWVsZF9fZ3JvdXAgewogIGRpc3BsYXk6IGZsZXg7CiAgZmxleC1kaXJlY3Rpb246IHJvdzsKfQoKLnNtLWZpZWxkX19ncm91cC1pdGVtIHsKICBkaXNwbGF5OiBmbGV4OwogIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47CiAgbWFyZ2luLXJpZ2h0OiB2YXIoLS1zbS1zbWFsbC1tYXJnaW4pOwp9Cgouc20tZmllbGRfX2dyb3VwLWl0ZW06bGFzdC1vZi10eXBlIHsKICBtYXJnaW4tcmlnaHQ6IDA7Cn0KCi5zbS1maWVsZF9faXRlbS1pbmZvIHsKICBjb2xvcjogdmFyKC0tc20tdGV4dC1jb2xvci1saWdodCk7CiAgZm9udC1zaXplOiB2YXIoLS1zbS1mb250LXNpemUtc21hbGwpOwp9Cgouc20tZmllbGRfX2dyb3VwLWl0ZW0gewogIGZsZXg6IDE7Cn0KCgouc20tZmllbGQtLW5hbWUuc20tZmllbGQtLWxhcmdlIC5zbS1maWVsZF9fZ3JvdXAtaXRlbTpmaXJzdC1vZi10eXBlIHsKICBmbGV4OiAwOwp9Cgouc20tZmllbGQtLW5hbWUuc20tZmllbGQtLWxhcmdlICAuc20tZmllbGRfX2dyb3VwLWl0ZW06bGFzdC1vZi10eXBlIHsKICBmbGV4OiAxOwp9Cgouc20tZmllbGQtLW5hbWUuc20tZmllbGQtLXNtYWxsIC5zbS1maWVsZF9fZ3JvdXAsCi5zbS1maWVsZC0tbmFtZS5zbS1maWVsZC0tbWVkaXVtIC5zbS1maWVsZF9fZ3JvdXAgewogIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Cn0KCi5zbS1maWVsZC0tbmFtZS5zbS1maWVsZC0tc21hbGwgLnNtLWZpZWxkX19ncm91cC1pdGVtLAouc20tZmllbGQtLW5hbWUuc20tZmllbGQtLW1lZGl1bSAuc20tZmllbGRfX2dyb3VwLWl0ZW0gewogIG1hcmdpbi1ib3R0b206IHZhcigtLXNtLXNtYWxsLW1hcmdpbik7CiAgbWFyZ2luLXJpZ2h0OiAwOwp9Cgouc20tZmllbGQtLW5hbWUuc20tZmllbGQtLXNtYWxsIC5zbS1maWVsZF9fZ3JvdXAtaXRlbTpsYXN0LW9mLXR5cGUsCi5zbS1maWVsZC0tbmFtZS5zbS1maWVsZC0tbWVkaXVtIC5zbS1maWVsZF9fZ3JvdXAtaXRlbTpsYXN0LW9mLXR5cGUgIHsKICBtYXJnaW4tYm90dG9tOiAwOwp9Cgouc20tZmllbGQtLWFkZHJlc3Muc20tZmllbGQtLXNtYWxsIC5zbS1maWVsZF9fZ3JvdXAsCi5zbS1maWVsZC0tYWRkcmVzcy5zbS1maWVsZC0tbWVkaXVtIC5zbS1maWVsZF9fZ3JvdXAgewogIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47Cn0KCi5zbS1maWVsZC0tYWRkcmVzcy5zbS1maWVsZC0tc21hbGwgLnNtLWZpZWxkX19ncm91cC1pdGVtLAouc20tZmllbGQtLWFkZHJlc3Muc20tZmllbGQtLW1lZGl1bSAuc20tZmllbGRfX2dyb3VwLWl0ZW0gewogIG1hcmdpbi1ib3R0b206IHZhcigtLXNtLXNtYWxsLW1hcmdpbik7CiAgbWFyZ2luLXJpZ2h0OiAwOwp9Cgouc20tZmllbGQtLWFkZHJlc3Muc20tZmllbGQtLXNtYWxsIC5zbS1maWVsZF9fZ3JvdXAtaXRlbTpsYXN0LW9mLXR5cGUsCi5zbS1maWVsZC0tYWRkcmVzcy5zbS1maWVsZC0tbWVkaXVtIC5zbS1maWVsZF9fZ3JvdXAtaXRlbTpsYXN0LW9mLXR5cGUsCi5zbS1maWVsZC0tYWRkcmVzcy5zbS1maWVsZC0tc21hbGwgLnNtLWZpZWxkX19ncm91cC1pdGVtOmZpcnN0LW9mLXR5cGUsCi5zbS1maWVsZC0tYWRkcmVzcy5zbS1maWVsZC0tbWVkaXVtIC5zbS1maWVsZF9fZ3JvdXAtaXRlbTpmaXJzdC1vZi10eXBlICB7CiAgbWFyZ2luLWJvdHRvbTogMDsKfQoKLnNtLWZpZWxkLS1hZGRyZXNzIC5zbS1maWVsZF9faW5wdXQgewogIG1hcmdpbi1ib3R0b206IHZhcigtLXNtLXNtYWxsLW1hcmdpbik7Cn0K"/>
    </form>
    


      <button class="note-delete" onclick="deleteNote(${uid})">
        Delete
      </button>
    </div>
    <div class="note-text">${text}</div>
    <div class="note-date">${date}</div>		
  `;

  notesWrapper.insertBefore(note, notesWrapper.firstChild);
};

const addNote = () => {
  if (title.value.trim().length == 0 && content.value.trim().length == 0) {
    error.innerHTML = "Note cannot be empty";
    return;
  }

  const uid = new Date().getTime().toString();

  const noteObj = {
    uid: uid,
    title: title.value,
    text: content.value,
    date: new Date().toLocaleDateString()
  };

  notesData.push(noteObj);
  localStorage.setItem("notes", JSON.stringify(notesData));
  
  createNote(noteObj.uid, noteObj.title, noteObj.text, noteObj.date);

  error.innerText = "";
  content.value = "";
  title.value = "";
};

const editNote = (uid) => {
  const note = document.getElementById(uid);

  const noteTitle = note.querySelector(".note-title");
  const noteText = note.querySelector(".note-text");
  const noteSave = note.querySelector(".note-save");
  const noteEdit = note.querySelector(".note-edit");

  noteTitle.contentEditable = "true";
  noteText.contentEditable = "true";
  noteEdit.style.display = "none";
  noteSave.style.display = "block";
  noteText.focus();
};

const saveNote = (uid) => {
  const note = document.getElementById(uid);

  const noteTitle = note.querySelector(".note-title");
  const noteText = note.querySelector(".note-text");
  const noteSave = note.querySelector(".note-save");
  const noteEdit = note.querySelector(".note-edit");

  if (
    noteTitle.innerText.trim().length == 0 &&
    noteText.value.trim().length == 0
  ) {
    error.innerHTML = "Note cannot be empty";
    return;
  }

  notesData.forEach((note) => {
    if (note.uid == uid) {
      note.title = noteTitle.innerText;
      note.text = noteText.innerText;
    }
  });

  localStorage.setItem("notes", JSON.stringify(notesData));

  noteTitle.contentEditable = "false";
  noteText.contentEditable = "false";
  noteEdit.style.display = "block";
  noteSave.style.display = "none";
  error.innerText = "";
};

const deleteNote = (uid) => {
  let confirmDelete = confirm("Are you sure you want to delete this note?");
  if (!confirmDelete) {
    return;
  }

  const note = document.getElementById(uid);
  note.parentNode.removeChild(note);
  notesData = notesData.filter((note) => {
    return note.uid != uid;
  });
  localStorage.setItem("notes", JSON.stringify(notesData));
};

window.addEventListener("load", () => {
  notesData = localStorage.getItem("notes")
    ? JSON.parse(localStorage.getItem("notes"))
    : [];
  notesData.forEach((note) => {
    createNote(note.uid, note.title, note.text, note.date);
  });
});