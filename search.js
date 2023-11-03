const data = [
    {
        id: 1,
        title: 'Operating System Crash',
        keywords: ['workstation', 'OS crash', 'stability', 'update', 'hardware', 'logs', 'driver issue'],
        content: 'Situation: I encountered a workstation OS crash.\nTask:\n1. My task was to find the cause and restore stability.\n2. Install a new OS\n3. Check the drivers.\n4. Check updates, hardware, and logs.'
    },
	
    {
        id: 1,
        title: 'Can\'t Log In',
        keywords: ['login', 'password', 'caps lock', 'account access', 'password reset'],
        content: 'Situation: Can\'t Log In. \nTask:\n1.First, check if the Caps Lock key is turned on, as passwords are case-sensitive.\n2. If that\'s not the issue, it could be that your password has expired or your account is temporarily suspended.\n3. In this case, you can receive a link to reset your password.\n4. Sometimes, companies have tools that allow you to reset your password on your own without needing IT help.'
    },
    {
        id: 2,
        title: 'Deleted Important Files',
        keywords: ['deleted files', 'recycle bin', 'file recovery', 'backup'],
        content: 'Situation: Deleted Important Files.\nTask:\n1.First, check your computer\'s recycling bin to see if the files are there.\n2. If they were permanently deleted, IT can restore them from a backup made earlier.\n3. It\'s important not to empty your recycling bin immediately after deleting files, as this makes it easier to recover them.'
    },
    {
        id: 3,
        title: 'Computer is Slow',
        keywords: ['slow computer', 'memory usage', 'temporary files', 'antivirus'],
        content: 'Situation: Computer is Slow.\nTask:\n1.Sometimes, computers slow down because there are too many programs open at once, using up the computer\'s memory.\n2. To fix this, close any programs you\'re not using.\n3. Additionally, temporary files can clog up your computer. IT can help you clean these up.\n4. It\'s also a good idea to have an antivirus program, as it can prevent your computer from getting viruses that might slow it down.'
    },
    {
        id: 4,
        title: 'Internet Outages',
        keywords: ['internet issues', 'Wi-Fi connection', 'router troubleshooting'],
        content: 'Situation: Internet Outages.\nTask:\n1.First, check if other people in your office are having the same issue.\n2.If not, it might be something specific to your computer.\n3. IT can guide you through troubleshooting steps to identify the problem, which might include checking your Wi-Fi connection or restarting your router.'
    },
    {
        id: 5,
        title: 'Printing Issues',
        keywords: ['printer problems', 'printer setup', 'paper jam', 'printer manual'],
        content: 'Situation: Printing Issues.\nTask:\n1.Start by checking if your printer is turned on and properly connected to your computer.\n2. If it\'s a network printer, IT can help you set it up on your computer.\n3. If you\'re having issues with the physical printer, like a paper jam, IT can guide you through fixing these problems using the printer\'s manual.'
    },
    {
        id: 6,
        title: 'Lost Access to Shared Drive',
        keywords: ['shared drive access', 'server connection', 'file access'],
        content: 'Situation: Lost Access to Shared Drive.\nTask:\n1.IT can check if the server (where all the files are stored) is working fine.\n2. If it is, they can help you reconnect to the shared drive, allowing you to access your files again.'
    },
    {
        id: 7,
        title: 'Computer Has a Virus',
        keywords: ['virus infection', 'internet disconnect', 'antivirus software'],
        content: 'Situation: Computer Has a Virus.\nTask:\n1.If you suspect your computer has a virus, it\'s important to disconnect it from the internet immediately to prevent the virus from spreading.\n2. IT can guide you on how to do this safely.\n3. Afterward, they will help you run antivirus software to remove the virus and ensure your computer is safe to use again.'
    },
    {
        id: 8,
        title: 'Keyboard or Mouse Not Working',
        keywords: ['keyboard issues', 'mouse problems', 'wireless devices', 'power', 'battery replacement'],
        content: 'Situation: Keyboard or Mouse Not Working.\nTask:\n1.If you\'re using wireless devices, check if they have fresh batteries and are properly connected to your computer.\n2. IT can guide you through checking the connections and replacing batteries if necessary.'
    },
    {
        id: 9,
        title: 'Blue Screen of Death (BSOD)',
        keywords: ['BSOD error', 'system crash', 'hardware issues', 'safe mode'],
        content: 'Situation: Blue Screen of Death (BSOD).\nTask:\n1.This screen usually means there\'s a serious problem, but sometimes a simple restart can fix it.\n2. If the problem persists, IT can help you run some tests to figure out the cause.\n3. They may need to check your computer\'s hardware components or install updates to resolve the issue.'
    },
    {
        id: 10,
        title: 'Computer Won\'t Start',
        keywords: ['computer not starting', 'power issues', 'hardware problems'],
        content: 'Situation: Computer Won\'t Start.\nTask:\n1.First, check if your computer is properly plugged in and the power cord is working.\n2. IT can guide you through these steps.\n3. If the computer still won\'t start, they may need to send someone to your location to assess the problem in more detail.'
    }
];

// Rest of your code remains unchanged


function search() {
    const query = document.getElementById('searchQuery').value.toLowerCase();
    const results = data.filter(item =>
        item.title.toLowerCase().includes(query) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(query)) ||
        item.content.toLowerCase().includes(query)
    );
    displayResults(results);
}

function formatContent(content) {
    const lines = content.split('\n');
    const formattedLines = lines.map(line => {
        if (line.startsWith('Situation:')) {
            // Apply different font style and color to 'Situation:' lines
            return `<strong style="font-family: 'Arial', sans-serif; color: #07a69c;">${line}</strong>`;
        } else if (line.startsWith('Task:')) {
            // Apply different font style and color to 'Task:' lines
            return `<em style="font-family: 'Verdana', sans-serif; color: #5fa607;">${line}</em>`;
        } else if (line.startsWith('Action:')) {
            // Apply different font style and color to 'Action:' lines
            return `<span style="font-family: 'Courier New', monospace; color: #fdde81;">${line}</span>`;
        }
        // Default style for other lines
        return `<span style="font-family: 'Georgia', serif; color: #000000;">${line}</span>`;
    });
    return formattedLines.join('<br>');
}


function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    results.forEach(result => {
        const resultItem = document.createElement('div');
		resultItem.style.marginBottom = '20px'; // Add some margin between results
        resultItem.className = 'result-item'; // Added class for styling
        resultItem.innerHTML = formatContent(result.content);
        resultsDiv.appendChild(resultItem);
		
    });
}






