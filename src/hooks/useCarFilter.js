import { useState, useEffect, useMemo, useCallback } from 'react';

export const useCarFilter = (cars, initialFilters = {}) => {
  const [filters, setFilters] = useState({
    search: '',
    carType: '',
    priceRange: '',
    transmission: '',
    seats: '',
    fuelType: '',
    minPrice: '',
    maxPrice: '',
    sortBy: 'price-asc',
    ...initialFilters,
  });

  const [filteredCars, setFilteredCars] = useState(cars);

  const filterCars = useCallback(() => {
    let result = [...cars];

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      result = result.filter(car => 
        car.name?.toLowerCase().includes(searchLower) ||
        car.brand?.toLowerCase().includes(searchLower) ||
        car.type?.toLowerCase().includes(searchLower)
      );
    }

    // Car type filter
    if (filters.carType) {
      result = result.filter(car => car.type === filters.carType);
    }

    // Price range filter
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.split('-').map(Number);
      if (min && max) {
        result = result.filter(car => car.price >= min && car.price <= max);
      } else if (min) {
        result = result.filter(car => car.price >= min);
      }
    }

    // Min price filter
    if (filters.minPrice) {
      result = result.filter(car => car.price >= Number(filters.minPrice));
    }

    // Max price filter
    if (filters.maxPrice) {
      result = result.filter(car => car.price <= Number(filters.maxPrice));
    }

    // Transmission filter
    if (filters.transmission) {
      result = result.filter(car => car.transmission === filters.transmission);
    }

    // Seats filter
    if (filters.seats) {
      result = result.filter(car => car.seats >= Number(filters.seats));
    }

    // Fuel type filter
    if (filters.fuelType) {
      result = result.filter(car => car.fuelType === filters.fuelType);
    }

    // Sorting
    switch (filters.sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'year-desc':
        result.sort((a, b) => b.year - a.year);
        break;
      case 'year-asc':
        result.sort((a, b) => a.year - b.year);
        break;
      case 'rating-desc':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'name-asc':
        result.sort((a, b) => a.name?.localeCompare(b.name));
        break;
      default:
        break;
    }

    setFilteredCars(result);
  }, [cars, filters]);

  useEffect(() => {
    filterCars();
  }, [filterCars]);

  const updateFilter = useCallback((key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      search: '',
      carType: '',
      priceRange: '',
      transmission: '',
      seats: '',
      fuelType: '',
      minPrice: '',
      maxPrice: '',
      sortBy: 'price-asc',
    });
  }, []);

  const clearFilter = useCallback((key) => {
    setFilters(prev => ({
      ...prev,
      [key]: '',
    }));
  }, []);

  const getAvailableFilters = useMemo(() => {
    const available = {};
    
    if (cars.length > 0) {
      available.carTypes = [...new Set(cars.map(car => car.type))].filter(Boolean);
      available.transmissions = [...new Set(cars.map(car => car.transmission))].filter(Boolean);
      available.fuelTypes = [...new Set(cars.map(car => car.fuelType))].filter(Boolean);
      available.seats = [...new Set(cars.map(car => car.seats))].filter(Boolean).sort((a, b) => a - b);
      
      const prices = cars.map(car => car.price).filter(Boolean);
      if (prices.length > 0) {
        available.minPrice = Math.min(...prices);
        available.maxPrice = Math.max(...prices);
      }
    }

    return available;
  }, [cars]);

  const isFilterActive = useMemo(() => {
    return Object.values(filters).some(value => 
      value !== '' && value !== 'price-asc' && value !== 0
    );
  }, [filters]);

  const activeFilterCount = useMemo(() => {
    return Object.values(filters).filter(value => 
      value !== '' && value !== 'price-asc' && value !== 0
    ).length;
  }, [filters]);

  return {
    filters,
    filteredCars,
    updateFilter,
    resetFilters,
    clearFilter,
    getAvailableFilters,
    isFilterActive,
    activeFilterCount,
  };
};

export default useCarFilter;