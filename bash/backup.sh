info=$1
if ["$info" = ""]; then
  info=" update content !"
fi
git add -A
git commit -m "$info"
git push origin valaxy
#git push coding hexo
