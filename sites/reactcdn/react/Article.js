const Article = ({ id }) => {
    let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio ante, imperdiet eu metus sit amet, ullamcorper porttitor tortor. Integer dapibus quis quam ut viverra. Phasellus eleifend ut tellus ut rutrum. In eleifend lacus ac ligula rhoncus rutrum. Vestibulum et venenatis ex. Sed pretium mi at molestie ullamcorper. Vestibulum blandit metus vitae dolor rhoncus volutpat.Mauris odio ante, imperdiet eu metus sit amet, ullamcorper porttitor tortor. Integer dapibus quis quam ut viverra. Phasellus eleifend ut tellus ut rutrum.";
    switch (id) {
        case (0):
            content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris odio ante, imperdiet eu metus sit amet, ullamcorper porttitor tortor. Integer dapibus quis quam ut viverra. Phasellus eleifend ut tellus ut rutrum. In eleifend lacus ac ligula rhoncus rutrum. Vestibulum et venenatis ex. Sed pretium mi at molestie ullamcorper. Vestibulum blandit metus vitae dolor rhoncus volutpat.Mauris odio ante, imperdiet eu metus sit amet, ullamcorper porttitor tortor. Integer dapibus quis quam ut viverra. Phasellus eleifend ut tellus ut rutrum."
            break;
        case (1):
            content = "Ut enim urna, hendrerit sed neque sit amet, tincidunt finibus erat. Integer iaculis nibh sit amet rutrum scelerisque. Proin ac lectus semper, pharetra quam a, venenatis sapien. Duis dignissim est a odio vestibulum hendrerit. Morbi non interdum leo. Integer vulputate felis quis tortor viverra suscipit. Morbi a sapien faucibus, suscipit nulla ac, dapibus diam. Phasellus vel lorem diam. Nam sodales nec erat in luctus. Cras luctus felis est, ut sagittis tortor rutrum non. Duis vitae ante a mauris tempus mollis. Nulla eu enim nunc."
            break;
        case (2):
            content = "Curabitur ultrices, felis id mattis vulputate, justo leo condimentum nunc, a maximus nunc nulla in justo. Sed vehicula vulputate purus, sit amet rutrum mi ullamcorper id. Fusce mattis sem ante, dapibus gravida mi finibus quis. Nam viverra nisi odio. In a fermentum leo. Etiam vestibulum felis eget aliquam vestibulum. Nulla a mattis ipsum. Sed ullamcorper feugiat elit, sed molestie quam. Nulla finibus velit at libero placerat, in ultricies turpis commodo. Suspendisse interdum metus sit amet erat rutrum, quis aliquet lorem congue."
            break;
        case (3):
            content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et blandit nisi. Aenean dapibus, nisi id venenatis ultrices, libero augue ullamcorper leo, et fermentum nunc eros at dui. Nulla ullamcorper, nulla eu bibendum gravida, lectus metus ultrices mi, sed maximus magna diam at lacus. Sed non massa faucibus, malesuada nunc eu, fringilla purus. Sed sagittis ante ac augue tempor, nec interdum nisl dignissim. Vivamus vulputate, ex eu semper vehicula, augue ipsum dignissim lorem, vel maximus justo massa ac justo. Morbi eu tortor at orci interdum semper. Integer et suscipit ligula. Sed vel lacinia risus. Sed justo urna, fringilla in est sed, bibendum facilisis nunc."
            break;
        case (4):
            content = "Nullam eu magna tincidunt, viverra ligula at, tempus arcu. Pellentesque dapibus pretium ligula, gravida eleifend ex. Praesent pellentesque mattis eros vel sodales. Vestibulum ornare urna sem. Ut convallis dapibus tortor, vel iaculis purus imperdiet sed. Etiam tincidunt venenatis nunc vel auctor. Fusce suscipit vulputate est. Integer id facilisis dui, nec tempor lorem. Nam ut metus sollicitudin, ultricies purus vel, vulputate erat. Nunc porta orci sit amet libero mollis, non varius mi fringilla. In hac habitasse platea dictumst. Aenean eget turpis mattis, egestas massa ut, consectetur libero. Donec aliquam purus in urna laoreet, sit amet suscipit mauris mattis."
            break;
    }
    return (
        <div className="card">
            <div className="card-header bg-light">
                <h4 className="display-6 mb-0">Article Number {id}</h4>
            </div>
            <div className="card-body">
                <p className="card-text">{content}</p>
            </div>
        </div>
    )
}