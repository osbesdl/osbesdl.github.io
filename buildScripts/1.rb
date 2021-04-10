FileUtils.rm_rf("packBuild/pack/textures/")
replaceInFile('./packBuild/pack/shaders/glsl/renderchunk.fragment', "vec4 diffuse = texelFetch(TEXTURE_0, ivec2((uv0 - localDiffuseCoord) * 1024.0), 0);", "vec4 diffuse = texelFetch(TEXTURE_0, ivec2((uv0) * 1024.0), 0);")
replaceInFile('./packBuild/pack/shaders/glsl/renderchunk.fragment', "normalMap = texelFetch(TEXTURE_0, ivec2((uv0 - localNormalCoord) * 1024.0), 0);", "")
Archive::Zip.archive("packBuild/OSBES1.mcpack", "packBuild/pack/.") # Compatable mode