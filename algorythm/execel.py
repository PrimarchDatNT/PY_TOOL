import matplotlib.pyplot as plt
import pandas as pd

data = {
    'Category': ['AAAAAA', 'Lost angel lest', 'Columbia', 'Califordlia'],
    'Values': [10, 20, 26, 50],
    'Values2': [42, 50, 20, 30]
}

df = pd.DataFrame(data)

# Calculate total values and sort by them
df['Total'] = df['Values'] + df['Values2']
df = df.sort_values(by='Total', ascending=True)

# Define bar width and padding
bar_width = 0.4
index = range(len(df['Category']))

# Plotting the data
plt.figure(figsize=(12, 8))

# Bars for 'Values'
bars1 = plt.bar([i - bar_width / 2 for i in index], df['Values'], bar_width, color='#3F89EC', label='Values')

# Bars for 'Values2' with padding
bars2 = plt.bar([i + bar_width / 2 for i in index], df['Values2'], bar_width, color='#45F155', label='Values2')

# Add value labels on top of the bars
for bar in bars1:
    height = bar.get_height()
    plt.text(bar.get_x() + bar.get_width() / 2, height, f'{height}', ha='center', va='bottom')

for bar in bars2:
    height = bar.get_height()
    plt.text(bar.get_x() + bar.get_width() / 2, height, f'{height}', ha='center', va='bottom')

plt.xlabel('Category')
plt.ylabel('Values')
plt.title('Sample Bar Chart')
plt.legend()

# Rotate x-axis labels to avoid overlap
plt.xticks(index, df['Category'], rotation=45, ha='right')

plt.tight_layout()  # Adjust layout to make room for rotated x-axis labels
plt.savefig('chart.png')
plt.show()
