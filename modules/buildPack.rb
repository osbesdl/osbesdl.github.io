def buildPack(packid)
  resetOptions()
  case packid
  when '00'
      setOption($CompatabilityMode, "0")
      setOption($BrightNether, "0")
  when '01'
      setOption($CompatabilityMode, "0")
      setOption($BrightNether, "1")
  when '10'
      setOption($CompatabilityMode, "1")
      setOption($BrightNether, "0")
  when '11'
      setOption($CompatabilityMode, "1")
      setOption($BrightNether, "1")
  end
  Archive::Zip.archive("packBuild/OSBES"+$exportMode+packid+".mcpack", "packBuild/pack/.")
end