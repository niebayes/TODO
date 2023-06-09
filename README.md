
[bookmark](https://mp.weixin.qq.com/s?__biz=MjM5ODYxMDA5OQ==&mid=2651961486&idx=1&sn=b319a87f87797d5d662ab4715666657f&chksm=bd2d0d528a5a84446fb88da7590e6d4e5ad06cfebb5cb57a83cf75056007ba29515c85b9a24c&scene=21#wechat_redirect)


# GSoC x Jina AI

- [ ] use debugger to trace the code path of handling a client request.
- [ ] understand the interaction between the executor worker and the raft worker.
- [ ] figure out how to add follower read for jina
- [ ] figure out any other potential raft optimization for jina. Especially on the server layer.
- [ ] get to know the high-level design idea of jina, i.e. its architecture.

For more, go to 


[link_to_page](1a15db43-a459-4971-b99f-bcfb565d2c9d)


# Project: sync notion workspace to github


I want to present a notion workspace as a blog host. Each page in the workspace will be synced with a markdown file in a github repository. 


This repository uses github action to automatically keep track of the workspace. If the workspace has any update, the github action will schedule a workflow to commit the update to the github repository. The time interval for checking the update will be 5 mins, or you can designate it.


This repository will maintain a [README.md](http://readme.md/) file which presents all other markdown files, i.e. blogs. In the README file, for each blog, the title will be presented. Besides, its summary will be presented. The summary is automatically generated by an AI service by feeding it the blog content. Another AI service will generate keywords and tags. They will also be presented in the README file for each blog.


I now can utilize the notion-to-md project to fetch a notion page given notion api key and page id. I have developed a github action to automatically keep track of the page and save it as a markdown file. The notion-to-md project could handle non-text content, e.g. images, tables, checkboxes, etc.


There’re a bunch of TODOs:

- [ ] figure out how to fetch ids of all pages in a given workspace, which is used as the blog workspace. If I can get all page ids, I can use notion-to-md to save them as markdown files.
- [ ] figure out how the README file keeps track of all blogs in the repository.
	- [ ] This seems a simple question. Just write a shell script to scan all markdown files in the repository. For each markdown file except the README file itself, the shell script constructs a text like `[markdown_filename](markdown_filepath)` and appends the text to the README file. Thus the markdown file could presents the blog.
- [ ] figure out how to deploy an AI service or use an existing AI service to write a summary for a markdown file.
	- [ ] How to summarize non-text content, e.g. images, tables, hyperlinks. Maybe we can utilize multi-modal AI to do the work.
- [ ] figure out how to deploy an AI service or use an existing AI service to generate keys and tags for a markdown file.
	- [ ] The keywords is a concise summary of the blog. Maybe we can use the AI service doing summarization work to do this task too.
	- [ ] In my design, the tags are from a predefined tag set which is provided by the user. Say we have ten predefined tags. The AI service will parse the blog and classify it to the closest tag. Well, maybe top 3 closest tags.
		- [ ] Seems tags are controversial with keywords. Maybe we should discard the tagging feature.
- [ ] Maybe we can develop an AI service to automatically generate a git commit message which summarizes the modification better than that written by human.
- [ ] Publish the github action to the marketplace.
- [ ] Write a tutorial about how to use the github action. You need to play with notion connections to get notion api key, notion api key to get workspace id, database id, page id, github token, github workflows. You have to set github workflow manually, e.g. set read-and-write permission.

So, what’s the motivation? Why don’t simply copy-paste the shared link for each page in the workspace to the README file?


Because it’s tedious. It’s not automatic. 


After all these are set up, each modification on a page, each creation or deletion of a page will be synced with the github repository automatically.


And You could have more control on the presentation of blogs.


Besides, you can use notion as your blog editor and port your blogs to any other note application or blog website.


# Project: develop an AI service to assist you writing a resume


You feed your tech stack, experiences to the AI service. It will generate a resume automatically for you.


Maybe we can provide a set of resume styles.


Maybe we can let the user to provide his/her educational backgroud, current role, pursuing jobs, major, and many more details to assist the AI service.


There’s a product doing the similar thing. 


[bookmark](https://baynana.co/)


# Self-study: architecture and high-level design of Redis


Learn Redis. Not its usage, but its architecture and high-level design.


Especially how Redis is used for caching.


# Self-study: architecture and high-level design of Kubernetes


Techs under the hood. 


How K8S solves problems arising from cloud-native. 


# Courses


## Artificial Intelligence

- [ ] [CS 188](https://inst.eecs.berkeley.edu/~cs188/sp23/)

## Compilers

- [ ] [CS 143](https://web.stanford.edu/class/cs143/)

## Architecture

- [ ] [CS 61C](https://cs61c.org/sp23/)

## Web

- [ ] [CS 142](https://web.stanford.edu/class/cs142/index.html)

## Computer Graphics

- [ ] [GAMES101](http://games-cn.org/intro-graphics/)
- [ ] [GAMES202](https://sites.cs.ucsb.edu/~lingqi/teaching/games202.html)
- [ ] [GAMES103](http://games-cn.org/games103/)
- [ ] [CS 1230](https://cs1230.graphics/)
- [ ] [CMU 15462](http://15462.courses.cs.cmu.edu/spring2023/)
