document.getElementById('applyColors').addEventListener('click', function() {
    const backgroundColor = document.getElementById('color1').value;
    const textColor = document.getElementById('color2').value;

    document.getElementById('colorBox1').style.backgroundColor = backgroundColor;
    document.getElementById('colorBox1').style.color = textColor;

    // Calculate contrast ratio
    const contrastRatio = calculateContrastRatio(backgroundColor, textColor);
    const resultText = `Contrast Ratio: ${contrastRatio.toFixed(2)}`;
    document.getElementById('contrastResult').textContent = resultText;

    // WCAG Recommendations
    const wcagLevel = getWCAGLevel(contrastRatio);
    const wcagRecommendation = getWCAGRecommendation(wcagLevel);
    document.getElementById('contrastResult').textContent += `\n${wcagRecommendation}`;

    // Generate recommendations
    const recommendations = generateRecommendations(backgroundColor);
    displayRecommendations(recommendations);
});

function calculateContrastRatio(color1, color2) {
    const luminance1 = calculateLuminance(color1);
    const luminance2 = calculateLuminance(color2);

    const lighter = Math.max(luminance1, luminance2);
    const darker = Math.min(luminance1, luminance2);

    return (lighter + 0.05) / (darker + 0.05);
}

function calculateLuminance(color) {
    const rgb = hexToRgb(color);
    const [r, g, b] = rgb.map(c => {
        c /= 255;
        return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    });

    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return [r, g, b];
}

function getWCAGLevel(contrastRatio) {
    if (contrastRatio >= 7) {
        return 'AAA';
    } else if (contrastRatio >= 4.5) {
        return 'AA';
    } else if (contrastRatio >= 3) {
        return 'AA Large';
    } else {
        return 'Fail';
    }
}

function getWCAGRecommendation(wcagLevel) {
    switch (wcagLevel) {
        case 'AAA':
            return 'WCAG AAA: Excellent contrast for all text sizes.';
        case 'AA':
            return 'WCAG AA: Good contrast for normal text sizes.';
        case 'AA Large':
            return 'WCAG AA Large: Good contrast for large text sizes (18pt+ or bold 14pt+).';
        case 'Fail':
            return 'WCAG Fail: Insufficient contrast. Consider increasing the contrast for better accessibility.';
        default:
            return 'Unknown WCAG level.';
    }
}

function generateRecommendations(backgroundColor) {
    const textColors = [
        '#000000', // Black
        '#ffffff', // White
        '#1a1a1a', // Dark Gray
        '#cccccc', // Light Gray
        '#ff0000', // Red
        '#00ff00', // Green
        '#0000ff', // Blue
    ];

    const recommendations = textColors
        .map(textColor => ({
            textColor,
            contrastRatio: calculateContrastRatio(backgroundColor, textColor)
        }))
        .sort((a, b) => b.contrastRatio - a.contrastRatio)
        .slice(0, 3);

    return recommendations;
}

function displayRecommendations(recommendations) {
    const recommendationsContainer = document.getElementById('recommendations');
    recommendationsContainer.innerHTML = '';

    recommendations.forEach((recommendation, index) => {
        const recommendationElement = document.createElement('div');
        recommendationElement.className = 'recommendation';

        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = recommendation.textColor;
        colorBox.style.color = recommendation.textColor;
        colorBox.textContent = `Option ${index + 1}`;

        const contrastText = document.createElement('span');
        contrastText.textContent = `Contrast Ratio: ${recommendation.contrastRatio.toFixed(2)}`;

        recommendationElement.appendChild(colorBox);
        recommendationElement.appendChild(contrastText);
        recommendationsContainer.appendChild(recommendationElement);
    });
}