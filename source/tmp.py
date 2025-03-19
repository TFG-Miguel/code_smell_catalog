import re

with open("./eslint_catalog.md", "r") as f:
  data = [line.strip() for line in f.readlines() if line.startswith("|")]

d = dict()

def adapt_to_latex(line:str):
  rule, category, _, description = [item.strip() for item in line.split("|")[1:-1]]
  
  rule, link = rule.removeprefix("[").removesuffix(")").split("](")
  rule = "\\href{" + link + "}{" + rule + "}"
  
  md_links = re.findall(r'<(https?://[^>]+)>', description)
    
  # Reemplazar cada enlace Markdown por el formato LaTeX \url{...}
  for link in md_links:
      description = description.replace(f'<{link}>', f'\\url{{{link}}}')
  description = description

  if category in d.keys():
    category = ''
  else:
    d[category] = 1
  category = "        " +  category
  
  return " & ".join([ category, rule])

for line in data[2:]:
  line = adapt_to_latex(line) + "\\\\"
  if not line.strip().startswith("&"):
    line = f"\hline\n{line}"
  else:
    line = f"\n{line}"
  print(line, end='')