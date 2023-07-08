The following questions have equal weightage. Each answer MUST be completed within 150 words. The answers MUST not be copy and paste from online sources, but your explanation. This is an opportunity for you to teach :-)

1. Describe pseudo-elements and discuss what are they used for?

Pseudo elements are basically functions that can be applied to selectors that select a more specific part of the selected element. They give you more control over your styling without having to write CSS logic yourself.

2. What's the difference between inline and inline-block displays? When would you use inline-block?

Like the previous question, inline elements do not have top or bottom margins/paddings and only horizontal margin/padding options. Using inline-block allows one to have top and bottom margins/paddings. Using inline can have styling flow over upper/lower text, where using inline block will help prevent that from happening.

3. What are the different ways to visually hide content (and make it available only for screen readers)? So the screen reader software would be able to read it for the visually challenged, but those users who can see fine would not be able to see it? You may have to search around.

Using display: none and visibility hidden will not show the content, but it will still be rendered in. This kind of content can never be seen by a user, but could be seen by some screen reading software. Changing the width and height to 0px, or any method to change pixel sizing to 0 will not show any content, but also not be picked up by a screen reader. Lastly, you can position the text off the screen, this can cause some potential styling issues in the future, but the content will not show up on the screen and can still be parsed by a screen reader.



