const TopNavBar = () => {

    return (
        <nav class="bg-blue-500 p-4">
            <div class="flex justify-between items-center">
                <div class="space-x-4">
                    <a href="/" class="text-white hover:text-gray-200">Home</a>
                    <a href="/about" class="text-white hover:text-gray-200">About</a>
                </div>
            </div>
        </nav>
    );
};

export default TopNavBar;
