replaceInFile('./packBuild/pack/shaders/glsl/renderchunk.fragment', "resultLighting += vec3(isHell * 0.125);", "resultLighting += vec3(isHell * 0.4);")
Archive::Zip.archive("packBuild/OSBES"+$exportMode+"01.mcpack", "packBuild/pack/.") # Light nether normal mode