# Analysis for Updating an Angular Code Smells Catalog
This project focuses on analyzing various sources to update and expand a code smells catalog for Angular. The objective is to enhance an existing catalog by incorporating new findings from articles and research papers, ensuring it stays relevant and up-to-date.

## Overview
The project consists of several components that together contribute to updating the Angular code smells catalog:
1. **Source Catalogs**: These are the original catalogs that provide the initial list of code smells. One is based on previous work (our own catalog), and the other draws from recent academic papers and publications.
    - [Own Catalog](./source/own_catalog.md): This is the baseline catalog of code smells for Angular that we started with.\
      >[!note]
      >We generate it from the [analyses file](./analisys/own_catalog.md)
    - [Paper Catalog](./source/paper_catalog.md): This catalog is derived from various academic papers, offering additional insights into Angular-related code smells.
2. **Analysis Documents**: The analysis phase involves comparing and consolidating these source catalogs to create a more comprehensive list.
    - [Own Catalog Analysis](./analisys/own_catalog.md): In this document, the original code smells from our catalog are analyzed.
    - [Catalog Merging](./analisys/join_catalogs.md): This document details the process of merging the source catalogs, identifying overlaps, and selecting the most relevant entries.
3. **Final Result**: After analyzing and merging the catalogs, the updated and expanded catalog of Angular code smells is produced.
    - [Updated Catalog](./result/updated_catalog.md): The final, updated catalog of Angular code smells, which now includes the combined knowledge from both sources and additional analysis.

## Workflow
### Step 1: Catalog Analysis
The initial step involves reviewing and analyzing both the [own catalog](./source/own_catalog.md) and the [paper catalog](./source/paper_catalog.md). Each code smell is examined to understand its relevance, impact, and whether it has been addressed in both sources. This helps identify any gaps or areas of improvement.

### Step 2: Catalog Merging
Once the catalogs have been thoroughly analyzed, the next step is to merge them. This process, detailed in the [Catalog Merging document](./analisys/join_catalogs.md), involves:
- Identifying overlapping entries and determining which version of each code smell is most applicable.
- Integrating new code smells from the paper catalog into the existing structure.
- Removing outdated or redundant entries.

### Step 3: Updated Catalog
The final result of the analysis and merging process is the [Updated Catalog](./result/updated_catalog.md), which includes the newly refined list of Angular code smells. This updated catalog serves as a comprehensive reference for developers working with Angular.

