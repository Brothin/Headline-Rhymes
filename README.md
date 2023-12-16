# Headline-Rhymes
Created a chrome extension that changes the major headlines on any major Indian newspaper site (I have taken Times of India as reference) into mini rhymes. Implemented a secure authentication system to authorize users into our system and prevent from any unwanted access to our extension.

# Tech-Stack
HTTML, CSS, Vanilla JavaScript, Python, Flask

# Steps taken
1. Leant how to deploy a webpage in the form of extension over Google Chrome. Created Manifest file and provided all necessary information to implement this.

2. Created a user friendly UI with proper height and width that matches with the expectation of a proper extension.

3. Created an authetication system using Vanilla javaScript which takes username, password and email id as input and follow some rules to authorize valid users.

4. Upon authentication, users can access homepage where on a single click of a button, they can access rhymes based on news headlines.

5. The Chrome extension API has utilities that can be used by any extension page. Used Chrome.tabs API to allow users to interact with the browser's tab system.

6. Now, I fetch all the Headlines from my newspaper site and pass each of them to my server to generate rhymes. I made a POST request to the Flask server running on PORT 5000,  passing onto my headlines as header.

7. I used the concept of basic reverse transformation to generate rhymes and once I generate the rhyme from my server, I pass that back to my homepage page to display them to the user.
