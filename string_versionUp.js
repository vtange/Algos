function nextVersion(version){
  version = version.split(".").map(Number);
  version[version.length-1]+=1;
  for(var i=version.length-1;i>0;i--){
      if (version[i]>9){
        version[i] = 0;
        version[i-1] += 1;
      }
  }
  return version.join(".");
}