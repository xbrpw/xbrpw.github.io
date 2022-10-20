(function() {
  (function($) {
    'use strict';
    $.Ryan = {};
    $.Ryan = (function() {
      var self;
      self = {
        btnAnimation: function() {
          var btnClick, init;
          btnClick = function(varObj) {
            varObj.$btnAnimation.hammer().bind('tap', function() {
              var $this, $thisSvgCheckmark, $thisSvgCircle, $thisText;
              $this = $(this);
              $thisText = $this.children('span');
              $thisSvgCircle = $this.children('.btn__circle');
              $thisSvgCheckmark = $this.children('.btn__checkmark');
              $this.velocity({
                borderColor: '#ddd',
                borderWidth: 3,
                paddingLeft: 0,
                paddingRight: 0,
                height: 68.5,
                width: 68.5
              }, {
                begin: function() {
                  $this.attr('disabled', true);
                },
                complete: function() {
                  $thisSvgCircle.velocity('fadeIn', {
                    delay: 120,
                    complete: function() {
                      $this.addClass('is-progress');
                      new Vivus('btn-success', {
                        duration: 300,
                        type: 'async',
                        start: 'autostart',
                        animTimingFunction: Vivus.EASE_OUT
                      }, function() {
                        $this.addClass('is-vivus-complete');
                        $thisSvgCircle.velocity('fadeOut');
                        $this.velocity({
                          borderRadius: 70,
                          height: 70,
                          width: 193
                        }, {
                          begin: function() {
                            $this.css('border-color', '#19cc95');
                          },
                          complete: function() {
                            $thisSvgCheckmark.velocity('fadeIn', {
                              delay: 100
                            });
                            $this.velocity({
                              backgroundColor: 'transparent',
                              borderWidth: 2,
                              paddingLeft: 70,
                              paddingRight: 70,
                              paddingTop: 25,
                              paddingBottom: 25
                            }, {
                              delay: 2000,
                              begin: function() {
                                $this.removeClass('is-progress is-vivus-complete');
                                $thisSvgCheckmark.velocity('fadeOut', {
                                  duration: 'fast',
                                  begin: function() {
                                    $thisText.velocity('fadeIn');
                                  }
                                });
                              },
                              complete: function() {
                                $this.attr('disabled', false);
                              }
                            });
                          }
                        });
                      });
                    }
                  });
                }
              });
              $thisText.velocity('fadeOut');
            });
          };
          init = function() {
            var varObj;
            varObj = {
              $btnAnimation: $('.btn-animation')
            };
            btnClick(varObj);
          };
          init();
        }
      };
      return self;
    })();
    $.Ryan.btnAnimation();
  })(jQuery);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiPGFub255bW91cz4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBQSxDQUFDLFFBQUEsQ0FBQyxDQUFELENBQUE7SUFDQztJQUNBLENBQUMsQ0FBQyxJQUFGLEdBQVMsQ0FBQTtJQUNULENBQUMsQ0FBQyxJQUFGLEdBQVksQ0FBQSxRQUFBLENBQUEsQ0FBQTtBQUNkLFVBQUE7TUFBSSxJQUFBLEdBQU87UUFBQSxZQUFBLEVBQWMsUUFBQSxDQUFBLENBQUE7QUFFekIsY0FBQSxRQUFBLEVBQUE7VUFBTSxRQUFBLEdBQVcsUUFBQSxDQUFDLE1BQUQsQ0FBQTtZQUNULE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBckIsQ0FBQSxDQUE2QixDQUFDLElBQTlCLENBQW1DLEtBQW5DLEVBQTBDLFFBQUEsQ0FBQSxDQUFBO0FBQ2xELGtCQUFBLEtBQUEsRUFBQSxpQkFBQSxFQUFBLGNBQUEsRUFBQTtjQUFVLEtBQUEsR0FBUSxDQUFBLENBQUUsSUFBRjtjQUNSLFNBQUEsR0FBWSxLQUFLLENBQUMsUUFBTixDQUFlLE1BQWY7Y0FDWixjQUFBLEdBQWlCLEtBQUssQ0FBQyxRQUFOLENBQWUsY0FBZjtjQUNqQixpQkFBQSxHQUFvQixLQUFLLENBQUMsUUFBTixDQUFlLGlCQUFmO2NBQ3BCLEtBQUssQ0FBQyxRQUFOLENBQWU7Z0JBQ2IsV0FBQSxFQUFhLE1BREE7Z0JBRWIsV0FBQSxFQUFhLENBRkE7Z0JBR2IsV0FBQSxFQUFhLENBSEE7Z0JBSWIsWUFBQSxFQUFjLENBSkQ7Z0JBS2IsTUFBQSxFQUFRLElBTEs7Z0JBTWIsS0FBQSxFQUFPO2NBTk0sQ0FBZixFQVFFO2dCQUFBLEtBQUEsRUFBTyxRQUFBLENBQUEsQ0FBQTtrQkFDTCxLQUFLLENBQUMsSUFBTixDQUFXLFVBQVgsRUFBdUIsSUFBdkI7Z0JBREssQ0FBUDtnQkFHQSxRQUFBLEVBQVUsUUFBQSxDQUFBLENBQUE7a0JBQ1IsY0FBYyxDQUFDLFFBQWYsQ0FBd0IsUUFBeEIsRUFDRTtvQkFBQSxLQUFBLEVBQU8sR0FBUDtvQkFDQSxRQUFBLEVBQVUsUUFBQSxDQUFBLENBQUE7c0JBQ1IsS0FBSyxDQUFDLFFBQU4sQ0FBZSxhQUFmO3NCQUNBLElBQUksS0FBSixDQUFVLGFBQVYsRUFBeUI7d0JBQ3ZCLFFBQUEsRUFBVSxHQURhO3dCQUV2QixJQUFBLEVBQU0sT0FGaUI7d0JBR3ZCLEtBQUEsRUFBTyxXQUhnQjt3QkFJdkIsa0JBQUEsRUFBb0IsS0FBSyxDQUFDO3NCQUpILENBQXpCLEVBS0csUUFBQSxDQUFBLENBQUE7d0JBQ0QsS0FBSyxDQUFDLFFBQU4sQ0FBZSxtQkFBZjt3QkFDQSxjQUFjLENBQUMsUUFBZixDQUF3QixTQUF4Qjt3QkFDQSxLQUFLLENBQUMsUUFBTixDQUFlOzBCQUNiLFlBQUEsRUFBYyxFQUREOzBCQUViLE1BQUEsRUFBUSxFQUZLOzBCQUdiLEtBQUEsRUFBTzt3QkFITSxDQUFmLEVBS0U7MEJBQUEsS0FBQSxFQUFPLFFBQUEsQ0FBQSxDQUFBOzRCQUNMLEtBQUssQ0FBQyxHQUFOLENBQVUsY0FBVixFQUEwQixTQUExQjswQkFESyxDQUFQOzBCQUdBLFFBQUEsRUFBVSxRQUFBLENBQUEsQ0FBQTs0QkFDUixpQkFBaUIsQ0FBQyxRQUFsQixDQUEyQixRQUEzQixFQUFxQzs4QkFBQSxLQUFBLEVBQU87NEJBQVAsQ0FBckM7NEJBQ0EsS0FBSyxDQUFDLFFBQU4sQ0FBZTs4QkFDYixlQUFBLEVBQWlCLGFBREo7OEJBRWIsV0FBQSxFQUFhLENBRkE7OEJBR2IsV0FBQSxFQUFhLEVBSEE7OEJBSWIsWUFBQSxFQUFjLEVBSkQ7OEJBS2IsVUFBQSxFQUFZLEVBTEM7OEJBTWIsYUFBQSxFQUFlOzRCQU5GLENBQWYsRUFRRTs4QkFBQSxLQUFBLEVBQU8sSUFBUDs4QkFDQSxLQUFBLEVBQU8sUUFBQSxDQUFBLENBQUE7Z0NBQ0wsS0FBSyxDQUFDLFdBQU4sQ0FBa0IsK0JBQWxCO2dDQUNBLGlCQUFpQixDQUFDLFFBQWxCLENBQTJCLFNBQTNCLEVBQ0U7a0NBQUEsUUFBQSxFQUFVLE1BQVY7a0NBQ0EsS0FBQSxFQUFPLFFBQUEsQ0FBQSxDQUFBO29DQUNMLFNBQVMsQ0FBQyxRQUFWLENBQW1CLFFBQW5CO2tDQURLO2dDQURQLENBREY7OEJBRkssQ0FEUDs4QkFTQSxRQUFBLEVBQVUsUUFBQSxDQUFBLENBQUE7Z0NBQ1IsS0FBSyxDQUFDLElBQU4sQ0FBVyxVQUFYLEVBQXVCLEtBQXZCOzhCQURROzRCQVRWLENBUkY7MEJBRlE7d0JBSFYsQ0FMRjtzQkFIQyxDQUxIO29CQUZRO2tCQURWLENBREY7Z0JBRFE7Y0FIVixDQVJGO2NBMkRBLFNBQVMsQ0FBQyxRQUFWLENBQW1CLFNBQW5CO1lBaEV3QyxDQUExQztVQURTO1VBcUVYLElBQUEsR0FBTyxRQUFBLENBQUEsQ0FBQTtBQUNiLGdCQUFBO1lBQVEsTUFBQSxHQUFTO2NBQUEsYUFBQSxFQUFlLENBQUEsQ0FBRSxnQkFBRjtZQUFmO1lBQ1QsUUFBQSxDQUFTLE1BQVQ7VUFGSztVQUtQLElBQUEsQ0FBQTtRQTVFbUI7TUFBZDthQThFUDtJQS9FVSxDQUFBO0lBZ0ZaLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBUCxDQUFBO0VBbkZELENBQUQsQ0FBQSxDQXFGRSxNQXJGRjtBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiKCgkKSAtPlxuICAndXNlIHN0cmljdCdcbiAgJC5SeWFuID0ge31cbiAgJC5SeWFuID0gZG8gLT5cbiAgICBzZWxmID0gYnRuQW5pbWF0aW9uOiAtPlxuXG4gICAgICBidG5DbGljayA9ICh2YXJPYmopIC0+XG4gICAgICAgIHZhck9iai4kYnRuQW5pbWF0aW9uLmhhbW1lcigpLmJpbmQgJ3RhcCcsIC0+XG4gICAgICAgICAgJHRoaXMgPSAkKHRoaXMpXG4gICAgICAgICAgJHRoaXNUZXh0ID0gJHRoaXMuY2hpbGRyZW4oJ3NwYW4nKVxuICAgICAgICAgICR0aGlzU3ZnQ2lyY2xlID0gJHRoaXMuY2hpbGRyZW4oJy5idG5fX2NpcmNsZScpXG4gICAgICAgICAgJHRoaXNTdmdDaGVja21hcmsgPSAkdGhpcy5jaGlsZHJlbignLmJ0bl9fY2hlY2ttYXJrJylcbiAgICAgICAgICAkdGhpcy52ZWxvY2l0eSB7XG4gICAgICAgICAgICBib3JkZXJDb2xvcjogJyNkZGQnXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogM1xuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IDBcbiAgICAgICAgICAgIHBhZGRpbmdSaWdodDogMFxuICAgICAgICAgICAgaGVpZ2h0OiA2OC41XG4gICAgICAgICAgICB3aWR0aDogNjguNVxuICAgICAgICAgIH0sXG4gICAgICAgICAgICBiZWdpbjogLT5cbiAgICAgICAgICAgICAgJHRoaXMuYXR0ciAnZGlzYWJsZWQnLCB0cnVlXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgY29tcGxldGU6IC0+XG4gICAgICAgICAgICAgICR0aGlzU3ZnQ2lyY2xlLnZlbG9jaXR5ICdmYWRlSW4nLFxuICAgICAgICAgICAgICAgIGRlbGF5OiAxMjBcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogLT5cbiAgICAgICAgICAgICAgICAgICR0aGlzLmFkZENsYXNzICdpcy1wcm9ncmVzcydcbiAgICAgICAgICAgICAgICAgIG5ldyBWaXZ1cygnYnRuLXN1Y2Nlc3MnLCB7XG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAzMDBcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2FzeW5jJ1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogJ2F1dG9zdGFydCdcbiAgICAgICAgICAgICAgICAgICAgYW5pbVRpbWluZ0Z1bmN0aW9uOiBWaXZ1cy5FQVNFX09VVFxuICAgICAgICAgICAgICAgICAgfSwgLT5cbiAgICAgICAgICAgICAgICAgICAgJHRoaXMuYWRkQ2xhc3MgJ2lzLXZpdnVzLWNvbXBsZXRlJ1xuICAgICAgICAgICAgICAgICAgICAkdGhpc1N2Z0NpcmNsZS52ZWxvY2l0eSAnZmFkZU91dCdcbiAgICAgICAgICAgICAgICAgICAgJHRoaXMudmVsb2NpdHkge1xuICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogNzBcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDcwXG4gICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE5M1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGJlZ2luOiAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMuY3NzICdib3JkZXItY29sb3InLCAnIzE5Y2M5NSdcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlOiAtPlxuICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXNTdmdDaGVja21hcmsudmVsb2NpdHkgJ2ZhZGVJbicsIGRlbGF5OiAxMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzLnZlbG9jaXR5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiA3MFxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDcwXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IDI1XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdCb3R0b206IDI1XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxheTogMjAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbjogLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkdGhpcy5yZW1vdmVDbGFzcyAnaXMtcHJvZ3Jlc3MgaXMtdml2dXMtY29tcGxldGUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXNTdmdDaGVja21hcmsudmVsb2NpdHkgJ2ZhZGVPdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246ICdmYXN0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW46IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR0aGlzVGV4dC52ZWxvY2l0eSAnZmFkZUluJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGU6IC0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHRoaXMuYXR0ciAnZGlzYWJsZWQnLCBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuKVxuICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICR0aGlzVGV4dC52ZWxvY2l0eSAnZmFkZU91dCdcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgcmV0dXJuXG5cbiAgICAgIGluaXQgPSAtPlxuICAgICAgICB2YXJPYmogPSAkYnRuQW5pbWF0aW9uOiAkKCcuYnRuLWFuaW1hdGlvbicpXG4gICAgICAgIGJ0bkNsaWNrIHZhck9ialxuICAgICAgICByZXR1cm5cblxuICAgICAgaW5pdCgpXG4gICAgICByZXR1cm5cbiAgICBzZWxmXG4gICQuUnlhbi5idG5BbmltYXRpb24oKVxuICByZXR1cm5cbikgalF1ZXJ5XG4iXX0=
//# sourceURL=coffeescript