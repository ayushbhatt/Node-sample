var word=["mean","stack","development"]
var customWords=[]

function addCustomWords(word)
{
  return customWords.push(word)
}

function getCustomWords()
{
  return word.concat(customWords)
}

function replaceWords(a)
{
  for(i in customWords)
  {
    a=a.replace(word[i],"###");
  }
}

export.replaceWords=replacewords;
export.addCustomWords=addcustomwords;
export.getCustomWords=getcustomwords;
