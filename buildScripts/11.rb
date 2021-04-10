FileUtils.rm_rf("packBuild/pack/textures/")
replaceInFile('./packBuild/pack/shaders/glsl/sun_and_moon.vertex', "gl_Position = WORLDVIEWPROJ * (POSITION * vec4(8.0, 8.0, 8.0, 1.0));", "gl_Position = WORLDVIEWPROJ * (POSITION * vec4(16.0, 16.0, 16.0, 16.0));")
replaceInFile('./packBuild/pack/shaders/glsl/renderchunk.fragment', "vec4 diffuse = texelFetch(TEXTURE_0, ivec2((uv0 - localDiffuseCoord) * 1024.0), 0);", "vec4 diffuse = texelFetch(TEXTURE_0, ivec2((uv0) * 1024.0), 0);")
replaceInFile('./packBuild/pack/shaders/glsl/renderchunk.fragment', "normalMap = texelFetch(TEXTURE_0, ivec2((uv0 - localNormalCoord) * 1024.0), 0);", "")
Archive::Zip.archive("packBuild/OSBES11.mcpack", "packBuild/pack/.") # Light nether compatable mode