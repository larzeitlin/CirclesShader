bool cirOL(vec2 center, float rad)
{
    return(length(center) < rad);
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec4 col1 = vec4( 0., 0, 0., 1.);
    float f = abs(sin(iTime * 0.02));
    int counter = 0;
    vec2 r =  2.0*vec2(fragCoord.xy - 0.5*iResolution.xy)/iResolution.y;
    float c2 = 0.;
    for(float i = -2.; i < 2.; i += 0.05)
    { 	
        c2+= 10.;
        vec2 temp = r;
        temp.x += i;
        temp.y += sin(c2 * (iTime /400.));
        if(cirOL(temp, f)){ counter += 1; }
    }
    
    if(counter % 2 == 0)
    {
    	col1.r = (float(counter) / 28.);
    	col1.g = (float(counter) / 28.);
    	fragColor = col1;
    }
    
    else
    {
		col1.r = (float(counter) / 28.);
    	col1.b = 1. - (float(counter) / 28.);
    	fragColor = col1;
    }
}
    
    
