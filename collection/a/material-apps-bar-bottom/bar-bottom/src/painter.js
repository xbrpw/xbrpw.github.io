class AppBarBottomWorklet {
  static get inputProperties() {
    return [
      '--appbar-background-color',
      '--appbar-scale',
    ]
  }
  
  static get inputArguments() {
    return [
      '<custom-ident>',
    ];
  }
  
  paint(ctx, geom, props, args) {
    const cutoutWidth = 90;
    const halfShapeMinusCutout = (geom.width - cutoutWidth) / 2;
    const bgColor = ~props.get('--appbar-background-color') 
      ? props.get('--appbar-background-color')[0]
      : 'black';
    
    ctx.beginPath();
    ctx.fillStyle = bgColor;
    
    ctx.beginPath();
    
    ctx.moveTo(geom.width,0);
    ctx.lineTo(geom.width,geom.height);
    ctx.lineTo(0,geom.height);
    ctx.lineTo(0,0);
    
    if (args.toString() === 'center') {
      ctx.lineTo(7.06 + halfShapeMinusCutout,0);
      ctx.translate(7.06 + halfShapeMinusCutout,2);
    } else if(args.toString() == 'end') {
      ctx.lineTo(7.06 + geom.width - cutoutWidth, 0);
      ctx.translate(7.06 + geom.width - cutoutWidth,2);
    }
    
    ctx.arc(0,0,2,-1.57,-0.06,0);
    ctx.translate(-7.06,-2);
    ctx.translate(45.01,0);
    ctx.arc(0,0,36,3.09,1.57,1);
    ctx.translate(-45.01,-0);
    ctx.translate(45.05,0);
    ctx.arc(0,0,36,1.57,0.05,1);
    ctx.translate(-45.05,-0.);
    ctx.translate(83,2);
    ctx.arc(0,0,2,-3.08,-1.57,0);
    ctx.translate(-83,-2);
    
    ctx.closePath();
    
    ctx.fill();
  }
}

registerPaint('appBarBottom', AppBarBottomWorklet);