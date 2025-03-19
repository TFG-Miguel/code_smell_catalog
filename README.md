# Analysis for Updating an Angular Code Smells Catalog
This project focuses on analyzing various sources to update and expand a code smells catalog for Angular. The objective is to enhance an existing catalog by incorporating new findings from articles and research papers, ensuring it stays relevant and up-to-date.

## Overview
The project consists of several components that together contribute to updating the Angular code smells catalog:
1. **Source Catalogs**: These are the original catalogs that provide the initial list of code smells. One is based on previous work (our own catalog), and the other draws from recent academic papers and publications.
    - [Paper Catalog](./source/paper_catalog.md): This catalog is derived from various academic papers, offering additional insights into Angular-related code smells.
    - [EsLint Catalog](./source/eslint_catalog.md): This catalog is the rules catalog of EsLint filter by if the rule isn't fixable.
2. **Analysis Documents**: The analysis phase involves comparing and consolidating these source catalogs to create a more comprehensive list.
    - [Own Catalog Analysis](./analisys/own_catalog.md): In this document, the original code smells from our catalog are analyzed.
    - [Catalog Merging](./analisys/join_catalogs.md): This document details the process of merging the source catalogs, identifying overlaps, and selecting the most relevant entries.
3. **Final Result**: After analyzing and merging the catalogs, the updated and expanded catalog of Angular code smells is produced.
    - [Own Catalog](./source/own_catalog.md): This is the baseline catalog of code smells for Angular that we started with. We generate it from the [analyses file](./analisys/own_catalog.md)
    - [Updated Catalog](./result/updated_catalog.md): The final, updated catalog of Angular code smells, which now includes the combined knowledge from both catalogs ([Own Catalog](./source/own_catalog.md) and [Paper Catalog](./source/paper_catalog.md)).