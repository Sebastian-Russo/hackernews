run scripts

## $ npm start

# What I learned

I replicated the HackerNews website as a step up in dificulty from the weather API.
The main challenge that came here was, HackNews' API is essentially a "data dump" in their own words.
Since there wasn't much structure, I needed to make my own.
The first call you make, sends you an array of 500 id's.
After that, you need to make multiples calls on each id by looping through them, and using Promse.all.
However, if you wait for all 500 at once, the cost is massive, and takes over 3-4 minutes to render. So I needed to paginate and filter through the original array of 400, making a block of ten calls at a time, cutting the wait time down to a couple seconds.
