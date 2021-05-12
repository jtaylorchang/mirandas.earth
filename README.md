# mirandas.earth

This website is built using [Docusaurus 2](https://v2.docusaurus.io/), a modern static website generator.

## Posting to the blog

1. Open the [`blog`](https://github.com/jtaylorchang/mirandas.earth/tree/master/blog) folder
2. Select "Add file" > "Create new file"
3. Give your file a name. The name must fit the following criteria:

   - Start with the date in `YYYY-MM-DD` format
   - Have some title consisting of words separated by dashes instead of spaces
   - End in the extension `.md`
   - Example: `2021-05-12-welcome-to-mirandas-earth.md`

4. Copy and paste the following to the top of the file:

```
---
slug: REPLACE ME
title: REPLACE ME
author: Miranda Johnson
author_title: Earth, Society, & Environmental Sustainability
author_url: https://mirandas.earth
author_image_url: https://mirandas.earth/img/logo512.png
tags: [blog]
---

The body of my blog post!
```

5. Replace the follwoing values. See below for what each one should be:

   - slug: part of the URL that makes the post have a unique link. A good rule of thumb would be to use the same value as your file name (minus the date and .md). So for the example, you would have the line `slug: welcome-to-mirandas-earth`
   - title: the title of the post shown when someone is looking at your website. It can be whatever you want. For the example it would be `title: Welcome to Miranda's Earth`
   - tags: if you want, you can add a list of tags for the post, think of them like hashtags. They should be in a list separated by commas inside brackets. Example: [blog, school]

6. Write your post using `markdown` syntax (supports headings, bold, italics, underlines, bullet points, images, links, etc). You can preview your post (ignore the table it will show at the top) by clicking "Preview"
7. Click "Commit changes" and then wait for the website to update (it can take a little while)

Note: if you need to, you can always edit the file as many times as you need by selecting the file and then clicking the pencil. You can also delete posts.

## School

Edit files in `docs/school/`

## Work

Edit files in `docs/work/`
