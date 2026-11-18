const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Simulated Database (In production, connect MongoDB or MySQL here)
let db = {
    users: [
        {
            name: 'অ্যাডমিন মহোদয়',
            phone: '+8801770334681',
            profession: 'চাকরিজীবী (Service Holder)',
            age: '32',
            location: 'ঢাকা',
            sscBatch: '2010',
            password: '1',
            profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScWiAVhPvL7XWofFEbi_wjPv1XMyY4Mqis9j4XgowoLg&s=10',
            isEditor: true
        }
    ],
    posts: [],
    notifications: [],
    stories: [
        { id: 'st1', title: 'আজকের তারিখ', text: 'ইংরেজি: ১৯ নভেম্বর ২০২৬ | বাংলা: ৪ অগ্রহায়ণ ১৪৩৩ | আরবি: ৮ জমাদিউল উলা ১৪৪৮ হিজরি।' },
        { id: 'st2', title: 'আজকের কুরআন আয়াত', text: '"তোমরা ধৈর্য ও সালাতের মাধ্যমে সাহায্য প্রার্থনা করো।" (সুরা বাকara: ৪৫)' },
        { id: 'st3', title: 'আজকের হাদিস', text: '"তোমাদের মধ্যে সেই ব্যক্তি উত্তম, যে নিজে কুরআন শেখে এবং অপরকে শেখায়।" (বুখারি)' },
        { id: 'st4', title: 'বাংলার প্রবাদ', text: '"চরে খাওয়া মানুষের মনে অহংকার থাকে না, পরিশ্রমই তাদের বড় পুঁজি।"' },
        { id: 'st5', title: 'সর্বশেষ সংবাদ', text: 'দেশের বিভিন্ন অঞ্চলে শীতের আমেজ ও উন্নয়নমূলক কর্মকাণ্ড নিয়ে বিশেষ প্রতিবেদন প্রকাশিত হয়েছে।' }
    ]
};

// API Endpoints
app.get('/api/state', (req, res) => {
    res.json(db);
});

app.post('/api/sync', (req, res) => {
    db = req.body;
    res.json({ success: true, message: 'Data synced with server successfully!' });
});

app.listen(PORT, () => {
    console.log(`Uthan Server is running on http://localhost:${PORT}`);
});