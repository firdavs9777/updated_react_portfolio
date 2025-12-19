// src/components/common/ProjectFilter.tsx

import React, { useState } from "react";
import { Search, X, Filter } from "lucide-react";

interface ProjectFilterProps {
  onSearchChange: (search: string) => void;
  onFilterChange: (filters: FilterState) => void;
  technologies: string[];
}

export interface FilterState {
  technologies: string[];
  status: string[];
  featured: boolean | null;
}

export const ProjectFilter: React.FC<ProjectFilterProps> = ({
  onSearchChange,
  onFilterChange,
  technologies,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    technologies: [],
    status: [],
    featured: null,
  });

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    onSearchChange(value);
  };

  const handleTechnologyToggle = (tech: string) => {
    const newTechs = filters.technologies.includes(tech)
      ? filters.technologies.filter((t) => t !== tech)
      : [...filters.technologies, tech];
    
    const newFilters = { ...filters, technologies: newTechs };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleStatusToggle = (status: string) => {
    const newStatuses = filters.status.includes(status)
      ? filters.status.filter((s) => s !== status)
      : [...filters.status, status];
    
    const newFilters = { ...filters, status: newStatuses };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleFeaturedToggle = () => {
    const newFeatured = filters.featured === null ? true : filters.featured === true ? false : null;
    const newFilters = { ...filters, featured: newFeatured };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setFilters({ technologies: [], status: [], featured: null });
    onSearchChange("");
    onFilterChange({ technologies: [], status: [], featured: null });
  };

  const hasActiveFilters = 
    filters.technologies.length > 0 || 
    filters.status.length > 0 || 
    filters.featured !== null ||
    searchTerm.length > 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-8">
      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => handleSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
        />
        {searchTerm && (
          <button
            onClick={() => handleSearchChange("")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          <Filter className="w-4 h-4" />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="px-4 py-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
          >
            Clear All
          </button>
        )}
      </div>

      {/* Filters */}
      {showFilters && (
        <div className="space-y-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          {/* Featured Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Featured
            </label>
            <div className="flex gap-2">
              {[null, true, false].map((value) => (
                <button
                  key={String(value)}
                  onClick={handleFeaturedToggle}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filters.featured === value
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {value === null ? "All" : value ? "Featured" : "Not Featured"}
                </button>
              ))}
            </div>
          </div>

          {/* Status Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Status
            </label>
            <div className="flex flex-wrap gap-2">
              {["completed", "in-progress", "planned"].map((status) => (
                <button
                  key={status}
                  onClick={() => handleStatusToggle(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    filters.status.includes(status)
                      ? "bg-green-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1).replace("-", " ")}
                </button>
              ))}
            </div>
          </div>

          {/* Technology Filter */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Technologies
            </label>
            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto">
              {technologies.map((tech) => (
                <button
                  key={tech}
                  onClick={() => handleTechnologyToggle(tech)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    filters.technologies.includes(tech)
                      ? "bg-blue-600 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

