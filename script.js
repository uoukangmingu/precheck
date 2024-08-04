let count = 1;
const ticketCount = document.getElementById('ticketCount');
const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const buyBtn = document.getElementById('buyBtn');

const links = [
    'https://payapplite.com/l/DuimwY',
    'https://payapplite.com/l/NVchMT',
    'https://payapplite.com/l/mf1g6G',
    'https://payapplite.com/l/ZbU9p6',
    'https://payapplite.com/l/uXZCOa',
    'https://payapplite.com/l/DFK1MR',
    'https://payapplite.com/l/BVnDpu',
    'https://payapplite.com/l/PQ8Bdo',
    'https://payapplite.com/l/PeCcci',
    'https://payapplite.com/l/3leHHb'
];

function updateCount() {
    ticketCount.textContent = count;
}

decreaseBtn.addEventListener('click', () => {
    if (count > 1) {
        count--;
        updateCount();
    }
});

increaseBtn.addEventListener('click', () => {
    if (count < 10) {
        count++;
        updateCount();
    }
});

buyBtn.addEventListener('click', () => {
    if (confirm(`${count}개의 티켓을 구매 하십니까?`)) {
        window.open(links[count - 1], '_blank', 'width=500,height=600');
    }
});

function updateCount() {
    ticketCount.textContent = count;
    ticketCount.style.transform = 'scale(1.1)';
    setTimeout(() => {
        ticketCount.style.transform = 'scale(1)';
    }, 200);
}

